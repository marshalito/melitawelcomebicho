const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission("SEND_MESSAGES")) return
	if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply(":x: Permissões insuficientes.");
    
    var reason = message.content.split(" ").slice(1).join(" ");
    var role = message.guild.roles.find('name', 'FutureTechnology');
    const embed1 = new Discord.RichEmbed()
  .setDescription(`Atualmente a **FutureTechnology** possui ${message.guild.memberCount} membros. Obrigado por contribuir conosco! 👍`)
  .setColor(role.color)
  .setTimestamp()
  .setFooter(`Comando por: ${message.author.username}`, message.author.avatarURL)
  message.channel.send({embed: embed1}); 
}
module.exports.help = {
    name: "membros"
    }