const spacetime = require('./src/index')
spacetime.extend(require('./plugins/dst/src/index.js'))
// let zones = require('/Users/spencer/mountain/spacetime/zonefile/iana.js')
// const alias = require('/Users/spencer/mountain/spacetime/plugins/better-dst/zonefile/aliases.js')

// console.log(Object.keys(zones).length)
// Object.keys(zones).forEach((k) => {
//   if (alias[k]) {
//     delete zones[k]
//     // console.log(k)
//     // if (zones[alias[k]]) {
//     // } else {
//     //   console.log(k, alias[k])
//     //   console.log()
//     // }
//     // return false
//   }
//   // return true
// })
// console.log(Object.keys(zones).length)
// console.log(JSON.stringify(zones, null, 2))
// let s = spacetime.min()
// console.log(s.iso())

// let d = spacetime()
// console.log(d.dst())

// let d = spacetime('Sun May 2nd 2021')
// console.log(d.format('nice-day'))
// d = d.add(1, 'weekend')
// console.log(d.format('nice-day'))
let d = spacetime('2021-04-17')
console.log(d.format('nice-day'))
// d = d.add(1, 'weekend')
// console.log(d.format('nice-day'))
