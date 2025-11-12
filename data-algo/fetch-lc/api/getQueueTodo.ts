import { all_free_problems } from '../data/data-importer'
import { PHUOC_ALL } from '../data/filterData/phuoc'
import { save_csv } from '../utils/csv_analyze.js'
import { append_to_arr } from './get_records.js'

const TODO_HEADINGS = [
    'link',
    'questionFrontendId',
    'titleSlug',
    'difficulty',
    'topicTags'
]

const questions = all_free_problems

export const getQueueTodo = async () => {
    const todoSet = new Set(PHUOC_ALL)

    // Filter và map questions thành structure giống GraphQL response
    const todoQuestions = questions
        .filter((q) => todoSet.has(q.questionFrontendId))
        .map((q) => ({
            link: `/problems/${q.titleSlug}/`,
            question: {
                questionFrontendId: q.questionFrontendId,
                titleSlug: q.titleSlug,
                difficulty: q.difficulty,
                topicTags: q.topicTags
            }
        }))

    const csvRows = [TODO_HEADINGS]
    append_to_arr(todoQuestions, csvRows)
    save_csv(csvRows, 'phuoc_queue')

    console.log(`✅ Saved ${todoQuestions.length} todo`)
}
