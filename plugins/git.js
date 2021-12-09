const Maalutty = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Maalutty.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://github.com/TOXIDE-SER-444/ANJALI_V2/blob/0088b05af05db0798cf2220081b2cad39a50c17f/plugins/sql/AKSHAY.png";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `❤️ANJALI_V2💙

*bot making video* : https://youtu.be/jF8wF1KdyOw


*owner number ᴛᴏxɪᴅᴇ ꜱᴇʀ* :https://wa.me/919048329892.
            


*owner id instagram* :https://instagram.com/mind_have_changed_?utm_medium=copy_link.


*github* : https://github.com/TOXIDE-SER-444/ANJALI_V2.


*audio commands* :https://github.com/TOXIDE-SER-444/uploads/tree/main/bgm.

*sticker commands* :https://github.com/TOXIDE-SER-444/uploads/tree/main/stickers.
■□■□■□■□■□■□■□■□■□■□
❤️ANJALI_V2💙
▣▣ ~ᴛᴏxɪᴅᴇ ꜱᴇʀ~ ▣▣

`}) 

}));
