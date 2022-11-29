let { download } = require('../lib/otakudesu');
let { sleep } = require('../lib/myfunc');

let otakudesu_download = async(M, quer, prefix, msg, bob) => {
try {
  if(!quer) return M.reply('「 ❗ 」masukan paramater id')
  M.reply('「 ❗ 」please wait 8 seconds')
  //await sleep(8000)
  download(quer).then(res => {
  console.log(res)
  var result = `「 ❗ 」status : 200 ok

quality : ${res[0].quality}
size : ${res[0].size}
link :
   ZippyShare: ${res[0].url.Zippy}
   Acefile: ${res[0].url.Acefile}
   Filesim: ${res[0].url.Filesim}
   Desucloud: ${res[0].url.Desucloud}

quality : ${res[1].quality}
size : ${res[1].size}
link :
   ZippyShare: ${res[1].url.Zippy}
   Acefile: ${res[1].url.Acefile}
   Filesim: ${res[1].url.Filesim}
   Desucloud: ${res[1].url.Desucloud}

quality : ${res[2].quality}
size : ${res[2].size}
link :
   ZippyShare: ${res[2].url.Zippy}
   Acefile: ${res[2].url.Acefile}
   Filesim: ${res[2].url.Filesim}
   Desucloud: ${res[2].url.Desucloud}
   `
   M.reply(result)
  })
 } catch (e) {
 M.reply('「 ❗ 」sorry the link episode not respond, try again later')
 console.log(e)
}
}
module.exports = otakudesu_download