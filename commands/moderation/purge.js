const Discord = require("discord.js");
module.exports = {
    name: "purge",
    category: "moderation",
    description: "Purge Command.",

    run: async (bot, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You cannot use this command.');
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I don`t have permission.");
        if (!args[0]) return message.channel.send("You must state a number of messages.");
        const amonutToDelete = Number(args[0], 10);

        if (isNaN(amonutToDelete)) return message.channel.send("Number stated is not a valid number.");
        if (!Number.isInteger(amonutToDelete)) return message.channel.send("Number stated must to be a whole number.");
        if (!amonutToDelete || amonutToDelete <2 || amonutToDelete > 100) return message.channel.send('The number stated must be between 2 and 100');
        const fetched = await message.channel.messages.fetch({
            limit: amonutToDelete
        });

        try {
         await message.channel.bulkDelete(fetched)
          .then(messages => message.channel.send(`Successfully deleted ${messages.size} messages!`));
        } catch (err) {
            console.log(err);
            message.channel.send(`I was unable to delete the amount stated make sure they are within 14 days old.`);
        }
    }
}