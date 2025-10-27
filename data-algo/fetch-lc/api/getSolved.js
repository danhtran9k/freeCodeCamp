import { save_csv } from '../utils/csv_analyze.js'
import { query_list_filter, self_solved } from './api_lc_query.js'
import { lcPostQl } from './fetch-QL.js'

export const getSolved = async () => {
    const response = await lcPostQl(query_list_filter, self_solved)

    const questions = response.problemsetQuestionListV2.questions
    const solvedIds = questions.map((question) => [question.questionFrontendId])
    // hàm save_csv nhận string[][], mỗi row là string[] nên cần map bọc

    save_csv(solvedIds, 'solved')
    console.log(`✅ Saved ${solvedIds.length} solved problems to solved.csv`)
}
