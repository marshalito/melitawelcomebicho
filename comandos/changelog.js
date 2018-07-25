const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return
    if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply(":x: Eu não tenho a permissão `ADMINISTATOR`, estão descarte este comando, ou ative!!!!");
    message.delete().catch(O_o=>{});
    if (!args[0]) {
        message.reply("**utilize:** !changelog <mensagem>.");
        return;
    };
    var args1 = message.content.split(" ").slice(1).join(" ");
    if (!args1) return message.reply("**digite:** !changelog para mais informações.");
    message.channel.send('@everyone').then(a=>a.delete(1));
    var role = message.guild.roles.find('name', 'FutureTechnology');
    const embed1 = new Discord.RichEmbed()
  .setAuthor('📜 Changelog')
  .setDescription(`${args1}`)
  .setColor(role.color)
  return message.channel.send({embed: embed1}); 
}
module.exports.help = {
    name: "changelog"
    }