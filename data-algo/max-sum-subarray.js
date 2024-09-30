/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = 0
  let sum = 0

  for (let index = 0; index < nums.length; index++) {
    sum += nums[index]
    if (sum > maxSum) {
      maxSum = sum
      continue
    }

    if (sum < 0) {
      if (maxSum === 0 || (maxSum < 0 && sum > maxSum)) {
        maxSum = sum
      }
      sum = 0
    }
  }
  console.log(maxSum)
  return maxSum
}

export const TEST_maxsub = () => {
  maxSubArray([-1, 0, -2])
}
