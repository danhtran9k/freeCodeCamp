import { ALL_LC, LC_SELF_FINISH_SET } from './data-importer'
import { longRecent } from './filterData/long'

type TRecent = { id: string | number; titleSlug: string; difficulty?: string }
export const mapRecent = () => {
    const recentRes: TRecent[] = longRecent

    const missMatch: TRecent[] = []
    const notDone: TRecent[] = []
    const done: TRecent[] = []

    for (const item of recentRes) {
        const { titleSlug } = item
        const question = ALL_LC.find((q) => q.titleSlug === titleSlug)

        if (!question) {
            missMatch.push(item)
            console.log(`❌ ${titleSlug} NOT FOUND`)
            continue
        }

        item.id = question.questionFrontendId
        item.difficulty = question.difficulty

        if (LC_SELF_FINISH_SET.has(question.questionFrontendId)) {
            done.push(item)
        } else {
            notDone.push(item)
        }
    }

    console.log({
        missMatch,
        notDone,
        done
    })

    return recentRes
}
