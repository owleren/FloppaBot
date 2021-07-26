module.exports = {
  name: "roulette",
  execute(message) {
    const roulette = ["win", 2, 3, 4, 5, 6, 7, 8, 9];
    const chance = Math.floor(Math.random() * roulette.length);
    if(roulette[chance] == "win") {
      message.channel.send("Вы берёте пистолет, нажимаете на курок и ****выживаете****!");
    }
    else {
      message.channel.send("Вы берёте пистолет, нажимаете на курок и ****умираете****!");
    }
  }
};