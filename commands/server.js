const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "server",
    description: "command, that shows info about server",
    execute(message) {
        const embed = new MessageEmbed() 
            .setTitle('Информация о сервере')
            .setColor('#c58c85')
            .setDescription(`Название сервера: ${message.guild.name} \n \nУчастников: ${message.guild.memberCount} \n \nСервер создан: ${message.guild.createdAt} \n \nБот присоединился: ${message.guild.joinedAt} \n \nПодтверждён ли сервер: ${message.guild.verified}`)
        message.channel.send(embed);
    }
}