const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  description: "bot invite command",
  execute(message) {
    const embed = new MessageEmbed()
      .setTitle("Нажми на меня, чтобы пригласить данного бота на другой сервер!")
      .setURL("https://discord.com/api/oauth2/authorize?client_id=861428742039273473&permissions=0&scope=bot")
      .setColor('#c58c85');
    message.channel.send(embed)
  },
  
}