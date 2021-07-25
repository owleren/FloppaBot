const ms = require("ms");

module.exports = {
  name: "remind",
  execute(message, args) {
<<<<<<< HEAD
    const remindMessage = args.slice(0, -1);
    const time = args[args.length - 1];
    try {
      message.channel.send("Хорошо, отправлю!");
      setTimeout(() => {
        message.reply(remindMessage.join(" "));
=======
    const remindMessage = args[0];
    const time = args[args.length - 1];
    const user = message.author;
    try {
      message.channel.send("Хорошо, отправлю!");
      setTimeout(() => {
        user.send(remindMessage);
>>>>>>> f8d5260a94d985304af5c8f6036ad84b00b52129
      }, ms(time));
    } catch(e) {
      message.channel.send("Что-то пошло не так..");
    }
  }
};