let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*𝙷𝙾𝙻𝙰 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 👋🏻, 𝚃𝙴 𝙸𝙽𝚅𝙸𝚃𝙾 𝙰 𝚄𝙽𝙸𝚁𝚃𝙴 𝙰 𝙻𝙾𝚂 𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂 𝙳𝙴 †𝐃⃟𝕺𝐑⃯𝐑𝐇⃯𝚵𝐓᪣𝕭⃯𝚹⃯𝐓⃤ 𝙿𝙰𝚁𝙰 𝙲𝙾𝙽𝚅𝙸𝚅𝙸𝚁 𝙲𝙾𝙽 𝙻𝙰 𝙲𝙾𝙼𝚄𝙽𝙸𝙳𝙰𝙳 :D*

╭━━❍THE-MAKANAKY-BOT❍━━╮
┃ ╭━━━━━━━━━━━━━━━━╮
┃ ┃ ╭┈────────────╮
┃ ┃ │❍ 𝐆𝐑𝐔𝐏𝐎𝐒-𝐎𝐅𝐈𝐂𝐈𝐀𝐋𝐄𝐒 ❍
┃ ┃ ╰┈────────────╯
┃ ╰━━━━━━━━━━━━━━━━╯
╰━━━𝐆𝐑𝐔𝐏𝐎𝐒-𝐎𝐅𝐈𝐂𝐈𝐀𝐋𝐄𝐒╾━━━╯

`.trim(), wm, media, [['💟 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 💟', '#menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
