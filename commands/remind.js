const ms = require("ms");

module.exports = {
  name: "remind",
  execute(message, args) {
    const remindMessage = args.slice(0, -1);
    const time = args[args.length - 1];
    try {
      message.channel.send("Хорошо, отправлю!");
      setTimeout(() => {
        message.reply(remindMessage.join(" "));
      }, ms(time));
    } catch(e) {
      message.channel.send("Что-то пошло не так..");
    }
  }
};