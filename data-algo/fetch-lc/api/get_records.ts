import { DAILY_HEADINGS, LC_COM } from './api_lc_query'
import { getDailyRange } from './get_daily_filter'
import { save_csv } from '../utils/csv_analyze'

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

export function append_to_arr(response: QuestionItem[], arr: string[][]): string[][] {
    const HEADINGS = arr[0]
    
    for (const daily of response) {
        let row: string[] = []
        for (const headKey of HEADINGS) {
            let dailyInfo = daily[headKey]

            if (dailyInfo !== undefined) {
                if (headKey === 'link') dailyInfo = LC_COM + dailyInfo

                row.push(dailyInfo)
                continue
            }

            const detailInfo = daily['question']

            let value = detailInfo[headKey] // override if special Keys

            if (headKey === 'status') value = value === 'ac' ? 'X' : ''
            if (headKey === 'isPaidOnly') value = value ? '!!!' : ''
            if (headKey === 'topicTags') {
                value = detailInfo[headKey].map((el: any) => el.slug).join(', ')
            }

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

