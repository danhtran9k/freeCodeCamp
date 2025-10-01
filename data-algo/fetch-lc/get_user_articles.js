import { lcPostQl } from './utils/fetch-QL'
import { query_user_articles } from './utils/lc-query'

export const getUserArticles = async () => {
    console.log('re-fetch')

    const payload = {
        username: 'najwer23',
        skip: 0,
        first: 15,
        orderBy: 'MOST_RECENT'
    }
    const res = await lcPostQl(query_user_articles, payload)

    console.log(res)
}
