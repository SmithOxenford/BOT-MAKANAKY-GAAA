import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let cristiano = (await axios.get(`https://raw.githubusercontent.com/SmithOxenford/BOT-MAKANAKY-GAAA/master/galeria/JSON/CristianoRonaldo.json`)).data  
let ronaldo = await cristiano[Math.floor(cristiano.length * Math.random())]
conn.sendButton(m.chat, "*Siiiuuuuuu*", wm, ronaldo, [['⚽ SIGUIENTE ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['cristianoronaldo', 'cr7']
handler.tags = ['internet']
handler.command = /^(cristianoronaldo|cr7)$/i
export default handler
