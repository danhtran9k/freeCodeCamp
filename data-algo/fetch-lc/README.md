## Running
`get_records.js` fetches and writes them to CSV files.
To prevent rate limiting, the code waits for 2 seconds each month pull.
PARAM query check trực tiếp trong file query.
FIle get chỉ là logic get nhưng ko control url !! -> dual file edit khi cần

To run the analysis, use `node analysis.js` in the console.
This code will read a CSV file and output summary statistics in the console.
It only summarizes statistics for `daily.csv`, but you can modify the code to show the weekly statistics.

# POSTMAN
Cannot query field \"tag\" on type \"QuestionNode\
-> Cần Check xem QuestionNode có thể query những field nào

Cannot query field \"difficulty\" on type \"SolutionArticleNode\".

## GraphQL Query
```md
query 
dailyCodingQuestionRecords(
    $year: Int!, 
    $month: Int!
) {
    dailyCodingChallengeV2(year: $year, month: $month) {
      challenges {
        date
        userStatus
        link
        question {
            questionFrontendId
            title
            difficulty
            isPaidOnly
            topicTags { name  }
        }
      }
      weeklyChallenges {
        date
        userStatus
        link
        question {
            questionFrontendId
            title
            difficulty
            isPaidOnly
            topicTags { name  }
        }
      }
    }
  }
```

### Single Question
```
query 
problemsetQuestionList(
  $categorySlug: String,
  $limit: Int,
  $skip: Int,
  $filters: QuestionListFilterInput
) {  
  problemsetQuestionList: questionList(
    categorySlug: $categorySlug
    limit: $limit    
    skip: $skip    
    filters: $filters  
  ) {
    total: totalNum
    questions: data {
      acRate      
      difficulty      
      freqBar      
      frontendQuestionId: questionFrontendId     
      isFavor      
      paidOnly: isPaidOnly     
      status     
      title      
      titleSlug      
      topicTags {
          name        
          id      
          slug      
      }      
      hasSolution    
      hasVideoSolution    
    }  
  }
}    
```
## GraphQL Variables
```
{
    "year": 2025,
    "month": 9
}
```