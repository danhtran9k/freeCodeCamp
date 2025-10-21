// @ts-ignore
import problemsData from './problems_minify.json' assert { type: 'json' }

export type TFreeProblems = {
    title: string
    frontend_id: string
    difficulty: 'Easy' | 'Medium' | 'Hard'
    problem_slug: string
    topics: string[]
    follow_ups: boolean
    code_snippets: number
}

export const all_free_problems = problemsData.questions as TFreeProblems
