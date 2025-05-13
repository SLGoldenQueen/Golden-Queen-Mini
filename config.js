const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}  
module.exports = {

// Command prefix එක (උදා: .menu, .alive)👇👇👇
PREFIX: process.env.PREFIX || ".",

// SESSION_ID – ඔබේ WhatsApp session එකට භාවිත වන unique key එක. මේක හරි ආකාරයෙන් ඇතුළත් කළ යුතුය.👇👇👇
SESSION_ID: process.env.SESSION_ID || "",

// ඔබගේ ඔනෙර් නම්බර් එක ඇතුලත් කරන්න👇👇👇
OWNER_NUMBER: process.env.OWNER_NUMBER || "94762983012",


// WhatsApp Status (Stories) auto read කරන්නද?👇👇👇
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",

// Chats වලට auto emoji reaction එකක් දාන්නද?👇👇👇
AUTO_REACT: process.env.AUTO_REACT || "false",

// Bot එක හැම විටම Online කියලා පෙන්වන්නද?👇👇👇
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",

// Message එකක් ලැබුණාම auto read කරන්නද?👇👇👇
AUTO_READ: process.env.AUTO_READ || "false",

// Bot එක auto recording (voice typing symbol) එකක් පෙන්වන්නද?👇👇👇
AUTO_RECORD: process.env.AUTO_RECORD || "false",

// Bot එක auto typing (typing...) status එක පෙන්වන්නද?👇👇👇
AUTO_TYPING: process.env.AUTO_TYPING || "true",

// Bot එක auto recording status එක හැම විටම පෙන්වන්නද?👇👇👇
AUTO_RECORDING: process.env.AUTO_RECORDING || "false",

// WhatsApp Status (stories) වලට auto react කරන්නද?👇👇👇
AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || "true",

// Group chats වල නරක වචන block කරන්නද?👇👇👇
ANTI_BAD: process.env.ANTI_BAD || "true",

// WhatsApp group chats වල link blocker එකක් ක්‍රියාත්මක කරන්නද?👇👇👇
ANTI_LINK: process.env.ANTI_LINK || "true",

// .alive command එකට පිළිතුරු වශයෙන් පෙන්විය යුතු Message එක👇👇👇
ALIVE_MSG: process.env.ALIVE_MSG || "IAm Online Golden Queen Mini",

// .alive command එකට පෙන්විය යුතු රූපයෙහි URL එක👇👇👇
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/N6CXn4ym/Golden-Queen-MD-VIMAMODS-5d466c7355a1c638.jpg",

// unknown / foreign number වලට auto block කරන්නද?👇👇👇
AUTO_BLOCK: process.env.AUTO_BLOCK || "false",

// Bot එකේ ක්‍රියාකාරී තත්ත්වය - "public", "private",👇👇👇
MODE: process.env.MODE || "public",


  MAX_SIZE: 500,
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO
};
