let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI OWNER 1* ´ˎ˗
│ ✎ _Nama_ : 𝓕𝓪𝓲𝓼𝓪𝓵
│ ✎ _Sekolah_ : sᴍᴘ
│ ✎ _Umur_ : 14
│ ✎ _Asal_ : ᴊᴀᴡᴀ ᴛɪᴍᴜʀ
│ ✎ _Status_ : Turu deck
│ ✎ _WhatsApp_ : wa.me/6285600380823
╰───────────────────

╭─˗ˏˋ *INFORMASI OWNER 2* ´ˎ˗
│ ✎ _Nama_ : Wahyudi
│ ✎  _Sekolah_ : SMAN 96
│ ✎  _Umur_ : 16
│ ✎  _Asal_ : JAKARTA
│ ✎  _Status_ : Cndy.
│ ✎ _WhatsApp_ : wa.me/6285693650294
╰───────────────────
╭─˗ˏˋ *GRUP OFFICIAL BOT* ´ˎ˗
│ ✎ _Official Grup 1_ :
│    https://chat.whatsapp.com/B9cQxA0NWrXHtFclMS5awJ
│ ✎ _Official Grup 2_ :
│    https://chat.whatsapp.com/DMqCCHW4Uvb2Kd4Cpus1vC
╰───────────────────
`.trim(), m)
}

handler.help = ['bioowner']
handler.tags = ['main', 'utama']
handler.command = /^(bioowner)$/i

handler.exp = 150

module.exports = handler
