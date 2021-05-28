const Discord = require("discord.js");
module.exports = {
    name: "ban",
    category: "moderation",
    description: "Ban Command.",

    run: async (bot, message, args) => {
      //PERMISSIONS
      if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have permission to do that.");
      if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("My role doesn't have BAN permission.");
      
      //VARIABLES
      let reason = args.slice(1).join(" ");
      const mentionedMember = message.mentions.members.first();

      //INPUT CHECKINGS
      if (!reason) reason = "No reason given"
      if (!args[0]) return message.channel.send('You must mention anyone to ban.');
      if (!mentionedMember) return message.channel.send('The user mentioned is not in the server.')
      if (!mentionedMember.bannable) return message.channel.send('I cant ban the user.')
      
    //EXECUTING
    const banEmbed = new Discord.MessageEmbed()
       .setTitle(`You have been banned from ${message.guild.name}`)
       .setDescription(`Reason: ${reason}`)
       .setColor("RANDOM")
       .setTimestamp();

       await mentionedMember.send(banEmbed).catch(err => console.log(err));
       await mentionedMember.ban({
       days: 7,
       reason: reason
        }).catch(err => console.log(err)).then(() => message.channel.send("Successfully banned" + mentionedMember.user.tag));

     //END!

    }
  }