/*
██████╗  █████╗ ██████╗ ██╗  ██╗         ██████╗ ██╗   ██╗███████╗███████╗███╗   ██╗      ██╗   ██╗ ██╗
██╔══██╗██╔══██╗██╔══██╗██║ ██╔╝        ██╔═══██╗██║   ██║██╔════╝██╔════╝████╗  ██║      ██║   ██║███║
██║  ██║███████║██████╔╝█████╔╝         ██║   ██║██║   ██║█████╗  █████╗  ██╔██╗ ██║█████╗██║   ██║╚██║
██║  ██║██╔══██║██╔══██╗██╔═██╗         ██║▄▄ ██║██║   ██║██╔══╝  ██╔══╝  ██║╚██╗██║╚════╝╚██╗ ██╔╝ ██║
██████╔╝██║  ██║██║  ██║██║  ██╗███████╗╚██████╔╝╚██████╔╝███████╗███████╗██║ ╚████║       ╚████╔╝  ██║
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ ╚══▀▀═╝  ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═══╝        ╚═══╝   ╚═╝                                                                                                       
creare by manisha sasmitha 
whatsapp number:94721551183
*/



cmd({
    pattern: "tiktok",
    alias: ["tiktok"],
    desc: "download tiktok video,audio",
    category: "download",
    react: "📩",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {
if (!q && !q.startsWith("https://")) return reply("give me tiktok url")
        //fetch data from api  
let data = await fetchJson(`${baseUrl}/api/tiktokdl?url=${q}`)
reply("*ᴅᴀʀᴋ_Qᴜᴇᴇɴ ᴛɪᴋᴛᴏᴋ ᴅᴏᴡɴʟᴏᴀᴅ...📥*")
           //send video (hd)
await conn.sendMessage(from, { video: { url: data.data.data.HD }, mimetype: "video/mp4", caption: `- HD\n\n ${yourName}` }, { quoted: mek })  
        //send audio    
await conn.sendMessage(from, { audio: { url: data.data.data.audio }, mimetype: "audio/mpeg" }, { quoted: mek })                                                                                                                  
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
