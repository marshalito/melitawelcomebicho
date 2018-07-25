const Discord = require("discord.js");
module.exports.run = async(client, message, args) => {
        await message.author.createDM();
        message.author.send(":bulb: Maravilha, você deseja contribuir conosco enviando sua sugestão, certo? Ok, diga-nos qual é a sua ideia. :bulb:");
        var tazer = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 1000 * 50, max: 1 });
        tazer.on('collect', r=> {
            let sugestao = r.content;
            message.author.send("Interessante, porém, queremos saber o motivo que ela deveria ser aceita e implementada. Explique-nos detalhadamente.");
            var tazer2 = message.author.dmChannel.createMessageCollector(b=>b.author.id == message.author.id,  { time: 1000 * 60, max: 1 });
            tazer2.on('collect', r2=> {
                let motivo = r2.content;
                const reportplayer = new Discord.RichEmbed()
                .setDescription(`**Criador:** ${message.author.username}
**Ideia:** ${sugestao}
**Motivo da implementação:** ${motivo}`)
                let canal = message.guild.channels.find("name", 'sugestões')
                if (!canal) return message.channel.send("Crie um canal para que o membro " + message.author.username + " possa fazer um report!");
                canal.send({ embed: reportplayer });
                message.author.send("✅ Parabéns, sua sugestão foi arquivada em nosso sistema e estará sob análise da nossa equipe de Diretoria. Você pode visualizar sua sugestão entrando no chat **#sugestões**.")
            })
        })
}
module.exports.help = {
    name: "sugerir"
}