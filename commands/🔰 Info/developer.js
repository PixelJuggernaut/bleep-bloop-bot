const {
  MessageEmbed
} = require("discord.js")
const config = require(`${process.cwd()}/botconfig/config.json`)
var ee = require(`${process.cwd()}/botconfig/embed.json`)
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const {
  MessageButton,
  MessageActionRow
} = require('discord.js')
const {
  handlemsg
} = require(`${process.cwd()}/handlers/functions`)
module.exports = {
  name: "developer",
  category: "🔰 Info",
  aliases: ["dev", "psycho"],
  description: "Shows Information about the Developer",
  usage: "developer",
  type: "bot",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    let button_public_invite = new MessageButton().setStyle('LINK').setLabel(client.la[ls].cmds.info.developer.buttons.invite).setURL("https://discord.com/api/oauth2/authorize?client_id=734513783338434591&permissions=8&scope=bot%20applications.commands")
    let button_support_dc = new MessageButton().setStyle('LINK').setLabel(client.la[ls].cmds.info.developer.buttons.dc).setURL("https://discord.gg/pk8Ve68UEH")
    let button_invite = new MessageButton().setStyle('LINK').setLabel(client.la[ls].cmds.info.developer.buttons.botlist).setURL(`https://github.com/Psycho006Develop`)
    const allbuttons = [new MessageActionRow().addComponents([button_public_invite, button_support_dc, button_invite])]
    message.reply({
      embeds: [new MessageEmbed()
        .setColor(es.color)
        .setFooter(es.footertext + " | Sponsor: // | Code  'x10'  == -5%", es.footericon && (es.footericon.includes("http://") || es.footericon.includes("https://")) ? es.footericon : client.user.displayAvatarURL())
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/attachments/1115316768064405575/1123231340549116017/bleepbloop_logo_cropped.png")
        .setTitle(client.la[ls].cmds.info.developer.title)
        .setURL("https://discord.gg/pk8Ve68UEH")
        .setDescription(client.la[ls].cmds.info.developer.description)
      ],
      components: allbuttons
    }).catch(error => console.log(error));

  }
}