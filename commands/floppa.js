const { MessageAttachment } = require("discord.js");

module.exports = {
    name: "floppa",
    execute(message) {
        let attachments = [
            new MessageAttachment("https://i.imgur.com/soMDsnh.jpg"),
            new MessageAttachment("https://i.imgur.com/QpaoQCg.png"),
            new MessageAttachment("https://i.imgur.com/t1zDjXc.jpg"),
            new MessageAttachment("https://i.imgur.com/dpdlz9s.png"),
            new MessageAttachment("https://i.imgur.com/20Ste12.png"),
            new MessageAttachment("https://i.imgur.com/5NsHW7X.jpg"),
            new MessageAttachment("https://i.imgur.com/smXJFHf.jpg"),
            new MessageAttachment("https://i.imgur.com/SoF847H.jpg"),
            new MessageAttachment("https://i.imgur.com/jJLGl3Q.jpg"),
            new MessageAttachment("https://i.imgur.com/roXQKPi.jpg"),
            new MessageAttachment("https://i.imgur.com/hciBXSJ.jpg"),
            new MessageAttachment("https://i.imgur.com/v3y7MxX.jpg"),
            new MessageAttachment("https://i.imgur.com/wslZ6vH.jpg"),
            new MessageAttachment("https://i.imgur.com/UyTcbyl.jpg"),
        ];
        const randomAtt = Math.floor(Math.random() * attachments.length);
        message.channel.send(attachments[randomAtt]);
    },
};