const Discord = require("discord.js");
module.exports = {
    name: "rules",
    category: "info",
    description: "Server Rules.",

    run: async (client, message, args) => {
        const ruleEmbed = new Discord.MessageEmbed()
        .setTitle('Server Rules')
        .setDescription('*If You Need Any Help Open Ticket*')
        .addField('[1] Don`t Advertise!', '`Example: Discord Servers, YouTube Videos, Twitch Channels`')
        .addField('[2] Don`t Spam!', '`Spamming includes zalgo, excessive caps/reaction spams, copy pastes, picture/link/GIF spam, reaction spam and walls of text.`')
        .addField('[3] ​​Don`t Post NSFW!', '`Not only you shouldn``t do this but, you also shouldn``t have any NSFW/Gore-ish Pfp/Nickname/Username`')
        .addField('[4] Don`t Ping Staff In The Ticket', '`Please don``t ping Staff we 100% watch Your ticket`')
        .addField('[5] Be Respectful!', '`There is zero tolerance for drama, racism, hate speech, or hatred towards any user. Negative remarks on other bots is also not tolerated.`')

        if (!args[0]) return message.channel.send(ruleEmbed);
    }
 }