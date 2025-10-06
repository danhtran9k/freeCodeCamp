import { DAILY_HEADINGS, LC_COM } from './api/api_lc_query'
import { getDailyRange } from './api/get_daily_filter'
import { save_file } from './utils/csv_analyze'

export const getLeetDaily = async () => {
    const daily_csv = [DAILY_HEADINGS]
    const weekly_csv = [DAILY_HEADINGS]

    const processFunc = (response) => {
        append_to_arr(response['challenges'], daily_csv)
        append_to_arr(response['weeklyChallenges'], weekly_csv)
    }

    await getDailyRange(processFunc)

    save_file(daily_csv, 'daily')
    save_file(weekly_csv, 'weekly')

    console.log('finished writing')
}

export function append_to_arr(response, arr) {
    for (const daily of response) {
        let row = []
        for (const headKey of DAILY_HEADINGS) {
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
                value = detailInfo[headKey].map((el) => el.slug).join(', ')
            }

            // if (headKey === 'acRate') {
            //     const stats = JSON.parse(detailInfo['stats'])
            //     value = stats['acRate'].replace('%', '')
            // }

            row.push(value)
        }

        arr.push(row)
    }
}
