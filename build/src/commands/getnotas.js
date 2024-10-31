const { SlashCommandBuilder } = require("discord.js");
const fs = require("node:fs");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("notas")
        .setDescription("listar suas notas"),
    async execute(interaction)
    {
        const conteudo = fs.readFile("./textos.json", err => {
            if (err)
                console.error(err);
            else{
                console.log("arquivo importado");
            }
        });
        const file = JSON.parse(conteudo);
        const fileVals = file[interaction.user.displayName];
        console.log(fileVals);
        await interaction.reply("não"); 
    }
}