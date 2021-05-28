const Discord = require("discord.js");
module.exports = {
    name: "kick",
    category: "Moderator",
    description: "Kick Command.",
    run: async (bot, message, args) => {
        let prefix = "!"

            if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You Doesn't Have Permission to do that!")
            let kick_user = message.mentions.members.first();
            if(args[0] && kick_user){
    
                if(args[1]){
    
                    let KickEmbed = new Discord.MessageEmbed()
                    .setTitle("KICK")
                    .setColor("RED")
                    .setDescription(`**Kicked By:** ${message.author.tag}\n**Kicked:** ${kick_user.user.tag}\n**Kick Reason:** ${args.slice(1).join(" ")}`)
    
                message.channel.send(KickEmbed);
    
                    kick_user.kick(args.slice(1).join(" "));
    
                } else {
                let parancsEmbed = new Discord.MessageEmbed()
                .setTitle("Usage:")
                .addField(`\`${prefix}kick <@Username> [Reason]\``, "˘˘˘")
                .setColor("BLUE")
                .setDescription("ERROR: Please Give A Reason!!")
    
                message.channel.send(parancsEmbed);
                }
    
            } else {
                let parancsEmbed = new Discord.MessageEmbed()
                .setTitle("Usage:")
                .addField(`\`${prefix}kick <@Username> [Reason]\``, "˘˘˘")
                .setColor("BLUE")
                .setDescription("ERROR: Please Mention Anyone!")
    
                message.channel.send(parancsEmbed);
    
            }
        
    }
}