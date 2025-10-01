import { lcPostQl } from './utils/fetch-QL.js'
import { query_list_filter, self_solved } from './utils/lc-query.js'
import { getRelativePath } from './getPath.js'
import fs from 'fs'

export const getSolved = async () => {
    const response = await lcPostQl(query_list_filter, self_solved)

    const questions = response.problemsetQuestionListV2.questions
    const solvedIds = questions.map((question) => question.questionFrontendId)

    const filePath = getRelativePath('solved.json')
    fs.writeFileSync(filePath, JSON.stringify(solvedIds, null, 2), 'utf8')
    console.log(`solved ${solvedIds.length} problems`)
}
