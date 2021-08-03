const txt2png = require("text2png");
const fs = require("fs");
const randomWords = require('random-words');

module.exports = {
name: "fasttype",
execute(message, args) {
  try {
    const client = message.client;
    const words = randomWords(15).join('\n');
    const filter = m => m.author.id != client.user.id;
    fs.writeFileSync("sth.png", txt2png(words, { 
      color: 'teal',
      font: '30px Futura',
      color: 'black',
      localFontPath: 'commands/fonts/futur.ttf',
      localFontName: 'Futura',
      backgroundColor: 'linen',
      lineSpacing: 10,
      padding: 20,
    }));
    message.channel.send('Введите данные слова через пробелы за 30 секунд, чтобы победить! \nЕсли вы хотите закончить игру преждевременно, напишите "стоп"', { files: ['./sth.png']});
    let collector = message.channel.createMessageCollector(filter, { time: 30000});
    collector.on("collect", message => {
      if(message.content.toLowerCase() === words.split('\n').join(" ")) {
        message.channel.send("Вы победили!");
        collector.stop();
      } else if(message.content.toLowerCase() === "стоп") {
        collector.stop();
      } else {
        message.channel.send("Неправильно!");
      }
    });
    collector.on("end", collected => {
      message.channel.send("Игра окончена!");
    });
  } catch(e) {
    message.channel.send("Что-то пошло не так..");
    console.log(e);
    }
 }
};