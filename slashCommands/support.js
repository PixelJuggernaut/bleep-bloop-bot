const {
  MessageEmbed, MessageActionRow
} = require("discord.js");
const config = require(`${process.cwd()}/botconfig/config.json`);
var ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const { MessageButton } = require('discord.js')
module.exports = {
  name: "support",
  description: "Sends you the Support Server Link",
  run: async (client, interaction, cmduser, es, ls, prefix, player, message) => {
    //things u can directly access in an interaction!
    const { member, channelId, guildId, applicationId, commandName, deferred, replied, ephemeral, options, id, createdTimestamp } = interaction; 
    const { guild } = member;
    
    
    try {
      let button_public_invite = new MessageButton().setStyle('LINK').setLabel('Invite Public Bot').setURL("https://discord.com/oauth2/authorize?client_id=915323367177982012&scope=bot+applications.commands&permissions=1374891928950")
      let button_support_dc = new MessageButton().setStyle('LINK').setLabel('Support Server').setURL("https://discord.gg/pk8Ve68UEH")
      let button_invite = new MessageButton().setStyle('LINK').setLabel('Invite this Bot').setURL(`https://discord.com/oauth2/authorize?client_id=915323367177982012&scope=bot+applications.commands&permissions=1374891928950`)
      //array of all buttons
      const allbuttons = [new MessageActionRow().addComponents([button_public_invite, button_support_dc, button_invite])]
      interaction.reply({ephemeral: true, 
        embeds: [new MessageEmbed()
          .setColor(ee.color)
          .setTitle(client.la[ls].cmds.info.support.title)
          .setDescription(eval(client.la[ls]["cmds"]["info"]["support"]["variable1"]))
          .setFooter(client.user.username  + ' | coded by Psycho006Develop', 'https://imgur.com/')
          .setURL("https://discord.com/oauth2/authorize?client_id=915323367177982012&scope=bot+applications.commands&permissions=1374891928950")],
        components: allbuttons
      });
    } catch (e) {
      console.log(String(e.stack).grey.bgRed)
      return message.reply({embeds: [new MessageEmbed()
        .setColor(es.wrongcolor)
        .setFooter(client.getFooter(es))
        .setTitle(client.la[ls].common.erroroccur)
        .setDescription(eval(client.la[ls]["cmds"]["info"]["color"]["variable2"]))
      ]});
    }
  }
};
