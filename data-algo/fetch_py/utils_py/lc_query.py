LC_COM = 'https://leetcode.com'
LC_QL = f'{LC_COM}/graphql'

# GET DAILYS
# vì header trùng field query nên đặt đây luôn
# logic csv khá hoàn thiện nên ko cần can thiệp nhiều
DAILY_HEADINGS = [
    'date',
    'link',
    'questionFrontendId',
    'titleSlug',
    'title',
    'difficulty',
    'isPaidOnly',
    # userStatus,  # có làm daily ko
    # 'acRate',    # thay đổi theo thời gian
    'status',  # Từng làm chưa
    'topicTags'
]

DAILY_PARAMS = {
    # 04-2020 bắt đầu có daily
    'START_YEAR': 2020,  # 2020
    'START_MONTH': 4,    # 4
    'END_YEAR': 2025,
    'END_MONTH': 9
}


def daily_get_url(year, month):
    """Generate URL for fetching daily challenges"""
    return f"""
{LC_QL}/?query=query{{
  dailyCodingChallengeV2(
    year: {year}, month: {month}
  ) {{
      challenges {{
        date
        link
        question {{
            questionFrontendId
            title
            titleSlug
            difficulty
            status
            isPaidOnly
            topicTags {{ slug  }}
        }}
      }}
      weeklyChallenges {{
        date
        link
        question {{
            questionFrontendId
            title
            titleSlug
            difficulty
            status
            isPaidOnly
            topicTags {{ slug  }}
        }}
      }}
    }}
}}"""


# ArticleOrderByEnum = MOST_RECENT | ? (LEAST_RECENT, MOST_VOTED, LEAST_VOTED)
QUERY_USER_ARTICLES = """
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
"""

# Query for solved problems
SELF_SOLVED = {
    'skip': 0,
    'limit': 1000,
    'categorySlug': '',
    'filters': {
        'filterCombineType': 'ALL',
        'statusFilter': {
            'questionStatuses': ['SOLVED'],
            'operator': 'IS'
        }
    }
}

QUERY_LIST_FILTER = """
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
"""

