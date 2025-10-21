import { getLeetDaily } from './get_records'
import { getSolved } from './api/getSolved'
import { getUserArticles } from './api/get_user_articles'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

export const lc_run_skip_tls = () => {
    // getLeetDaily()
    // getSolved()
    getUserArticles()
}
