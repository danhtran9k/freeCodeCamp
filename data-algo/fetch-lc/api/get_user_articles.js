import { all_free_problems } from '../data/data-import'
import { append_to_arr } from '../get_records'
import { save_file } from '../utils/csv_analyze'
import {
    ARTICLE_HEADINGS,
    articlePayload,
    LC_COM,
    query_user_articles
} from './api_lc_query'
import { lcPostQl } from './fetch-QL'

const KEY_FRONTEND_ID = 'frontend_id'
const KEY_DIFF = 'difficulty'
const ADDITIONAL_HEADINGS = [KEY_FRONTEND_ID, KEY_DIFF]

export const getUserArticles = async () => {
    console.log('🔒 re-fetch')

    const res = await lcPostQl(query_user_articles, articlePayload)
    const MODIFIED_HEADINGS = [...ARTICLE_HEADINGS, ...ADDITIONAL_HEADINGS]
    const csv = [MODIFIED_HEADINGS]

    const data = processRawArticleRes(res)
    append_to_arr(data, csv)
    save_file(csv, 'articles')

    console.log('✅ DONE')
}

const processRawArticleRes = (res) => {
    const graphQlData = res['ugcArticleUserSolutionArticles']

    console.log('ℹ️ TOTAL', graphQlData.totalNum)

    const data = graphQlData.edges.map((ele) => {
        const { node } = ele
        // article hơi đặc biệt,
        // data được wrap lại bên trong 1 lớp node nũa

        const { questionSlug, topicId, slug } = node

        // https://leetcode.com/problems/design-spreadsheet/solutions/7206071/javascript-easy-solution-with-obj-by-naj-e4a0/
        const problem = all_free_problems.find(
            (problem) => problem.problem_slug === questionSlug
        )

        node[KEY_FRONTEND_ID] = problem?.[KEY_FRONTEND_ID] ?? '0'
        node[KEY_DIFF] = problem?.[KEY_DIFF] ?? ''
        node.slug = `${LC_COM}/problems/${questionSlug}/solutions/${topicId}/${slug}/`
        return node
    })

    return data
}
