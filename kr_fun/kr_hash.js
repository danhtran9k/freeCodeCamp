// 19 consonant
const mid_consonant = ['ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ']
const aspirated_consonant = ['ㅋ', 'ㅌ', 'ㅊ', 'ㅍ']
const light_consonant = ['ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ']
const heavy_consonant = ['ㅃ', 'ㅉ', 'ㄸ', 'ㄲ', 'ㅆ']

// 8 double consonant + 1 empty = 9 more consonant
// list ref

// 21 vowel
const yo_vowel = ['ㅕ', 'ㅛ', 'ㅠ']
const ou_vowel = ['ㅓ', 'ㅗ', 'ㅜ', 'ㅡ']
const e_vowel = ['ㅐ', 'ㅔ', 'ㅒ', 'ㅖ']
const ai_vowel = ['ㅏ', 'ㅑ', 'ㅣ']
const w_vowel = ['ㅟ', 'ㅝ', 'ㅘ', 'ㅢ']
const oe_vowel = ['ㅙ', 'ㅚ', 'ㅞ']

export const vowels = {
  yo_vowel,
  ou_vowel,
  e_vowel,
  ai_vowel,
  w_vowel,
  oe_vowel
}

export const consonants = {
  mid_consonant,
  aspirated_consonant,
  light_consonant,
  heavy_consonant
}

// 1st: 19, 2nd: 21, 3rd: 28
// 28 = 19 - 3 (double not used) + 1 (empty) + 11 (double consonant)
export const kr_hash = [
  [
    'ㄱ',
    'ㄲ',
    'ㄴ',
    'ㄷ',
    'ㄸ',
    'ㄹ',
    'ㅁ',
    'ㅂ',
    'ㅃ',
    'ㅅ',
    'ㅆ',
    'ㅇ',
    'ㅈ',
    'ㅉ',
    'ㅊ',
    'ㅋ',
    'ㅌ',
    'ㅍ',
    'ㅎ'
  ],
  [
    'ㅏ',
    'ㅐ',
    'ㅑ',
    'ㅒ',
    'ㅓ',
    'ㅔ',
    'ㅕ',
    'ㅖ',
    'ㅗ',
    'ㅘ',
    'ㅙ',
    'ㅚ',
    'ㅛ',
    'ㅜ',
    'ㅝ',
    'ㅞ',
    'ㅟ',
    'ㅠ',
    'ㅡ',
    'ㅢ',
    'ㅣ'
  ],
  [
    '',
    'ㄱ',
    'ㄲ',
    'ㄳ',
    'ㄴ',
    'ㄵ',
    'ㄶ',
    'ㄷ',
    'ㄹ',
    'ㄺ',
    'ㄻ',
    'ㄼ',
    'ㄽ',
    'ㄾ',
    'ㄿ',
    'ㅀ',
    'ㅁ',
    'ㅂ',
    'ㅄ',
    'ㅅ',
    'ㅆ',
    'ㅇ',
    'ㅈ',
    'ㅊ',
    'ㅋ',
    'ㅌ',
    'ㅍ',
    'ㅎ'
  ]
]

// return array contain kr_hash[2] that not in kr_hash[0]
export const get_double_consonant = () => {
  return kr_hash[2].filter((char) => !kr_hash[0].includes(char))
}

// for reference 11 double
const double_consonant_ref = [
  'ㄳ',
  'ㄵ',
  'ㄶ',
  'ㄺ',
  'ㄻ',
  'ㄼ',
  'ㄽ',
  'ㄾ',
  'ㄿ',
  'ㅀ',
  'ㅄ'
]

const dou_2nd = ['ㄺ', 'ㄻ', 'ㄿ']
const dou_1st_common = ['ㄼ', 'ㅀ']
const dou_1st_uncommon = ['ㄳ', 'ㄵ', 'ㄶ', 'ㄽ', 'ㄾ', 'ㅄ']

export const double_consonant = {
  dou_2nd,
  dou_1st_common,
  dou_1st_uncommon
}
