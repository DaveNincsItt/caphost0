const Discord = require("discord.js");
module.exports = {
    name: "embed",
    category: "fun",
    description: "Embed Say Command.",

    run: async (bot, message, args) => {
        const messageToSay = args.join(" ");
        const sayEmbed = new Discord.MessageEmbed()
         .setTitle(`${messageToSay}`)
         .setFooter(message.author.tag ,message.author.displayAvatarURL())
         .setColor("RANDOM")
         .setTimestamp();
    try {
        message.channel.send(sayEmbed);
    } catch (err) {
        console.log(err);
        message.channel.send('Im not able to say that message.');
      }
    }
} 