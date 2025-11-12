// export function minOperations(nums: number[]): number {
//     const len = nums.length
//     const oneCount = nums.filter((e) => e === 1).length
//     if (oneCount) return len - oneCount

//     let curr_gcd = gcd(nums[0], nums[1])
//     for (let ix = 2; ix < len; ix++) {
//         if (gcd(nums[ix], nums[ix - 1]) === 1) return len
//         curr_gcd = gcd(curr_gcd, nums[ix])
//     }

//     return curr_gcd === 1 ? len + 1 : -1
// }

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))

// [10,5,10,30,70,4,2,6,8,4]
// [10,5,20,60,140,4,2,6,8,4]

function minOperations(nums: number[]): number {
    const { gcdTotal, oneCount, len } = setup(nums)

    if (oneCount) return len - oneCount
    if (gcdTotal > 1) return -1

    let minLen: number = len
    for (let i = 0; i < len; i++) {
        let currentGcd: number = 0
        
        for (let j = i; j < len; j++) {
            currentGcd = gcd(currentGcd, nums[j])
            if (currentGcd === 1) {
                minLen = Math.min(minLen, j - i + 1)
                break
            }
        }
    }

    return minLen + len - 2
}

const setup = (nums) => {
    const len = nums.length
    let gcdTotal = 0
    let oneCount = 0

    for (const num of nums) {
        if (num === 1) oneCount++
        gcdTotal = gcd(gcdTotal, num)
    }

    return { gcdTotal, oneCount, len }
}


/*

2654. Minimum Number of Operations to Make All Array Elements Equal to 1

You are given a 0-indexed array nums consisiting of positive integers. You can do the following operation on the array any number of times:

Select an index i such that 0 <= i < n - 1 and replace either of nums[i] or nums[i+1] with their gcd value.
Return the minimum number of operations to make all elements of nums equal to 1. If it is impossible, return -1.

The gcd of two integers is the greatest common divisor of the two integers.

 

Example 1:

Input: nums = [2,6,3,4]
Output: 4
Explanation: We can do the following operations:
- Choose index i = 2 and replace nums[2] with gcd(3,4) = 1. Now we have nums = [2,6,1,4].
- Choose index i = 1 and replace nums[1] with gcd(6,1) = 1. Now we have nums = [2,1,1,4].
- Choose index i = 0 and replace nums[0] with gcd(2,1) = 1. Now we have nums = [1,1,1,4].
- Choose index i = 2 and replace nums[3] with gcd(1,4) = 1. Now we have nums = [1,1,1,1].
Example 2:

Input: nums = [2,10,6,14]
Output: -1
Explanation: It can be shown that it is impossible to make all the elements equal to 1.
 

Constraints:

2 <= nums.length <= 50
1 <= nums[i] <= 106


query 
problemsetQuestionList(
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
        translatedTitle
        questionFrontendId
        paidOnly
        difficulty
        topicTags {
        #   name
          slug
        #   nameTranslated
        }
        status
        isInMyFavorites
        frequency
        acRate
        contestPoint
      }
      totalLength
      finishedLength
      hasMore
    }
  }


query 
problemsetQuestionList(
  $filters: QuestionListFilterInput
  $categorySlug: String,
  $limit: Int,
  $skip: Int,
) {  
  problemsetQuestionListV2: questionList(
    categorySlug: $categorySlug
    limit: $limit    
    skip: $skip    
    filters: $filters  
  ) {
    total: totalNum
    questions: data {
      questionFrontendId     
      titleSlug      
      difficulty      
      freqBar      
      isPaidOnly
      hasSolution    
      hasVideoSolution    
    #   acRate      
    #   isFavor      
    #   status     
    #   title      
      topicTags {
        #   name        
        #   id      
          slug      
      }      
    }  
  }
}    2654. Minimum Number of Operations to Make All Array Elements Equal to 1

You are given a 0-indexed array nums consisiting of positive integers. You can do the following operation on the array any number of times:

Select an index i such that 0 <= i < n - 1 and replace either of nums[i] or nums[i+1] with their gcd value.
Return the minimum number of operations to make all elements of nums equal to 1. If it is impossible, return -1.

The gcd of two integers is the greatest common divisor of the two integers.

 

Example 1:

Input: nums = [2,6,3,4]
Output: 4
Explanation: We can do the following operations:
- Choose index i = 2 and replace nums[2] with gcd(3,4) = 1. Now we have nums = [2,6,1,4].
- Choose index i = 1 and replace nums[1] with gcd(6,1) = 1. Now we have nums = [2,1,1,4].
- Choose index i = 0 and replace nums[0] with gcd(2,1) = 1. Now we have nums = [1,1,1,4].
- Choose index i = 2 and replace nums[3] with gcd(1,4) = 1. Now we have nums = [1,1,1,1].
Example 2:

Input: nums = [2,10,6,14]
Output: -1
Explanation: It can be shown that it is impossible to make all the elements equal to 1.
 

Constraints:

2 <= nums.length <= 50
1 <= nums[i] <= 106


query 
problemsetQuestionList(
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
        translatedTitle
        questionFrontendId
        paidOnly
        difficulty
        topicTags {
        #   name
          slug
        #   nameTranslated
        }
        status
        isInMyFavorites
        frequency
        acRate
        contestPoint
      }
      totalLength
      finishedLength
      hasMore
    }
  }


query 
problemsetQuestionList(
  $filters: QuestionListFilterInput
  $categorySlug: String,
  $limit: Int,
  $skip: Int,
) {  
  problemsetQuestionListV2: questionList(
    categorySlug: $categorySlug
    limit: $limit    
    skip: $skip    
    filters: $filters  
  ) {
    total: totalNum
    questions: data {
      questionFrontendId     
      titleSlug      
      difficulty      
      freqBar      
      isPaidOnly
      hasSolution    
      hasVideoSolution    
    #   acRate      
    #   isFavor      
    #   status     
    #   title      
      topicTags {
        #   name        
        #   id      
          slug      
      }      
    }  
  }
}    

*/