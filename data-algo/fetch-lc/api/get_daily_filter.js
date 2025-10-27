import { lcGetQl } from './fetch-QL'
import { sleep } from '../utils/csv_analyze'
import { DAILY_PARAMS, daily_get_url } from './api_lc_query'

export const getDailyRange = async (processFunc) => {
    const { START_YEAR, START_MONTH, END_YEAR, END_MONTH, SLEEP_TIME } =
        DAILY_PARAMS

    // first daily: 2020-04 (first weekly: 2020-08)
    for (let year = START_YEAR; year <= END_YEAR; year++) {
        for (let month = 1; month <= 12; month++) {
            if (
                (year == START_YEAR && month < START_MONTH) ||
                (year == END_YEAR && month > END_MONTH)
            ) {
                continue
            }

            console.log(`🔵 fetching: ${year}-${month}`)
            const url = daily_get_url(year, month)

            const payload = await lcGetQl(url)
            const res = payload?.dailyCodingChallengeV2
            processFunc(res)

            await sleep(SLEEP_TIME)
        }
    }
}
