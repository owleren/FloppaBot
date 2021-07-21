module.exports = {
    name: "8ball",
    description: "8ball command",
    execute(message, args) {
        if (!args.length) {
            message.channel.send("Пожалуйста, введите вопрос");
        } else {
            const argsLow = args.map(question => question.toLowerCase());
            if (argsLow.includes("как") || argsLow.includes("каков") || argsLow.includes("какова")) {
                let answers = [
                    "Отлично!",
                    "Ужасно!",
                    "Мерзко!",
                    "Замечательно!",
                ];
                const randomAnswer = Math.floor(Math.random() * answers.length);
                message.channel.send(answers[randomAnswer]);
            } else if (argsLow.includes("какой")) {
                let answers = [
                    "Обычный",
                    "Отличный",
                    "Какой-то",
                    "Плохой",
                ];
                const randomAnswer = Math.floor(Math.random() * answers.length);
                message.channel.send(answers[randomAnswer]);
            } else if (argsLow.includes("кто")) {
                let answers = [
                    "Ты!",
                    "Человек ниже!",
                    "Ну уж точно не я!",
                    "Конечно же я!",
                    "Догадайся",
                ];
                const randomAnswer = Math.floor(Math.random() * answers.length);
                message.channel.send(answers[randomAnswer]);
            } else if (argsLow.includes("чей")) {
                const answers = [
                    "Твой!",
                    "Человека ниже!",
                    "Ну уж точно не мой!",
                    "Конечно же мой!",
                    "Догадайся",
                ];
                const randomAnswer = Math.floor(Math.random() * answers.length);
                message.channel.send(answers[randomAnswer]);
            } else if(argsLow.includes("кому")) {
                let answers = [
                    "Тебе!",
                    "Человеку ниже!",
                    "Ну уж точно не мне!",
                    "Конечно же мне!",
                    "Догадайся",
                ];
                const randomAnswer = Math.floor(Math.random() * answers.length);
                message.channel.send(answers[randomAnswer]);
            } else if(argsLow.includes("почему")) {
                let answers = [
                "А потому!",
                "Потому что путин",
                "И правда, почему? :thinking:",
                ];
                const randomAnswer = Math.floor(Math.random() * answers.length);
                message.channel.send(answers[randomAnswer]);
            }
            else {
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