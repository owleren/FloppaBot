const { prefix } = require ("./config.json");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "help",
    description: "help command",
    execute(message) {
        const embed = new MessageEmbed()
            .setTitle(`Префикс бота: ${prefix}`)
            .setColor('#c58c85')
            .setDescription(`• floppa - показывает фотки каракал 
            \n• server - показывает информацию о сервере 
            \n• avatar [айди(можно без него)] - показывает аватарку
            \n• 8ball [вопрос] - отвечает на ваш вопрос
            \n• fact - показывает рандомный факт о каракалах
            \n• roll [число1 число2] - показывает рандомное число между двумя введеными числами
            \n• guess [число1 число2 число3] - генерирует между первыми двумя введеными числами рандомное число, третьим числом вы угадываете это число
            \n• invite - отправляет ссылку-приглашение данного бота на другой сервер
            \n• vote - отправляет ссылку для голосования за данного бота`);
        message.channel.send(embed);  
    },
};