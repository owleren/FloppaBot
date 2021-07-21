const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "avatar",
    description: "avatar command",
    execute(message) {
        const user = message.mentions.users.first() || message.author
        const embed = new MessageEmbed()
            .setTitle(user.tag)
            .setColor('#c58c85')
            .setImage(user.displayAvatarURL({ dynamic: true, size: 1024 }))
        message.channel.send(embed)
    }
};