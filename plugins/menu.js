/*
██████╗  █████╗ ██████╗ ██╗  ██╗     ██████╗ ██╗   ██╗███████╗███████╗███╗   ██╗
██╔══██╗██╔══██╗██╔══██╗██║ ██╔╝    ██╔═══██╗██║   ██║██╔════╝██╔════╝████╗  ██║
██║  ██║███████║██████╔╝█████╔╝     ██║   ██║██║   ██║█████╗  █████╗  ██╔██╗ ██║
██║  ██║██╔══██║██╔══██╗██╔═██╗     ██║▄▄ ██║██║   ██║██╔══╝  ██╔══╝  ██║╚██╗██║
██████╔╝██║  ██║██║  ██║██║  ██╗    ╚██████╔╝╚██████╔╝███████╗███████╗██║ ╚████║
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝     ╚══▀▀═╝  ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═══╝
created by manisha sasmitha                                                                                 
 DONT COPY
*/

const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "menu the bot",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `*👋 Hello ${pushname}*
    
 ╔══════✮❁•°♛°•❁✮ ═══════╗
     𝐃𝐀𝐑𝐊 𝐐𝐔𝐄𝐄𝐍 𝐌𝐄𝐍𝐔 𝐋𝐈𝐒𝐓
 ╚══════✮❁•°♛°•❁✮ ═══════╝
  
*❖╭─────────────···▸*
*❖│▸*➤ *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
*❖│▸*➤ *ᴍᴏᴅᴇ* : *PUBLIC*
*❖│▸*➤ *ᴘʀᴇғɪx* : *.*
*❖│▸*➤ *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*❖│▸*➤ *ɴᴀᴍᴇ ʙᴏᴛ* : *❖DARK_QUEEN❖*
*❖│▸*➤ *ᴄʀᴇᴀᴛᴏʀ* : *➺MANISHA SASMITHA࿐*
*❖│▸*➤ *ᴠᴇʀsɪᴏɴs* : *ᴠ.2.0.6*
*❖│▸*➤ *ᴍᴇɴᴜ ᴄᴍᴅ* : *ᴍᴇɴᴜ ʟɪsᴛ*
*❖╰────────────···▸▸*
*♡︎•━━━━━━☻︎━━━━━━•♡︎*
*╭╼╼╼╼╼╼╼╼╼╼*
*├➤ 1 • OWNER*
*├➤ 2 • CONVERT*
*├➤ 3 • AI*
*├➤ 4 • SEARCH*
*├➤ 5 • DOWNLOAD*
*├➤ 6 • MAIN*
*├➤ 7 • GROUP*
*├➤ 8 • TOOLS*
*├➤ 9 • OTHER*
*╰╼╼╼╼╼╼╼╼╼╼*
* ▣▣▣▣▣▣▣▣▣▣▣▣*⁠⁠⁠⁠

*ׂ╰┈➤Reply with the Number you want to select*

*🉐DARK QUEEN NEW UPDATE*

*🖇️https://whatsapp.com/channel/0029VavZd1y0lwgxqEopap2e*

*©ᴅᴀʀᴋ_Qᴜᴇᴇɴ ᴄʀᴇᴀᴛᴇ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀッ*`;

        const vv = await conn.sendMessage(from, { image: { url: "https://files.catbox.moe/v1k9r3.jpg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`*╔══════OWNER COMMAND═══════╗*

╭────────●●►
│ ➽ *shutdown* 
│ ➽ *broadcast*
│ ➽ *setpp*
│ ➽ *block*
│ ➽ *unblock*
│ ➽ *clearchats*
│ ➽ *jid*
│ ➽ *fullpp*
│ ➽ *restart*
│ ➽ *setautobio*
╰────────────────────●●►

⭓ *Total Commands List OWNER: 10*

*©ᴅᴀʀᴋ_Qᴜᴇᴇɴ ᴄʀᴇᴀᴛᴇ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀッ*`);
                        break;
                    case '2':               
                        repl (`*╔══════CONVERT COMMAND═══════╗*

╭────────●●►
│ ➽ *sticker* 
╰────────────────────●●►

⭓ *Total Commands List CONVERT: 1*

*©ᴅᴀʀᴋ_Qᴜᴇᴇɴ ᴄʀᴇᴀᴛᴇ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀッ*`);
                        break;
                    case '3':               
                        reply(`*╔══════AI COMMAND═══════╗*

╭────────●●►
│ ➽ *ai* 
╰────────────────────●●►

⭓ *Total Commands List AI: 1*

*©ᴅᴀʀᴋ_Qᴜᴇᴇɴ ᴄʀᴇᴀᴛᴇ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀッ*`);
                        break;
                    case '4':               
                        reply(`*╔══════SEARCH COMMAND═══════╗*

╭────────●●►
│ ➽ *yts* 
╰────────────────────●●►

⭓ *Total Commands List SEARCH: 1*

*©ᴅᴀʀᴋ_Qᴜᴇᴇɴ ᴄʀᴇᴀᴛᴇ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀッ*`);
                        break;
                    case '5':               
                        reply(`*╔══════DOWNLOAD COMMAND═══════╗*

╭────────●●►
│ ➽ *apk* 
╰────────────────────●●►
╭────────●●►
│ ➽ *tts*
╰────────────────────●●►
╭────────●●►
│ ➽ *tiktok*
╰────────────────────●●►
╭────────●●►
│ ➽ *mfire*
╰────────────────────●●►
╭────────●●►
│ ➽ *fb*
╰────────────────────●●►
╭────────●●►
│ ➽ *gdrive*
╰────────────────────●●►
╭────────●●►
│ ➽ *ig*
╰────────────────────●●►
╭────────●●►
│ ➽ *mp3*
╰────────────────────●●►
╭────────●●►
│ ➽ *mp4*
╰────────────────────●●►
╭────────●●►
│ ➽ *xnxx*
╰────────────────────●●►

⭓ *Total Commands List DOWNLOAD: 10*

*©ᴅᴀʀᴋ_Qᴜᴇᴇɴ ᴄʀᴇᴀᴛᴇ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀッ*`);
                        break;
                    case '6':               
                        reply(`*╔══════MAIN COMMAND═══════╗*

╭────────●●►
│ ➽ *alive* 
╰────────────────────●●►
╭────────●●►
│ ➽ *owener* 
╰────────────────────●●►
╭────────●●►
│ ➽ *menu* 
╰────────────────────●●►
╭────────●●►
│ ➽ *ping* 
╰────────────────────●●►
╭────────●●►
│ ➽ *repo* 
╰────────────────────●●►
╭────────●●►
│ ➽ *runtime* 
╰────────────────────●●►
╭────────●●►
│ ➽ *support* 
╰────────────────────●●►
╭────────●●►
│ ➽ *system* 
╰────────────────────●●►

⭓ *Total Commands List MAIN: 8*

*©ᴅᴀʀᴋ_Qᴜᴇᴇɴ ᴄʀᴇᴀᴛᴇ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀッ*`);
                        break;
                    case '7':               
                        reply(`*╔══════GROUP COMMAND═══════╗*
╭────────●●►
│ ➽ *del*
╰────────────────────●●►
╭────────●●►
│ ➽ *promote* 
╰────────────────────●●►
╭────────●●►
│ ➽ *demote* 
╰────────────────────●●►
╭────────●●►
│ ➽ *remove*
╰────────────────────●●►
╭────────●●►
│ ➽ *add*
╰────────────────────●●►
╭────────●●►
│ ➽ *setgoodbye*
╰────────────────────●●►
╭────────●●►
│ ➽ *setwelcome*
╰────────────────────●●►
╭────────●●►
│ ➽ *getpic*
╰────────────────────●●►

⭓ *Total Commands List GROUP: 8*

*©ᴅᴀʀᴋ_Qᴜᴇᴇɴ ᴄʀᴇᴀᴛᴇ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀッ*`);
                        break;
                    case '8':               
                        reply(`*╔══════TOOLS COMMAND═══════╗*


╭────────●●►
│ ➽ *calc*
╰────────────────────●●►
╭────────●●►
│ ➽ *currency*
╰────────────────────●●►
╭────────●●►
│ ➽ *translate*
╰────────────────────●●►
╭────────●●►
│ ➽ *reverse*
╰────────────────────●●►
╭────────●●►
│ ➽ *tempmail*
╰────────────────────●●►
╭────────●●►
│ ➽ *checkmail*
╰────────────────────●●►
╭────────●●►
│ ➽ *delmail*
╰────────────────────●●►
╭────────●●►
│ ➽ *url*
╰────────────────────●●►
╭────────●●►
│ ➽ *encode*
╰────────────────────●●►
╭────────●●►
│ ➽ *npmstalk*
╰────────────────────●●►
╭────────●●►
│ ➽ *githubuser*
╰────────────────────●●►
╭────────●●►
│ ➽ *hijact*
╰────────────────────●●►

⭓ *Total Commands List OTHER: 12*

*©ᴅᴀʀᴋ_Qᴜᴇᴇɴ ᴄʀᴇᴀᴛᴇ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀッ*`);

                        break;
                    case '9':               
                        reply(`*╔══════OTHER COMMAND═══════╗*


╭────────●●►
│ ➽ *weather* 
╰────────────────────●●►

⭓ *Total Commands List OTHER: 1*

*©ᴅᴀʀᴋ_Qᴜᴇᴇɴ ᴄʀᴇᴀᴛᴇ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀッ*`);


                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});