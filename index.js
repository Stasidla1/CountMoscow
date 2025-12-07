const TelegamApi = require("node-telegram-bot-api");
const { workWithMessage, cutFirstValue } = require("./count");
const { rusToDollar } = require("./rubToDoll");


const token = "7783051578:AAGi9sUFBPUTSXTi8MRgQnC_Bo3R35g-spM"

const bot = new TelegamApi(token, { polling: true });

const start = ()=>{
    let course;
    bot.on('message',async (msg)=>{
        const message = msg.text
        const chatId = msg.chat.id
        if(message.toLowerCase().includes('курс')){
            course = message.replace(/[^0-9.]/gi,'')
            bot.sendMessage(chatId, `Указанный курс: ${course}`)
        }else{
            const output = workWithMessage(message)
            const text = rusToDollar(message,course)
            bot.sendMessage(chatId,output)
            bot.sendMessage(chatId,text)
        }
    })
}

start()