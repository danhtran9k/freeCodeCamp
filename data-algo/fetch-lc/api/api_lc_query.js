export const LC_COM = 'https://leetcode.com'
export const LC_QL = `${LC_COM}/graphql`

// Dùng POST, define Type vào query tường minh hơn GET
// ================================================
//  GET DAILYS
// vì header trùng field query nên đặt đây luôn
// logic csv khá hoàn thiện nên ko cần can thiệp nhiều
export const DAILY_HEADINGS = [
    'date',
    'link',
    'questionFrontendId',
    'titleSlug',
    'title',
    'difficulty',
    'isPaidOnly',
    // userStatus,  // có làm daily ko
    // 'acRate',    // thay đổi theo thời gian
    'status', // Từng làm chưa
    'topicTags'
]

export const DAILY_PARAMS = {
    // 04-2020 bắt đầu có daily
    START_YEAR: 2020, // 2020
    START_MONTH: 4, // 4

    END_YEAR: 2025,
    END_MONTH: 9,

    SLEEP_TIME: 2000
}

// query article chỉ có questionSlug ? ko có FE_Id
// buộc get thêm field
export const daily_get_url = (year, month) => `
${LC_QL}/?query=query{
  dailyCodingChallengeV2(
    year: ${year}, month: ${month}
  ) {
      challenges {
        date
        link
        question {
            questionFrontendId
            title
            titleSlug
            difficulty
            status
            isPaidOnly
            topicTags { slug  }
        }
      }
      weeklyChallenges {
        date
        link
        question {
            questionFrontendId
            title
            titleSlug
            difficulty
            status
            isPaidOnly
            topicTags { slug  }
        }
      }
    }
}`

// ================================================
// ArticleOrderByEnum = MOST_RECENT | ? (LEAST_RECENT, MOST_VOTED, LEAST_VOTED)

export const articlePayload = (username) => ({
    username,
    skip: 0,
    first: 3000,
    orderBy: 'MOST_RECENT'
})

export const ARTICLE_HEADINGS = [
    // 'title',
    'slug',
    'questionSlug'
    // 'questionTitle'
    // 'topicId',
    // 'uuid'
]

export const query_user_articles = `
query 
ugcArticleUserSolutionArticles(
    $username: String!, 
    $skip: Int, 
    $first: Int, 
    $orderBy: ArticleOrderByEnum, 
    $before: String, 
    $after: String, 
    $last: Int
  ) {
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
            slug
            questionSlug
            topicId
          }
        }
      }
    }
`

// ================================================

export const query_test = `
  query 
  recentAcSubmissionList(
    $username: String!, $limit: Int!
  ) {
    recentAcSubmissionList(
      username: $username, 
      limit: $limit
    ) {
      id
      title
      titleSlug
    }
  }
`
// ================================================
export const self_solved = {
    skip: 0,
    limit: 1000,
    categorySlug: '',
    filters: {
        filterCombineType: 'ALL',
        statusFilter: {
            questionStatuses: ['SOLVED'],
            operator: 'IS'
        }
    }
}

export const query_list_filter = `
query 
problemsetQuestionListV2(
  $filters: QuestionFilterInput,
  $limit: Int,
  $searchKeyword: String,
  $skip: Int,
  $sortBy: QuestionSortByInput,
  $categorySlug: String
  ) {
    problemsetQuestionListV2(
      filters: $filters
      limit: $limit
      searchKeyword: $searchKeyword
      skip: $skip
      sortBy: $sortBy
      categorySlug: $categorySlug
    ) {
      questions {
        id
        titleSlug
        title
        questionFrontendId
        paidOnly
        difficulty
        topicTags {
          name
          slug
        }
        status
      }
      totalLength
      finishedLength
      hasMore
    }
  }
    
`

/*
{
    "skip": 0,
    "limit": 10,
    "categorySlug": "",
    "filters": {
        "filterCombineType": "ALL",
        "statusFilter": {
            "questionStatuses": [
                "SOLVED"
            ],
            "operator": "IS"
        },
        "difficultyFilter": {
            "difficulties": [],
            "operator": "IS"
        },
        "languageFilter": {
            "languageSlugs": [],
            "operator": "IS"
        },
        "topicFilter": {
            "topicSlugs": [],
            "operator": "IS"
        },
        "acceptanceFilter": {},
        "frequencyFilter": {},
        "frontendIdFilter": {},
        "lastSubmittedFilter": {},
        "publishedFilter": {},
        "companyFilter": {
            "companySlugs": [],
            "operator": "IS"
        },
        "positionFilter": {
            "positionSlugs": [],
            "operator": "IS"
        },
        "contestPointFilter": {
            "contestPoints": [],
            "operator": "IS"
        },
        "premiumFilter": {
            "premiumStatus": [],
            "operator": "IS"
        }
    },
    "searchKeyword": "",
    "sortBy": {
        "sortField": "CUSTOM",
        "sortOrder": "ASCENDING"
    }
}
*/
