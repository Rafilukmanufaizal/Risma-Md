let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI OWNER* ´ˎ˗
│ ✎ _Nama_ : ℛ𝓎𝒶𝓃 𝒜𝒹𝒾𝓉𝓎𝒶
│ ✎ _Sekolah_ : ʟᴜʟᴜs 
│ ✎ _Umur_ : 23
│ ✎ _Asal_ : ᴊᴀᴡᴀ ʙᴀʀᴀᴛ
│ ✎ _Status_ : Turu deck
│ ✎ _Official Grup 1_ :
│    https://chat.whatsapp.com/B9cQxA0NWrXHtFclMS5awJ
│ ✎ _Official Grup 2_ :
│    https://chat.whatsapp.com/DMqCCHW4Uvb2Kd4Cpus1vC
│ ✎ _WhatsApp_ :
│    wa.me/6282252285143
╰───────────────────
`.trim(), m)
}

handler.help = ['bioowner']
handler.tags = ['main', 'utama']
handler.command = /^(infojarot)$/i

handler.exp = 150

module.exports = handler
