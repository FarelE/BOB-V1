const fs = require('fs')
const { UploadFileUgu } = require('../lib/uploader')
const { getBuffer, getRandom } = require('../lib/myfunc')

let what = async(quoted, mime, bob, msg, M) => {
try {
if (!quoted)return M.reply('reply the image')
if (/image/.test(mime)) {

let buff = await bob.downloadAndSaveMediaMessage(msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
let teph = await UploadFileUgu(buff)
let pp = await fetch(`https://api.trace.moe/search?anilistInfo&url=${teph.url}`).then(res => res.json())
let { anilist, filename, episode, from, to, similarity, video, image } = pp.result[0]

let cp =`「 ❗ 」What Anime

Akurasi : ${similarity < 0.89 ? 'not sure?\nmake sure the anime scene border has been cut' : 'certain'}

Hentai : ${anilist.isAdult}
Title romaji : ${anilist.title.romaji}
Title english : ${anilist.title.english}
Detail Episode : ${episode}
Scene anime : ${video}
`
  var button = [
             { 
              buttonId: `#`, 
              buttonText: { 
               displayText: `Search This Anime` 
               }, type: 1 
              }
             ]             
          bob.sendMessage(
         M.chat, 
         { 
         caption: cp, 
         image: { url: image },
         buttons: button, 
         footer: 'Made with api.trace.moe'}) 

 await fs.unlinkSync(buff)
 }
} catch (e) {
M.reply('「 ❗ 」please reply the img with scene anime\n don`t forget to trim the border scene part of the anime')
}
}

module.exports = what
