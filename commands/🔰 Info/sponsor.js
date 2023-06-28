const {
  MessageEmbed
} = require("discord.js")
const config = require(`${process.cwd()}/botconfig/config.json`)
var ee = require(`${process.cwd()}/botconfig/embed.json`)
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const {
  swap_pages2
} = require(`${process.cwd()}/handlers/functions`);
module.exports = {
  name: "sponsor",
  category: "🔰 Info",
  aliases: ["sponsors"],
  description: "Shows the sponsor of this BOT",
  usage: "sponsor",
  type: "bot",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    let embed1 = new MessageEmbed()
      .setColor(es.color)
      .setTitle(eval(client.la[ls]["cmds"]["info"]["sponsor"]["variable1"]))
      .setURL("soon")
      .setDescription(eval(client.la[ls]["cmds"]["info"]["sponsor"]["variable2"]))
      .setImage("//")
      .setFooter(client.getFooter("SPONSOR-NAME | Code 'soon' == -X%", "https://i.imgur.com/fUFZPwj.png"))
    let embed2 = new MessageEmbed()
      .setColor(es.color)
      .setTimestamp()
      .setFooter(client.getFooter("SPONSOR-NAME | Code 'soon' == -X%", 'https://i.imgur.com/fUFZPwj.png'))
      .setImage("//")
      .setTitle(eval(client.la[ls]["cmds"]["info"]["sponsor"]["variable3"]))
      .setURL("linkhere")
      .setDescription(eval(client.la[ls]["cmds"]["info"]["sponsor"]["variable4"]));
    swap_pages2(client, message, [embed1, embed2])

  }
}

