const ms = require("ms");

module.exports = {
  name: "remind",
  execute(message, args) {
    const remindMessage = args[0];
    const time = args[args.length - 1];
    const user = message.author;
    try {
      message.channel.send("Хорошо, отправлю!");
      setTimeout(() => {
        user.send(remindMessage);
      }, ms(time));
    } catch(e) {
      message.channel.send("Что-то пошло не так..");
    }
  }
};