let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI ʏᴀɴɴ* ´ˎ˗
│ ✎ _Nama_ : 𝓜.𝓡𝔂𝓪𝓷.𝓐 𝓢.𝓢𝓲
│ ✎ _Umur_ : 23🗿
│ ✎ _Asal_ : ʙᴀɴᴅᴜɴɢ,ᴊᴀᴡᴀ ʙᴀʀᴀᴛ
│ ✎ _Status_ : ɴɢᴀᴊᴀʀ🗿
│ ✎ _WhatsApp_ :
│    wa.me/6282252285143
╰──────────────
`.trim(), m)
}

handler.help = ['infoowner']
handler.tags = ['main', 'utama']
handler.command = /^(infoowner)$/i

handler.exp = 150

module.exports = handler
