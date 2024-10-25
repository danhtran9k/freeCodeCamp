import fs from 'fs'
import { consonants, kr_hash, vowels } from './kr_hash.js'

// given the above vowel, and and kr consonant, return the combination of them
// example:
// ㅂ -> [["벼","뵤","뷰"],["버","보","부","브"],["배","베","뱨","뱨"],["바","뱌","비"]]

const combine = (initials, vowels, finals = '') => {
  const initial_index = kr_hash[0].indexOf(initials)
  const vowel_index = kr_hash[1].indexOf(vowels)
  const final_index = kr_hash[2].indexOf(finals)

  // https://en.wikipedia.org/wiki/Korean_language_and_computers#Hangul_in_Unicode
  const hangulCode =
    44032 + initial_index * 588 + vowel_index * 28 + final_index

  return String.fromCharCode(hangulCode)
}

export const full_consonant = () => {
  const result = {}
  Object.entries(consonants).forEach(([keyConsonantType, arrVals]) => {
    result[keyConsonantType] = {}
    for (const consonant of arrVals) {
      let tmp = Object.entries(vowels).map(([keyVowelType, arrVowels]) => {
        return arrVowels.map((vowel) => combine(consonant, vowel))
      })

      result[keyConsonantType][consonant] = tmp
    }
  })
  return result
}

export const full_vowel = () => {
  const result = {}
  Object.entries(vowels).forEach(([keyVowelType, arrVals]) => {
    result[keyVowelType] = {}
    for (const vowel of arrVals) {
      let tmp = Object.entries(consonants).map(
        ([keyConsonantType, arrConsonants]) => {
          return arrConsonants.map((consonant) => combine(consonant, vowel))
        }
      )

      result[keyVowelType][vowel] = tmp
    }
  })
  return result
}

export const write_hangul_2char = () => {
  const consonant = full_consonant()
  const vowel = full_vowel()

  fs.writeFileSync(`consonant_dump_.json`, JSON.stringify(consonant, null, 2))
  fs.writeFileSync(`vowel_dump_.json`, JSON.stringify(vowel, null, 2))
}
