import fs from 'fs'

import { parse } from 'csv-parse'
import { getRelativePath } from '../getPath'

const escapeCsvCell = (s) => {
    const ESCAPE_CHAR = '""'
    const hasCharNeedEscape = String(s).match(/,|"/)
    if (!hasCharNeedEscape) return s

    return `"${s.replace(/"/g, ESCAPE_CHAR)}"`
}

export const save_to_file = (filename, ext, data) => {
    if (ext === 'json') data = JSON.stringify(data, null, 2)

    const filePath = getRelativePath(`${filename}.${ext}`)
    fs.writeFileSync(filePath, data, 'utf8')

    console.log(`✅ Saved ${filename} to ${filePath}`)
}

export function save_csv(arr, filename) {
    // arr: string[][], row: string[]
    const content = arr
        .map((row) => row.map(escapeCsvCell).join(','))
        .join('\n')

    save_to_file(filename, 'csv', content)
}

export const read_stream_csv = (filename) =>
    new Promise((resolve, reject) => {
        const headers = {} // Record<string, number>
        const rows = []

        let isHeaderRead = false

        const processStream = (row) => {
            if (!isHeaderRead) {
                row.forEach((col, i) => (headers[col] = i))
                isHeaderRead = true
            } else {
                rows.push(row)
            }
        }

        fs.createReadStream(filename)
            .pipe(parse({ delimiter: ',' }))
            .on('data', processStream)
            .on('end', () => resolve({ rows, headers }))
            .on('error', reject)
    })

// =======================================
// ANALYSIS UTILS
export const initDiff = () => {
    const DIFFS = ['Easy', 'Medium', 'Hard']
    const diff_counts = {}

    for (const diff of DIFFS) {
        diff_counts[diff] = {
            count: 0,
            day: Array(7).fill(0)
        }
    }
    return diff_counts
}

export const round = (num) => {
    return parseFloat(num).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        roundingMode: 'trunc'
    })
}

// =======================================
// SMALL UTILS
export const compare = (a, b) => {
    if (a > b) return 1
    if (a < b) return -1
    return 0
}

export function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export const exit = (msg) => {
    console.error(msg)
    throw new Error(msg)
}
