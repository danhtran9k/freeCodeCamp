import { all_free_problems, LC_SELF_FINISH_SET } from '../data/data-importer'
import { PHUOC_ALL, PHUOC_DATA } from '../data/phuoc'
import { append_to_arr } from './get_records.js'
import { save_csv } from '../utils/csv_analyze.js'

const TODO_HEADINGS = [
    'link',
    'questionFrontendId',
    'titleSlug',
    'difficulty',
    'topicTags'
]

const done = LC_SELF_FINISH_SET
const questions = all_free_problems

const todoIds = PHUOC_DATA.map((question) => {
    // Lấy phần string trước dấu . đầu tiên
    const match = question.match(/^(\d+)\./)
    return match ? match[1] : 0
}).filter((id) => id !== null && !done.has(id))

export const getQueueTodo = async () => {
    const todoSet = new Set(PHUOC_ALL)

    // Filter và map questions thành structure giống GraphQL response
    const todoQuestions = questions
        .filter((q) => todoSet.has(q.frontend_id))
        .map((q) => ({
            link: `/problems/${q.problem_slug}/`,
            question: {
                questionFrontendId: q.frontend_id,
                titleSlug: q.problem_slug,
                difficulty: q.difficulty,
                topicTags: q.topics.map((t) => ({ slug: t }))
            }
        }))

    const csvRows = [TODO_HEADINGS]
    append_to_arr(todoQuestions, csvRows)
    save_csv(csvRows, 'phuoc_queue')

    console.log(`✅ Saved ${todoQuestions.length} todo`)
}
