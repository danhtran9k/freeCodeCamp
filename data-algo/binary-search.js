// 4, 6
// non-descreasing order
const reset = (arr) => [0, arr.length - 1]

const find_First_GreatestNegative_Index = (arr) => {}
const find_Last_GreatestNegative_Index = (arr) => {
  let [left, right] = reset(arr)

  const MODE = 'include'
  const cond = {
    exclude: (index, arr, left = 0, right = 0) => {
      return arr[index] >= 0
    },
    include: (index, arr, left = 0, right = 0) => {
      return arr[index] < 0
    }
  }

  while (left < right) {
    let mid = Math.floor((left + right) / 2)

    switch (MODE) {
      case 'exclude':
        if (cond[MODE](mid, arr)) {
          right = mid
        } else {
          left = mid + 1
        }
        break
      case 'include':
        if (cond[MODE](mid, arr)) {
          left = mid
        } else {
          right = mid - 1
        }
        break
      default:
        return null
    }
  }

  return left - 1
}

// 7, 9
const find_first_MinNonPositive_Index = (arr) => {}
const find_last_MinNonPositive_Index = (arr) => {}

// 10, 12
const find_first_MinPositive_Index = (arr) => {}
const find_last_MinPositive_Index = (arr) => {}

// 4-6, 7-9, 10-12
// STT -     [0 ,  1,  2,  3,  4,  5,  6, 7, 8,10,11,12,13,14,15,16,17]
const test = [-4, -4, -4, -3, -2, -2, -2, 0, 0, 0, 2, 2, 2, 3, 4, 4, 4]
// 10-12, 7-9, 4-6
// const test = [4, 4, 4, 4 , 3, 2, 2, 2, 0, 0, 0, -2, -2, -2, -3, -4,-4,-4]
export const main = () => {
  return find_Last_GreatestNegative_Index(test)
}
