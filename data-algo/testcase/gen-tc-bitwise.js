export function bitwise(numbers, isDecToBin = true) {
  const result = numbers.map((num) =>
    isDecToBin ? num.toString(2) : parseInt(num, 2)
  )
  console.log(result)
  return result
}

function highestPowerOf2Bit(n) {
  if (n === 0) return 0
  let msb = 1
  while ((n >>= 1)) {
    msb <<= 1
  }
  return msb
}

const num = ['101011', '1011', '111'] // [ 43, 11, 7 ]
const num2 = [5, 7, 14] // [ '101', '111', '1110' ]
export const gen_tc_bit = () => {
  const test = highestPowerOf2Bit(14)
  console.log(test)
  // return bitwise(num2, true)
  return bitwise(num, false)
}

function makeTheIntegerZero(num1, num2) {
  if (num2 >= num1) return -1

  const abs2 = Math.abs(num2)
  if (num2 >= 0) {
    // case 1
  } else if (abs2 < num1) {
    // case 2
  } else {
    // case 3
  }
  return 100
}

// 43 - 11 -> 101011 - 1011 = 1
// 43 - 14 -> 101011 - 1110 = 0 ???

/*

Mọi k step chỉ có thể handle tối đa 1 bit trong X
n1 - n2 - 2^i1  
n1 - (n2 + 2^i1) - (n2 + 2^i3)
= n1 - n2*2 - (2^i1 + 2^i2)  
n1 - n2*3 - (2^i1 + 2^i2 + 2^i3)

k_step = 1 -> X chỉ được biểu diễn max = 1 bit
k_step = 2 -> handle tối đa được 2 bit (vd : '10' + '10' = '100' (2+2 = 4))
=> đây là cận dưới max của nghiệm
bitCount(x) <= k 
-> sẽ có cách chọn i1, i2 , ... ik để số đạt được số bit cần

##########################
# Tìm cận trên:
Xét về toán: 
##### n2 âm, 
n1 - k*n2 sẽ luôn tăng

k càng tăng thì số bit control được càng lớn và sẽ đạt nghiệm sớm
(1 tăng tuyến tính nhưng range bit control lại tăng theo hàm mũ) !!
Tức là n2 âm sẽ luôn có nghiệm

##### n2 dương
n1 - k*n2 = X sẽ luôn giảm
Tuy nhiên cận 0 là SAI vì còn 1 DK ràng đặc biệt
NẾU X giảm về mức nhỏ hơn k
X = 2^i1 + 2^i2 + ... + 2^ik < k
thì cho tất cả i = 0 -> k < k -> SAI
=> X>= k là cận trên

X < k thì return -1
 */
