// const toIntImported = require('../utilsTS/InfoConversion')
// let converted = toIntImported.toInt("hehe")
// console.log(converted)
//----------------------------------------------------
// const IndexPath = require('../utilsTS/utilizations').IndexPath
// let path = new IndexPath(5, "A")
// let cellRange = path.range
// console.log(path)
// console.log(cellRange)
//-------------------------------------------------------
// @ts-ignore
// const seq = require('../util/utilization').sequenceThrough

// let s = seq(1, 5)
// for (const i of s) {
//     console.log(i)
// }
// console.log(s)


//--------------------pin yin------------------
// import pinyin from 'pinyin'

// let converted = pinyin(
//     "中国",
//     {
//         style: pinyin.STYLE_TONE2,
//     }
// ).join("-")
// console.log(converted)

// let s = new Map()
// s.set("vlan", 3003)
// s.set("mac", "ACE9-9889-A9C1")

// console.log(s.get("vlan"))
// for (const key of s.keys()) {
//     console.log(key, s.get(key))
// }

// let a: number = 0
// a = s.get('vlan')
// console.log(a)

const Telnet = require('telnet-client')

async function run() {
  let connection = new Telnet()

  let params = {
    host: '10.254.56.6',
    port: 23,
    loginPrompt: /User name:/,
    passwordPrompt: /User password:/,
    shellPrompt: /5683/,
    username: 'wzcatv',
    password: 'wzcatv703',
    timeout: 1500
  }

  let cnct = await connection.connect(params)
  console.log(cnct)

  let res = await connection.exec('display current\n')
}

run()
