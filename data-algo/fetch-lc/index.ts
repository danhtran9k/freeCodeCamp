process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const lc_url = 'https://leetcode.com/graphql'
async function callGraphQL(query, variables) {
    try {
        const res = await fetch(lc_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query,
                variables,
                operationName: 'ugcArticleUserSolutionArticles'
            })
        })

        if (!res.ok) {
            throw new Error(`HTTP ${res.status}: ${res.statusText}`)
        }

        const payload = await res.json()

        if (payload.errors) {
            console.error('GraphQL errors:', payload.errors)
            return null
        }

        return payload.data
    } catch (err) {
        if (err.name === 'AbortError') {
            console.error('Request timed out')
        } else {
            console.error('Fetch error', err)
        }
        throw err
    }
}

const query_test = `
  query recentAcSubmissionList($username: String!, $limit: Int!) {
    recentAcSubmissionList(username: $username, limit: $limit) {
      id
      title
      titleSlug
    }
  }
`

const query_2 = `
query ugcArticleUserSolutionArticles($username: String!, $orderBy: ArticleOrderByEnum, $skip: Int, $before: String, $after: String, $first: Int, $last: Int) {
  ugcArticleUserSolutionArticles(
    username: $username
    orderBy: $orderBy
    skip: $skip
    before: $before
    after: $after
    first: $first
    last: $last
  ) {
    totalNum
    pageInfo {
      hasNextPage
    }
    edges {
      node {
        topicId
        uuid
        title
        slug
        topicId
        questionSlug
        questionTitle
      }
    }
  }
}
`

const variable = {
    username: 'najwer23',
    orderBy: 'MOST_RECENT',
    skip: 0,
    first: 15
}

export const demo = async () => {
    console.log('re-fetch')
    const res = await callGraphQL(query_2, variable)
    console.log(res)
}
