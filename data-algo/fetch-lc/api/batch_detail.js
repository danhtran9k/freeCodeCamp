import { ALL_LC } from '../data/data-importer.js'
import { exit, save_to_file, sleep } from '../utils/csv_analyze.js'
import { fetchDetail } from './fetch_detail.js'

// import details from '../detail.json' assert { type: 'json' }
let details = []

try {
    details = await import('../detail.json', { assert: { type: 'json' } }).then(
        (m) => m.default
    )
} catch (err) {
    console.warn('detail.json not found. Using fallback.')
    details = [] // dummy fallback
}

const IX_FE_START = details.length ? details.at(-1).questionFrontendId : '1'
const BATCH = 10
const BATCH_COUNT = 5

const SLEEP_TIME = 1000 // Sleep 1s giữa các batch

export const batchCrawlDetail = async () => {
    const length = ALL_LC.length

    let ix = ALL_LC.findIndex((q) => q.questionFrontendId === IX_FE_START)
    if (ix === -1) exit(`NO ix_start ${IX_FE_START}`)

    const getBatch = () => {
        const batch = []

        for (let count = 1; count <= BATCH; count++) {
            ix++
            if (ix >= length) break

            batch.push(ALL_LC[ix])
        }

        return batch
    }

    for (let count = 1; count <= BATCH_COUNT; count++) {
        const batch = getBatch()

        if (!batch.length) break

        const resBatch = await Promise.all(batch.map((q) => fetchDetail(q)))

        for (const res of resBatch) details.push(res)

        console.log(`✅ batch ${count} - ${ix}`)
        await sleep(SLEEP_TIME)
    }

    save_to_file(`batch_${ix}`, 'json', details)
    console.log(`✅ DONE ${ix}`)
}
