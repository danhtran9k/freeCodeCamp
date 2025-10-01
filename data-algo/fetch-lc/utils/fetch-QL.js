import 'dotenv/config'
import { LC_QL } from './lc-query'

const AUTH_HEADERS = {
    Cookie: `LEETCODE_SESSION=${process.env.LEETCODE_SESSION}`
    // 'x-csrftoken': process.env.CSRF_TOKEN
}

// POST mới dùng Contnet-Type: application/json
export async function lcPostQl(query, payload) {
    try {
        const res = await fetch(LC_QL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...AUTH_HEADERS
            },
            body: JSON.stringify({
                query,
                variables: payload
            })
        })

        const jsonRes = await res.json()
        return jsonRes.data
    } catch (err) {
        console.error('Fetch error', err)
        throw err
    }
}

export const lcGetQl = async (url) => {
    try {
        const res = await fetch(url, {
            headers: AUTH_HEADERS
        })

        const jsonRes = await res.json()
        return jsonRes.data
    } catch (err) {
        console.error('Fetch error', err)
        throw err
    }
}
