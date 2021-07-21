module.exports = {
  name: "guess",
  description: "guessing between numbers game command",
  execute(message, args) {
     let randomInteger = ((min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    });
    
    let checker = ((fn,sn,tn) => {
       let randInt = randomInteger(fn,sn);
       let myInt = tn;
       if (randInt == myInt) {
         return "Вы угадали!";
       } else return "Вы не угадали! " +  "Ответ: " + ` ||${randInt}|| `;
    });
    
      if (args[2]) {
      	message.channel.send(checker(+args[0],+args[1],args[2]));
      } else message.channel.send("Введите числа корректно!");
  }
};