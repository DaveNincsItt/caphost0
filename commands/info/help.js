const Discord = require("discord.js");
module.exports = {
    name: "help",
    category: "info",
    description: "Help Command.",

    run: async (client, message, args) => {
        const sectionEmbed = new Discord.MessageEmbed()
        .setTitle('Help Section')
        .setDescription('Use `+help` <sectionName> to access another section. \n**+help info**\n**+help moderation**\n**+help fun**\n')
        .addField('Fun Commands', 'Commands that all users can use for fun.')
        .addField('Moderation Commands', 'Commands that are for moderation.')
        .addField('Information Commands', 'Commands that return some important information.')
        .setFooter(client.user.tag, client.user.displayAvatarURL ());

    const infoEmbed = new Discord.MessageEmbed()
    .setTitle('Information Commands.')
    .addField('+ping', 'Get bot ping.')
    .addField('+serverinfo', 'Info about the server.')
    .addField('+userinfo <User ID>', 'Info about the user')


    const funEmbed = new Discord.MessageEmbed()
    .setTitle('Fun Commands.')
    .addField('+embed <text>', 'The Bot say Your text in embed.')
    .addField('+meme', 'Get a random Meme. [CURRENTY DOESN`T WORK]')
    .addField('+anime <anime name>', 'It shows description, ratings and total episodes of the anime.')
    .addField('+weather <country or city name>', 'Weather of the country/city.')


    const moderationEmbed = new Discord.MessageEmbed()
    .setTitle('Moderation Commands.')
    .addField('+ban @Username <reason>', 'Ban a member.')
    .addField('+kick @Username <reason>', 'Kick a member.')
    .addField('+purge <amount>', 'Delete an amount of messages.')


    if (!args[0]) return message.channel.send(sectionEmbed);
    if (args[0] == 'info') return message.channel.send(infoEmbed);
    else if (args[0] == 'fun') return message.channel.send(funEmbed);
    else if (args[0] == 'moderation') return message.channel.send(moderationEmbed);

     }
    }