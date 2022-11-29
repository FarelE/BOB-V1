let kusonime = require('../lib/kusonime');

let kuso_batch = async(M, q, prefix, msg, bob) => { 
   if(!q) return M.reply('Masukan parameter link')
   
   let kuso = await kusonime(q)    
   let { linkdl360, linkdl480, linkdl720, linkdl1080 } = kuso.result.download
   let hasil = ``
   for(let i of linkdl360) {
   hasil +=`\n\n${i}`
   //var res = i.substring(8, 16);
   console.log(i.linkdl360)
   //console.log(res)
   //console.log(i.replace('https://', 'Via : '))
   }
   //M.reply(hasil)
        
     
        
}
module.exports = kuso_batch