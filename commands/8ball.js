module.exports = {
    name: "8ball",
    description: "8ball command",
    execute(message, args) {
        if (!args.length) {
            message.channel.send("Пожалуйста, введите вопрос");
        } else {
            if (args[0].toLowerCase() === "как") {
                let answers = [
                    "Отлично!",
                    "Ужасно!",
                    "Мерзко!",
                    "Замечательно!",
                ];
                const randomAnswer = Math.floor(Math.random() * answers.length);
                message.channel.send(answers[randomAnswer]);
            } else if (args[0].toLowerCase() === "какой") {
                let answers = [
                    "Обычный",
                    "Отличный",
                    "Какой-то",
                    "Плохой",
                ];
                const randomAnswer = Math.floor(Math.random() * answers.length);
                message.channel.send(answers[randomAnswer]);
            } else if (args[0].toLowerCase() === "кто") {
                let answers = [
                    "Ты!",
                    "Человек ниже!",
                    "Ну уж точно не я!",
                    "Конечно же я!",
                    "Догадайся",
                ];
                const randomAnswer = Math.floor(Math.random() * answers.length);
                message.channel.send(answers[randomAnswer]);
            } else if (args[0].toLowerCase() === "чей") {
                const answers = [
                    "Твой!",
                    "Человека ниже!",
                    "Ну уж точно не мой!",
                    "Конечно же мой!",
                    "Догадайся",
                ];
                const randomAnswer = Math.floor(Math.random() * answers.length);
                message.channel.send(answers[randomAnswer]);
            }
            else if (args[0].toLowerCase().startsWith("каков")) {
                let answers = [
                    "Отлично!",
                    "Ужасно!",
                    "Мерзко!",
                    "Замечательно!",
                ];
                const randomAnswer = Math.floor(Math.random() * answers.length);
                message.channel.send(answers[randomAnswer]);
            } else {
                    let answers = [
                        "Голоса подсказывают мне, что ответ ****да****",
                        "Что-то мне подсказывает, что ответ ****нет****",
                    ];
                    const randomAnswer = Math.floor(Math.random() * answers.length);
                    message.channel.send(answers[randomAnswer]);

                }
            }
        },
    };