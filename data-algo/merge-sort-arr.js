export const mergeSortArr = (arr1, arr2) => {
  let i1 = 0
  let i2 = 0
  const result = []

  while (i1 < arr1.length || i2 < arr2.length) {
    if (i2 >= arr2.length || arr1[i1] < arr2[i2]) {
      result.push(arr1[i1])
      i1++
    } else {
      result.push(arr2[i2])
      i2++
    }
  }

  // while (i1 < arr1.length) {
  //   result.push(arr1[i1])
  //   i1++
  // }

  // while (i2 < arr2.length) {
  //   result.push(arr2[i2])
  //   i2++
  // }
  console.log(result)
  return result
}

export const TEST_SORT_ARR = () => {
  mergeSortArr([1, 7, 31, 33], [4, 6, 30])
  mergeSortArr([1, 2, 3], [4, 6, 30])
  mergeSortArr([1, 2, 4], [4, 6, 30])
  mergeSortArr([], [4, 6, 30])
  mergeSortArr([1, 7, 31, 33], [])
}
