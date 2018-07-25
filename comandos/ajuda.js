const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission("SEND_MESSAGES")) return
	if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply("Permissões insuficientes.");
    
    var reason = message.content.split(" ").slice(1).join(" ");
    var role = message.guild.roles.find('name', 'FutureTechnology');
    const embed1 = new Discord.RichEmbed()
  .setDescription(`:white_small_square: **Site:** www.futuretechnology.com.br  
:white_small_square: **Comandos: **!sugerir e !membros.`)
  .setColor(role.color)
  .setTimestamp()
  .setFooter(`Comando por: ${message.author.username}`, message.author.avatarURL)
  message.member.send({embed: embed1}); 
}
module.exports.help = {
    name: "ajuda"
    }