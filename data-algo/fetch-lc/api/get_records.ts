import { primitiveValueMap } from '../data/data-mapping'
import { save_csv } from '../utils/csv_analyze'
import { DAILY_HEADINGS } from './api_lc_query'
import { getDailyRange } from './get_daily_filter'

export const getLeetDaily = async () => {
    const daily_csv = [DAILY_HEADINGS]
    const weekly_csv = [DAILY_HEADINGS]

    const processFunc = (response: any) => {
        append_to_arr(response['challenges'], daily_csv)
        append_to_arr(response['weeklyChallenges'], weekly_csv)
    }

    await getDailyRange(processFunc)

    save_csv(daily_csv, 'daily')
    save_csv(weekly_csv, 'weekly')

    console.log('✅ DONE getLeetDaily')
}

export type QuestionItem = {
    [key: string]: any
    question: {
        [key: string]: any
    }
}

export function append_to_arr(
    response: QuestionItem[],
    arr: string[][]
): string[][] {
    const HEADINGS = arr[0]

    for (const daily of response) {
        const row: string[] = []

        for (const headKey of HEADINGS) {
            const dailyInfo = daily[headKey]
            if (dailyInfo !== undefined) {
                row.push(primitiveValueMap(headKey, dailyInfo))
                continue
            }

            const detailInfo = daily['question']

            let value = primitiveValueMap(headKey, detailInfo[headKey])
            // override below if special Keys

            if (headKey === 'topicTags')
                value = value.map((el: any) => el.slug).join(', ')
            if (headKey === 'similarQuestion') value = value.join(', ')

            // if (headKey === 'acRate') {
            //     const stats = JSON.parse(detailInfo['stats'])
            //     value = stats['acRate'].replace('%', '')
            // }

            row.push(value)
        }

        arr.push(row)
    }

    return arr
}
