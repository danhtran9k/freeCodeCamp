import { lcPostQl } from './fetch-QL.js'
import { query_list_filter, self_solved } from './api_lc_query.js'
import { getRelativePath } from '../getPath.js'
import fs from 'fs'

export const getSolved = async () => {
    const response = await lcPostQl(query_list_filter, self_solved)

    const questions = response.problemsetQuestionListV2.questions
    const solvedIds = questions.map((question) => question.questionFrontendId)

    // Convert to CSV format
    const csvContent = solvedIds.join('\n')

    const filePath = getRelativePath('solved.csv')
    fs.writeFileSync(filePath, csvContent, 'utf8')
    console.log(`saved ${solvedIds.length} solved problems to solved.csv`)
}
