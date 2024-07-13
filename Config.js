const fs = require('fs');
const chalk = require('chalk');
require('dotenv').config();

//contact details
global.ownernumber = [ process.env.OWNER_NUMBER || "254745247106"],
global.ownername = process.env.OWNER_NAME || "Bealth Guy",
global.ytname = "YT: Kyle Meshack"
global.socialm = "GitHub: Kyle6012"

global.botname = process.env.BOTNAME || "WAVE-MD",

//sticker details
global.stickername = process.env.STICKER || "BG",
global.packname = 'Sticker By'
global.author = process.env.AUTHOR || "CUTLER",
//console view/theme
global.themeemoji = '🧩'
global.wm = "bealthguy"

//custom prefix
global.prefa = process.env.PREFIX || ".",

//false=disable and true=enable
global.welcome = process.env.WELCOME || "false", //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: ' *Here you go, Friend!* ',
    prem: ' *My friend, this feature is reserved for premium users only*',
    admin: '*Dear Member, this feature is reserved for admins only*',
    botAdmin: '*Hold on right there 🤧🤧🙌! This feature can only be used when the bot is a group admin* ',
    owner: '*Friend, this feature is reserved for the owner only*',
    group: '*Hehe 😌🙅🏾‍♂️, this feature is exclusively for groups*',
    private: '*Dear user, this feature is exclusively for private chats*',
    wait: '*😁😁, in process...* ',    
    error: '*Oh Shit!!🙆🏿‍♂️🙆🏿‍♂️, there seems to be an error!🏃🏾‍♂️🏃🏾‍♂️*',
}

module.exports = {
ownernumber: global.ownernumber,
ownername: global.ownername,
sessionId: process.env.id,
AUTO_BLOCK : process.env.PM_BLOCKER,
STATUS_SAVER : "true",
ANTI_BOT:"true",
}


global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
