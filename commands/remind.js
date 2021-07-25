const ms = require("ms");

module.exports = {
  name: "remind",
  execute(message, args) {
    const remindMessage = args[0];
    const time = args[1];
    const user = message.author;
    message.channel.send("Хорошо, отправлю!");
    setTimeout(() => {
      user.send(remindMessage);
    }, ms(time));
  }
};