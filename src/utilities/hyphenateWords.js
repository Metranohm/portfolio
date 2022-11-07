function hyphenateWords(str) {
  let hyphenated = str.toLowerCase().replaceAll(' ', '-')
  let pruned = hyphenated.replaceAll(/[.,!?']/g, '')
  return pruned
}

export default hyphenateWords
