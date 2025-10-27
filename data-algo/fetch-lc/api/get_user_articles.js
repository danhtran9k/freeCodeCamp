import { all_free_problems, LC_SELF_FINISH_SET } from '../data/data-importer'
import { append_to_arr } from './get_records'
import { save_csv, sleep } from '../utils/csv_analyze'
import {
    ARTICLE_HEADINGS,
    articlePayload,
    LC_COM,
    query_user_articles
} from './api_lc_query'
import { lcPostQl } from './fetch-QL'

const KEY_FRONTEND_ID = 'frontend_id'
const KEY_DIFF = 'difficulty'

const MODIFIED_HEADINGS = [
    ...ARTICLE_HEADINGS,
    KEY_FRONTEND_ID,
    KEY_DIFF,
    'user'
]

// ===============================================
// FILTER TOGGLE
const HARD_FILTER = true
const EXCLUDE_FINISH = true

const GOOD_SOLS = [
    'TFDLeeter',
    'najwer23',
    'endlesscheng',
    'Manu-Bharadwaj-BN',
    'andreev-dev',
    'michaelm12358',
    'jairtorres1003',
    'ranganathv415',
    'kyratzakos',
    'Ala-dine',
    'rojas',
    'alexgavrilov',
    'onifs10'
]

const RELOAD = []
const HARDCORE = ['lilongxue', 'anna-hcj']
// ===============================================

export const getUserArticles = async () => {
    const csv = [MODIFIED_HEADINGS]

    for (const username of RELOAD) {
        console.log('🔒 re-fetch ➡️  ➡️  ➡️  ', username)
        const res = await lcPostQl(
            query_user_articles,
            articlePayload(username)
        )
        const data = processRawArticleRes(res, username)
        append_to_arr(data, csv)
        sleep(1000)
    }

    save_csv(csv, 'articles')
    console.log('✅ DONE getUserArticles')
}

const processRawArticleRes = (res, username) => {
    const graphQlData = res['ugcArticleUserSolutionArticles']

    console.log('ℹ️ TOTAL', graphQlData.totalNum)

    // article hơi đặc biệt,
    // data được wrap lại bên trong 1 lớp node nũa
    const data = graphQlData.edges
        .map(({ node }) => {
            const problem = all_free_problems.find(
                (problem) => problem.problem_slug === node.questionSlug
            )

            return {
                ...node,
                slug: getArticleLink(node),
                [KEY_DIFF]: problem?.[KEY_DIFF] ?? '',
                [KEY_FRONTEND_ID]: problem?.[KEY_FRONTEND_ID] ?? '0',
                user: username
            }
        })
        .filter(filterNode)

    return data
}

// https://leetcode.com/problems/design-spreadsheet/solutions/7206071/javascript-easy-solution-with-obj-by-naj-e4a0/
const getArticleLink = (node) => {
    const { questionSlug, topicId, slug } = node
    return `${LC_COM}/problems/${questionSlug}/solutions/${topicId}/${slug}/`
}

const filterNode = (node) => {
    const frontend_id = node[KEY_FRONTEND_ID]
    const isHard = node[KEY_DIFF].toLowerCase().trim() === 'hard'
    const isFinished = LC_SELF_FINISH_SET.has(frontend_id)

    if (HARD_FILTER && !isHard) return false
    if (EXCLUDE_FINISH && isFinished) return false

    return true
}
