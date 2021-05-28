const Discord = require("discord.js");
module.exports = {
    name: "unban",
    category: "moderation",
    description: "UnBan Command.",

    run: async (bot, message, args) => {
         //PERMISSIONS
      if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have permission to do that.");
      if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("My role doesn't have UNBAN permission.");
      
      //VARIABLES
      let reason = args.slice(1).join(" ");
    let userID = args[0];

      //INPUT CHECKINGS
      if (!reason) reason = "No reason given"
      if (!args[0]) return message.channel.send('You must state anyone to unban.');
      if (!isNaN(args[0])) return message.channel.send('The ID stated is Not a number.')
      
    //EXECUTING
     message.guild.fetchBans().then(async bans => {
         if (bans.size == 0) return message.channel.send('This server does not anyone banned.')
         let bUser = bans.find(b => b.user.id == userID);
         if (!bUser) return message.channel.send('This user ID stated is Not banned.');
         await message.guild.members.unban(bUser.user, reason).catch(err => {
             console.log(err);
             return message.channel.send('Something went wrong Unbanning the User.')
         }).then (() => {
            message.channel.send(`Successfully Unbanned ${arg[0]}`)
         });
     });
      
     //END!

    }
  }
