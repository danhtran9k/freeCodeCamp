import { lcGetQl } from './utils/fetch-QL'
import {
    DAILY_PARAMS,
    DAILY_HEADINGS,
    LC_COM,
    daily_get_url
} from './utils/lc-query'
import { save_file, sleep } from './utils/csv_analyze'

export const getLeetDaily = async () => {
    const daily = [DAILY_HEADINGS]
    const weekly = [DAILY_HEADINGS]
    const { START_YEAR, START_MONTH, END_YEAR, END_MONTH } = DAILY_PARAMS

    // first daily: 2020-04 (first weekly: 2020-08)
    for (let year = START_YEAR; year <= END_YEAR; year++) {
        for (let month = 1; month <= 12; month++) {
            if (
                (year == START_YEAR && month < START_MONTH) ||
                (year == END_YEAR && month > END_MONTH)
            ) {
                continue
            }

            console.log(`fetching: ${year}-${month}`)

            const url = daily_get_url(year, month)
            const payload = await lcGetQl(url)
            const res = payload?.dailyCodingChallengeV2

            append_to_arr(res['challenges'], daily)
            append_to_arr(res['weeklyChallenges'], weekly)

            await sleep(2000) // to prevent rate limiting
        }
    }

    save_file(daily, 'daily')
    save_file(weekly, 'weekly')

    console.log('finished writing')
}

function append_to_arr(response, arr) {
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
