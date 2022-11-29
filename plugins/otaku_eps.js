let { get } = require('../lib/otakudesu');

let otakudesu_eps = async(M, quer, prefix, msg, bob) => {
try {
 var res = await get(quer)
        var result = `「 ❗ 」status: 200 result :\n\n_judul : ${res.info.judul}_\n\n_rilis : ${res.info.tanggal_rilis}_\n\n_sinopsis : ${res.sinopsis}_` 
       
        var list = []      
		var teskd = `List Download Per Episode`
		for (let i of res.episode) {
		list.push({
		title: i.episode, rowId: `${prefix}otakudesu download|${i.id}`, description: `Download/Streaming`
		})
		}
		var sections = [{title: 'Download && Batch',rows:list}]
		const Lm = { text: result, footer: "scraper made by restu", buttonText: "Click Here", sections }
		bob.sendMessage(M.chat, Lm, {quoted:msg})	
		} catch (e) {
 M.reply('「 ❗ 」sorry episode not found')
  console.log(e)
}
}
module.exports = otakudesu_eps