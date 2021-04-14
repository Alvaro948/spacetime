const parsers = require('./formats')

const parseString = function (s, input, givenTz) {
  //try each text-parse template, use the first good result
  for (let i = 0; i < parsers.length; i++) {
    let m = input.match(parsers[i].reg)
    if (m) {
      // console.log(strFmt[i].reg)
      let res = parsers[i].parse(s, m, givenTz)

      if (res !== null && res.isValid()) {
        return res
      }
    }
  }
  if (s.silent === false) {
    console.warn("Warning: couldn't parse date-string: '" + input + "'")
  }
  s.epoch = null
  return s
}
module.exports = parseString
