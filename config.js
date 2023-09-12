let fs = require('fs') 
let chalk = require('chalk')
let moment = require('moment-timezone')

// Waktu
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh}:${wibm}:${wibs}`

// Hari Tanggal
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

// Owner
global.owner = [
  ['12024988527'],
  ['12024988527'],
  ['12024988527', 'Kemii Hime', 'Kemii Lèarning@gmail.com', true]
] // Put your number here
global.mods = ['-'] // Moderator
global.prems = ['-'] // Premium
global.rose = ''; //Api Rose
global.lolkey = '';// Api Lolhuman
global.APIs = {
    // API Prefix
    // name: 'https://website'
    xteam: 'https://api.xteam.xyz',
    lol: 'https://api.lolhuman.xyz',
    males: 'https://malesin.xyz',
    zein: 'https://api.zahwazein.xyz',
    rose: 'https://api.itsrose.life',
    xzn: 'https://xzn.wtf',
    saipul: 'https://saipulanuar.cf'
}
global.APIKeys = {
    // APIKey Here
    // 'https://website': 'apikey'
    'https://api.zahwazein.xyz': 'zenzkey_8bb60993ae',
    'https://api.xteam.xyz': 'cristian9407',
    'https://api.lolhuman.xyz': '',
    'https://api.itsrose.life': '',
    'https://xzn.wtf' : 'RyHar'
}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = 'Kikuchanj - Sazumi Kemii'
  var sticker_author = 'Sazumi Kemii'
} else {
  var sticker_name = 'Kikuchanj'
  var sticker_author = 'Sazumi Kemii'
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

// Document
global.minety = pickRandom(['application/msword', 'application/vnd.ms-excel', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'])

// Database
global.version = '1.1.8'
global.sessionName = 'Kemii'
global.gcbot = 'https://chat.whatsapp.com/EHvO9j6JMHb9roHNTvtbdy'
global.instagram = 'https://instagram.com/kemii.learning'
global.namebot = 'Kikuchanj'
global.thumb = 'https://telegra.ph/file/7b5416e93b4423845762d.jpg'
global.thumbnail = 'https://telegra.ph/file/7b5416e93b4423845762d.jpg'
global.myfile = fs.readFileSync(`./media/xfile.pdf`)
global.thumb2 = fs.readFileSync('./media/thumbnail.mp4')
global.qris = 'https://telegra.ph/file/ff5ff2954de46b9509a3d.jpg'
global.creator = "12024988527@s.whatsapp.net"
global.nomorown = '12024988527'
global.nomerown = '+1 (202) 498-8527'//wajib kaya gitu!!

// Sosial Media
global.sig = 'https://wa.me/12024988527'
global.syt = '-'
global.sgh = '-'
global.sgc = 'https://chat.whatsapp.com/EHvO9j6JMHb9roHNTvtbdy'
global.swa = 'https://wa.me/12024988527'
global.swb = '-' // Link Discord
global.snh = 'https://nhentai.net/g/365296/' // Link nhentai

// Pembayaran
global.pdana = '~Not Found~'
global.povo = '~Not Found~'
global.pgopay = '~Not Found~'
global.pulsa = '~Not Found~'
global.pulsa2 = '~Not Found~'
global.psaweria = '~Not Found~'
global.ptrakteer = '~Not Found~'
global.psbuzz = '~Not Found~'

// Fake Size
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

global.useMulti = false

// Watermark
global.packname = 'Kikuchanj'
global.author = '//  Lèarning'
global.wm = 'Kikuchanj'
global.wm2 = 'Sazumi Kemii'
global.bottime = `Time: ${wktuwib}`
global.botdate = `Date: ${week} ${date}\nTime: ${wktuwib}`
global.titlebot = `${global.wm}`
global.danied = 'A K S E S  K A M U  D I  T O L A K!!'
global.packname = 'Kikuchanj'
global.author = 'Sazumi Kemii'
global.nameown = 'Kemii Lèarning'
global.wait = 'Wait a moment... '

// Tampilan
global.htki =  '⬣───「' // Hiasan kiri
global.htka = '」───⬣' // Hiasan kanan
global.htjava = '❃' // Hiasan
global.sa = '╭─'
global.gx = '│✇'
global.gy = '│•'
global.gz = '│'
global.sb = '╰────࿐'
global.kki = '「'
global.kka = '」'
global.zt = '*'
global.zc = ''

global.multiplier = 1000 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈' ,
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v =>vv [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})