// @ts-nocheck
import problemsData from './nonjs/problems_minify.json' assert { type: 'json' }
import dp_by_cate from './filterData/dp_by_cate.json' assert { type: 'json' }
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { parse } from 'csv-parse/sync'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export type TFreeProblems = {
    title: string
    frontend_id: string
    difficulty: 'Easy' | 'Medium' | 'Hard'
    problem_slug: string
    topics: string[]
    follow_ups: boolean
    code_snippets: number
}

export type TDPProblems = {
    questionFrontendId: string
    titleSlug: string
    difficulty: 'Easy' | 'Medium' | 'Hard'
    cateDp: string
    subCate: string
}

// VÌ các thư viện này phải cấu hình lại ts
// chạy for fun nên khỏi
// dùng js thuần để skip type

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

export const LC_SELF_FINISH_SET = loadSelfFinishCSV()
export const all_free_problems = problemsData.questions as TFreeProblems
export const dp_200_prob = dp_by_cate as TDPProblems
