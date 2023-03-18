import TicTacToe from '../lib/tictactoe.js'
let handler = async (m, { conn, usedPrefix, command, text }) => {
conn.game = conn.game ? conn.game : {}
if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw '*[❗] 𝙰𝚄𝙽 𝙴𝚂𝚃𝙰𝚂 𝙴𝙽 𝚄𝙽 𝙹𝚄𝙴𝙶𝙾 𝙲𝙾𝙽 𝙰𝙻𝙶𝚄𝙸𝙴𝙽*'
if (!text) throw `*[❗] 𝚂𝙴 𝚁𝙴𝚀𝚄𝙸𝙴𝚁𝙴 𝙿𝙾𝙽𝙴𝚁 𝚄𝙽 𝙽𝙾𝙼𝙱𝚁𝙴 𝙰 𝙻𝙰 𝚂𝙰𝙻𝙰 𝙳𝙴 𝙹𝚄𝙴𝙶𝙾*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾*\n*◉ ${usedPrefix + command} nueva sala*`
let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
await m.reply('*[🕹️] 𝙸𝙽𝙸𝙲𝙸𝙰 𝙴𝙻 𝙹𝚄𝙴𝙶𝙾, 𝚄𝙽 𝙹𝚄𝙶𝙰𝙳𝙾𝚁 𝚂𝙴 𝚄𝙽𝙸𝙾 𝙰 𝙻𝙰 𝙿𝙰𝚁𝚃𝙸𝙳𝙰*')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❎',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]})
let str = `💖 𝙹𝚄𝙴𝙶𝙾 𝚃𝚁𝙴𝚂 𝙴𝙽 𝚁𝙰𝚈𝙰 | 𝙻𝙰 𝚅𝙸𝙴𝙹𝙰
🫂 *𝙹𝚄𝙶𝙰𝙳𝙾𝚁𝙴𝚂*:
*═════════*
❎ = @${room.game.playerX.split('@')[0]}
⭕ = @${room.game.playerO.split('@')[0]}
*═════════*
        ${arr.slice(0, 3).join('')}
        ${arr.slice(3, 6).join('')}
        ${arr.slice(6).join('')}
*═════════*
𝚃𝚄𝚁𝙽𝙾 𝙳𝙴 @${room.game.currentTurn.split('@')[0]}
`.trim()
if (room.x !== room.o) await conn.sendMessage(room.x, { text: str, mentions: this.parseMention(str)}, { quoted: m })
await conn.sendMessage(room.o, { text: str, mentions: conn.parseMention(str)}, { quoted: m })
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING' }
if (text) room.name = text     
let imgplay = './Menu2.jpg'
conn.sendButton(m.chat, `📍 𝐓𝐑𝐄𝐒 𝐄𝐍 𝐑𝐀𝐘𝐀 | 𝐋𝐀 𝐕𝐈𝐄𝐉𝐀

➢ 𝙴𝚂𝙿𝙴𝚁𝙰𝙽𝙳𝙾 𝙰𝙻 𝚂𝙴𝙶𝚄𝙽𝙳𝙾 𝙹𝚄𝙶𝙰𝙳𝙾𝚁 𝙿𝚄𝙴𝙳𝙴 𝙴𝙽𝚃𝚁𝙰𝚁 𝙲𝙾𝙽 𝙴𝙻 𝙱𝙾𝚃𝙾𝙽 𝙳𝙴 𝙰𝙱𝙰𝙹𝙾 𝙾 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 *${usedPrefix + command} ${text}*

➢ 𝙿𝙰𝚁𝙰 𝙱𝙾𝚁𝚁𝙰𝚁 𝙾 𝚂𝙰𝙻𝙸𝚁𝚂𝙴 𝙳𝙴 𝙻𝙰 𝙿𝙰𝚁𝚃𝙸𝙳𝙰 𝚄𝚂𝙴𝙽 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾
*${usedPrefix}delttt*`, wm, imgplay, [['𝚄𝙽𝙸𝚁𝚂𝙴 𝙰 𝙻𝙰 𝙿𝙰𝚁𝚃𝙸𝙳𝙰', `${usedPrefix + command} ${text}`]], m, { mentions: conn.parseMention(text) })
conn.game[room.id] = room
}}
handler.command = /^(tictactoe|ttc|ttt|xo)$/i
export default handler
