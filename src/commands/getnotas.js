const { SlashCommandBuilder } = require("discord.js");
const fs = require("node:fs").promises;

module.exports = {
    data: new SlashCommandBuilder()
        .setName("notas")
        .setDescription("listar suas notas"),
    async execute(interaction)
    {
        const file = await fs.readFile("./textos.json");
        
        const conteudo = await JSON.parse(file);
        console.log(conteudo);
        await interaction.reply("WIP Comando indisponível"); 
    }
}