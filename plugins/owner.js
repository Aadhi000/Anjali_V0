const Julie = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

if (Config.WORKTYPE == 'private') {

    Julie.addCommand({pattern: 'owner', fromMe: true, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '919048329892-1634557305@g.us') {

            return;
        }

        if (Config.OWNER == 'default') {
            await message.client.sendMessage(message.jid,'*❤️ANJALI_V2💙 CREATED BY TOXIDE SER*' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.OWNER + '\n❤️ANJALI_V2💙 CREATED BY TOXIDE SER', MessageType.text);
        }
    }));
}

else if (Config.WORKTYPE == 'public') {

    Julie.addCommand({pattern: 'owner', fromMe: false, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '919048329892-1634557305@g.us') {

            return;
        }

        if (Config.OWNER == 'default') {
            await message.client.sendMessage(message.jid,'*❤️ANJALI_V2💙 CREATED BY TOXIDE SER*' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.OWNER + '\n❤️ANJALI_V2💙 CREATED BY TOXIDE SER', MessageType.text);
        }
    }));
}
