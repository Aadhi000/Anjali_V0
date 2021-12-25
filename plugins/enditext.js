const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'ask', fromMe: true}, (async (message, match) => {

    await message.sendMessage('*S*');
    await message.sendMessage('*Se*');
    await message.sendMessage('*Sen*');
    await message.sendMessage('😍 *Seni* 😍');
    
    await new Promise(r => setTimeout(r, 1000));

    await message.sendMessage('*Ç*');
    await message.sendMessage('*Ço*');
    await message.sendMessage('*Çoo*');
    await message.sendMessage('🥰 *Çook* 🥰');
    
    await new Promise(r => setTimeout(r, 1000));

    await message.sendMessage('*S*');
    await message.sendMessage('*Se*');
    await message.sendMessage('*Sev*');
    await message.sendMessage('*Sevi*');
    await message.sendMessage('*Seviy*');
    await message.sendMessage('*Seviyo*');
    await message.sendMessage('*Seviyor*');
    await message.sendMessage('*Seviyoru*');
    await message.sendMessage('💞 *Seviyorum* 💗');
    
    await new Promise(r => setTimeout(r, 1000));

    await message.sendMessage('Seni ♥️ Seviyorum');

}));

Asena.addCommand({pattern: 'infoask', fromMe: true}, (async (message, match) => {

    await message.sendMessage("*Codded by TOXIDE-SER*\n*Seni seviyorum demenin güzel bir hali.*\n💻Usage: *.ask*")

}));
   
Asena.addCommand({pattern: 'love', fromMe: true}, (async (message, match) => {

    await message.sendMessage('*N*');
    await message.sendMessage('*NI*');
    await message.sendMessage('*NIN*');
    await message.sendMessage('*NINT*');
    await message.sendMessage('*NINTE*');
    await message.sendMessage('*NINTE E*');
    await message.sendMessage('*NINTE EN*');
    await message.sendMessage('😡 *NINTE ENDI* 😡');

    await new Promise(r => setTimeout(r, 1000));

    await message.sendMessage('*P*');
    await message.sendMessage('*PO*');
    await message.sendMessage('*PO M*');
    await message.sendMessage('*PO MY*');
    await message.sendMessage('*PO MYR*');
    await message.sendMessage('🤬 *PO MYRE* 🤬');

    await new Promise(r => setTimeout(r, 1000));

    await message.sendMessage('*NINTE ENDI POO MEIRE🤬');

}));

Asena.addCommand({pattern: 'infolove', fromMe: true}, (async (message, match) => {

    await message.sendMessage("*Codded by TOXIDE-SER*\n*To say best way ı love you.*\n💻Usage: *.love*")

}));
