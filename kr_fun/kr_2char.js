import fs from 'fs'
import { kr_hash } from './hash/kr_hash_lookup.js'
import { consonants, v2_vowel, vowel_min, vowels } from './hash/kr_const.js'

// given the above vowel, and and kr consonant, return the combination of them
// example:
// ㅂ -> [["벼","뵤","뷰"],["버","보","부","브"],...]

const combine = (initials, vowels, finals = '') => {
  const initial_index = kr_hash[0].indexOf(initials)
  const vowel_index = kr_hash[1].indexOf(vowels)
  const final_index = kr_hash[2].indexOf(finals)

  // https://en.wikipedia.org/wiki/Korean_language_and_computers#Hangul_in_Unicode
  const hangulCode =
    44032 + initial_index * 588 + vowel_index * 28 + final_index

  return String.fromCharCode(hangulCode)
}

export const full_combine = ({ consonant, vowel, use_consonant = true }) => {
  const result = {}
  let count = 0

  // Determine primary and secondary collections based on keyRef
  const [primary, secondary] = use_consonant
    ? [consonant, vowel]
    : [vowel, consonant]

  Object.entries(primary).forEach(([keyPrimaryType, arrPrimaryVals]) => {
    result[keyPrimaryType] = {}

    for (const primaryVal of arrPrimaryVals) {
      let tmp = Object.entries(secondary).map(
        ([_keySecondaryType, arrSecondaryVals]) => {
          return arrSecondaryVals.map((secondaryVal) => {
            count++
            // Order the combine parameters based on keyRef
            return use_consonant
              ? combine(primaryVal, secondaryVal)
              : combine(secondaryVal, primaryVal)
          })
        }
      )

      result[keyPrimaryType][primaryVal] = tmp
    }
  })

  result.count = count
  return result
}

export const write_hangul_2char = () => {
  const consonant = full_combine({
    consonant: consonants,
    vowel: v2_vowel,
    use_consonant: true
  })

  const vowel = full_combine({
    consonant: consonants,
    vowel: v2_vowel,
    use_consonant: false
  })

  const minimum_vowel = full_combine({
    consonant: consonants,
    vowel: vowel_min,
    use_consonant: false
  })

  fs.writeFileSync(`consonant_dump_.json`, JSON.stringify(consonant, null, 2))
  fs.writeFileSync(`vowel_dump_.json`, JSON.stringify(vowel, null, 2))
  fs.writeFileSync(
    `minimum_vowel_dump_.json`,
    JSON.stringify(minimum_vowel, null, 2)
  )
}
