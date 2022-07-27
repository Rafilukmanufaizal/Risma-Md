let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI ʏᴀɴɴ* ´ˎ˗
│ ✎ _Nama_ : 𝓜.𝓡𝓪𝓯𝓲 𝓵𝓾𝓴𝓶𝓪𝓷𝓾 𝓯𝓪𝓲𝔃𝓪𝓵
│ ✎ _Umur_ : 14
│ ✎ _Asal_ : ᴋᴇᴅɪʀɪ,ᴊᴀᴡᴀ ᴛɪᴍᴜʀ
│ ✎ _Status_ : ᴘᴇʟᴀᴊᴀʀ
│ ✎ _WhatsApp_ :
│    wa.me/6285600380823
╰──────────────
`.trim(), m)
}

handler.help = ['infoowner']
handler.tags = ['main', 'utama']
handler.command = /^(infoowner)$/i

handler.exp = 150

module.exports = handler
