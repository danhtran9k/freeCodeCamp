// @ts-nocheck
import all_lc_global from './nonjs/all_lc_global.json' assert { type: 'json' }

import dp_by_cate from './filterData/dp_by_cate.json' assert { type: 'json' }
import ratingv2 from './filterData/ratingv2.json' assert { type: 'json' }
import { PHUOC_DATA } from './filterData/phuoc'

import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { parse } from 'csv-parse/sync'

//  ===============================================================
// TYPING
//  ===============================================================

export type TAllProblems = {
    difficulty: 'easy' | 'medium' | 'hard'
    id: number
    questionFrontendId: string
    titleSlug: string
    topicTags: string[]

    paidOnly: boolean
    frequency: number
    contestPoint: number

    rating: number
    follow_ups: number
    code_snippets: number

    // detail crawl
    categoryTitle: string
    hasSolution: boolean
    hasVideoSolution: boolean
    canSeeDetail: boolean
    similarQuestion: number[]
    similarCount: number
}

export type TDPProblems = {
    questionFrontendId: string
    titleSlug: string
    difficulty: 'Easy' | 'Medium' | 'Hard'
    cateDp: string
    subCate: string
}

export type TRatingv2Data = {
    Rating: number
    ID: number
    TitleSlug: string
}

// VÌ các thư viện này phải cấu hình lại ts
// chạy for fun nên khỏi
// dùng js thuần để skip type

//  ===============================================================
// PATH LOAD
//  ===============================================================

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const loadSelfFinishCSV = () => {
    const csvPath = join(__dirname, 'nonjs', 'lc_self_finish.csv')
    const csvContent = readFileSync(csvPath, 'utf-8')

    const records = parse(csvContent, {
        skip_empty_lines: true,
        trim: true
    })

    const ids = records.map((row) => row[0] ?? '0')
    return new Set<string>(ids)
}

//  ===============================================================
// MAIN CHECKPOINT EXPORT
//  ===============================================================

export const ALL_LC = all_lc_global.questions as TAllProblems[]
export const all_free_problems = ALL_LC.filter(
    (q) => !q.paidOnly
) as TAllProblems[]

export const LC_SELF_FINISH_SET = loadSelfFinishCSV()

//  ===============================================================
// other list
//  ===============================================================

export const dp_200_prob = dp_by_cate as TDPProblems[]
export const ratings = ratingv2 as TRatingv2Data[]

export const PHUOC_HARD_IDS = PHUOC_DATA.map((question) => {
    // Lấy phần string trước dấu . đầu tiên
    const match = question.match(/^(\d+)\./)
    return match ? match[1] : 0
}).filter(
    (id) => id !== null && id !== 0 && !LC_SELF_FINISH_SET.has(id.toString())
)
