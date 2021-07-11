module.exports = {
    name: "8ball",
    description: "8ball command",
    execute(message, args) {
        if(!args.length) {
            message.channel.send("Пожалуйста, введите вопрос");
        }
        else {
            let answers = [
            "Голоса подсказывают мне, что ответ ****да****",
            "Что-то мне подсказывает, что ответ ****нет****",
            ];
            const randomAnswer = Math.floor(Math.random() * answers.length);
            message.channel.send(answers[randomAnswer]);
        }
    },
};