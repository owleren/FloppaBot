module.exports = {
    name: "roll",
    execute(message, args) {
        if (!args[1]) {
            message.channel.send("Пожалуйста введите цифры или вторую цифру!");
        } else {
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1) + min ); //The maximum is exclusive and the minimum is inclusive
            }
            const randomNumber = getRandomInt(args[0], args[1]);
            message.channel.send(randomNumber);
        }
    }
}
