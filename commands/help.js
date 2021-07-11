const { prefix } = require ("./config.json");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "help",
    description: "help command",
    execute(message) {
        const embed = new MessageEmbed()
            .setTitle(`Бот развивается, так что команд пока что мало \nПрефикс бота: ${prefix}`)
            .setColor('#c58c85')
            .setDescription("• floppa - показывает фотки каракал \n• server - показывает информацию о сервере \n• avatar - показывает аватарку\n• 8ball - отвечает на ваш вопрос да, или нет \n• fact - показывает рандомный факт о каракалах")
        message.channel.send(embed);      
    },
};