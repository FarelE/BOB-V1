let { fetchJson, getBuffer } = require('../lib/myfunc');
let { search } = require('../lib/otakudesu');

let otaku_search = async(M, quer, prefix, msg, bob) => {
try {
 if(!quer)return M.reply('「 ❗ 」 _Masukan parameter query_')
  var sc = await search(quer)
  var cp =  `「 ❗ 」result for ${quer}

_title : ${sc[0].title}_
_source : ${sc[0].url}_
_status : ${sc[0].status}_
_rating : ${sc[0].rating}_
`
  var button = [
             { 
              buttonId: `#otakudesu get|${sc[0].id}`, 
              buttonText: { 
               displayText: `List episode` 
               }, type: 1 
              }
             ]             
         await bob.sendMessage(
         M.chat, 
         { 
         caption: cp, 
         image: { url: sc[0].thumbnail },
         buttons: button, 
         footer: 'Made with ❣️'})        
    } catch (e) {
 M.reply('「 ❗ 」sorry anime not found!!')
}                 
}
module.exports = otaku_search