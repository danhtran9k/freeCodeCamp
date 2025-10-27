import { getRelativePath } from './getPath'
import { compare, initDiff, round, read_stream_csv } from './utils/csv_analyze'

const FILE_NAME = './data/daily.csv'

export const analysis_lc_csv = async () => {
    const path = getRelativePath(FILE_NAME)
    const { rows, headers } = await read_stream_csv(path)
    // headers: date, titleSlug, questionFrontendId, title, difficulty, acRate
    const counts = {}
    const last_appearance = {}
    const questions = {}
    const min_occurences = {} // minimum time to reoccur for each question
    const recur_times = []
    const diff_counts = initDiff()

    for (const row of rows) {
        const d = row[headers['date']].split('-')
        const date = Date.UTC(d[0], d[1] - 1, d[2])
        // const slug = row[index['titleSlug']]
        const id = row[headers['questionFrontendId']]
        const title = row[headers['title']]
        const difficulty = row[headers['difficulty']]

        diff_counts[difficulty]['count'] += 1
        diff_counts[difficulty]['day'][new Date(date).getUTCDay()] += 1

        questions[id] = `${id}. ${title} (${difficulty})`
        if (id in last_appearance) {
            if (
                !(id in min_occurences) ||
                date - last_appearance[id] < min_occurences[id][0]
            ) {
                min_occurences[id] = [
                    date - last_appearance[id],
                    last_appearance[id],
                    date
                ]
            }
            recur_times.push(date - last_appearance[id])
        }
        counts[id] = id in counts ? counts[id] + 1 : 1
        last_appearance[id] = date
    }

    const count_of_counts = {}
    for (const q of Object.keys(counts)) {
        const c = counts[q]
        count_of_counts[c] = c in count_of_counts ? count_of_counts[c] + 1 : 1
    }

    console.log('\nGeneral Stats\n=======')
    console.log(`Total dailies: ${rows.length}`)
    console.log(`Unique questions: ${Object.keys(questions).length}`)
    console.log(
        `Number of questions that reoccurred: ${
            Object.keys(min_occurences).length
        }`
    )
    console.log(
        `Avg. Recur Time: ${round(
            recur_times.reduce((partialSum, a) => partialSum + a, 0) /
                (recur_times.length * 60 * 60 * 1000 * 24)
        )} Days`
    )

    console.log('\nDifficulty Count\n=======')
    for (const diff of Object.keys(diff_counts)) {
        console.log(
            `${diff.padEnd(7)}: ${diff_counts[diff]['count']} (${round(
                (100 * diff_counts[diff]['count']) / rows.length
            )}%)`
        )
    }

    console.log('\nDifficulty Day Frequency\n=======')
    for (const diff of Object.keys(diff_counts)) {
        console.log(
            `${diff.padEnd(7)}: ${diff_counts[diff]['day'].map((x) =>
                round((100 * x) / diff_counts[diff]['count']).padEnd(7)
            )}`
        )
    }

    console.log('\nQuestion Frequency\n=======')
    for (const c of Object.entries(count_of_counts)) {
        console.log(
            `${c[0]} Appearance${c[0] > 1 ? 's' : ' '} : ${c[1]} Questions`
        )
    }

    console.log('\nMinimum time since occurence\n=======')
    for (const q of Object.entries(min_occurences)
        .sort((a, b) => compare(a[1][0], b[1][0]))
        .slice(0, 5)) {
        console.log(questions[q[0]])
        console.log(
            `${q[1][0] / (1000 * 60 * 60 * 24)} days : ${new Date(q[1][1])
                .toUTCString()
                .slice(0, 16)} - ${new Date(q[1][2])
                .toUTCString()
                .slice(0, 16)}\n`
        )
    }

    // save recur times for histogram

    // const RATES = [['date', 'acRate']]
    // const acRate = row[headers['acRate']]
    // RATES.push([new Date(date).getUTCDate(), acRate])

    //fs.writeFileSync("recur.csv", recur_times.map((x) => x / (60 * 60 * 1000 * 24)).join(","), 'utf8');
    // save acRate vs date
    //fs.writeFileSync("acRate.csv", RATES.map(row => row.join(",")).join("\n"), 'utf8');
}
