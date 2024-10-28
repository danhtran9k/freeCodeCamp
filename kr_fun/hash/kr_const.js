// 19 consonant
const mid_consonant = ['ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ']
const aspirated_consonant = ['ㅋ', 'ㅌ', 'ㅊ', 'ㅍ']
const light_consonant = ['ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ']
const heavy_consonant = ['ㅃ', 'ㅉ', 'ㄸ', 'ㄲ', 'ㅆ']

export const consonants = {
  mid_consonant,
  light_consonant,
  aspirated_consonant,
  heavy_consonant
}

// double consonant + 11 more + 1 empty - 3 double not used = +9 more
// 19 + 9 = 28 pos 3 consonant
const dou_2nd = ['ㄺ', 'ㄻ', 'ㄿ']
const dou_1st_common = ['ㄼ', 'ㅀ']
const dou_1st_uncommon = ['ㄳ', 'ㄵ', 'ㄶ', 'ㄽ', 'ㄾ', 'ㅄ']

export const double_consonant = {
  dou_2nd,
  dou_1st_common,
  dou_1st_uncommon
}

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

//  vowel ver2 -> ai_e_ou_ôwo
const v2_ai = ['ㅏ', 'ㅑ', 'ㅣ', 'ㅟ', 'ㅢ']
const v2_e = ['ㅐ', 'ㅒ', 'ㅙ', 'ㅔ', 'ㅖ', 'ㅞ', 'ㅚ']
const v2_ou = ['ㅕ', 'ㅛ', 'ㅠ', 'ㅜ', 'ㅡ']
const v2_owo = ['ㅘ', 'ㅗ', 'ㅓ', 'ㅝ']

export const v2_vowel = {
  v2_ai,
  v2_e,
  v2_ou,
  v2_owo
}

export const vowel_min = {
  min: ['ㅓ', 'ㅝ', 'ㅣ', 'ㅟ', 'ㅢ']
}
