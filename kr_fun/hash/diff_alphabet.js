export function compareVowelsConsonants({ ObjectA, ObjectB }) {
  const vowelSet = new Set()
  const consonantSet = new Set()

  // Flatten vowel_dump_ and add to vowelSet
  Object.values(ObjectA).forEach((category) => {
    Object.values(category).forEach((group) => {
      group.forEach((subgroup) => {
        subgroup.forEach((char) => vowelSet.add(char))
      })
    })
  })

  // Flatten consonant_dump_ and add to consonantSet
  Object.values(ObjectB).forEach((category) => {
    Object.entries(category).forEach(([, group]) => {
      group.forEach((subgroup) => {
        subgroup.forEach((char) => consonantSet.add(char))
      })
    })
  })

  const vo_co = [...vowelSet].filter((char) => !consonantSet.has(char))
  const co_vo = [...consonantSet].filter((char) => !vowelSet.has(char))
  console.log({
    vo_co,
    co_vo,
    vowelSet: vowelSet.size,
    consonantSet: consonantSet.size
  })
  return { vo_co, co_vo }
}
