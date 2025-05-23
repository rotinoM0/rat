const {SlashCommandBuilder, EmbedBuilder, Colors} = require("discord.js");
const { execute } = require("./roll");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("init")
        .setDescription("cria uma ordem de iniciativa a partir de entradas separadas por vírgula (,). Exemplo: P1, P2, NPC1")
        .addStringOption(input => 
            input.setName("input")
            .setDescription("adicionar ordem")),
    async execute(interaction)
    { 
        const input = interaction.options.getString("input", true);
        var order = [];
        try {
            order = input.split(',');
            await interaction.reply({embeds: [embedOrder(order)]});
        } catch (error) {
            await interaction.reply("ocorreu um erro...");
            console.error(error);
            return;
        }
    }
}

function embedOrder(order)
{
    var embed = new EmbedBuilder()
    .setTitle("**Iniciativa**")
    .setColor(Colors.Blue)
    .setDescription("ordem da iniciativa")
    .setTimestamp()
    order.forEach(field => {
        embed.addFields({name: field.toString(), value: " ", inline: true});
    });
    return embed;
}