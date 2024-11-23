const { SlashCommandBuilder } = require("discord.js");
const fs = require("node:fs");

let conteudo = {
    rotinoM: [{titulo: "texto"},]
};

module.exports = {
    data: new SlashCommandBuilder()
        .setName("addnota")
        .setDescription("permite criar e gerenciar notas diversas")
        .addStringOption(texto => 
            texto.setName("texto")
            .setDescription("texto para anotar")),
    async execute(interaction)
    {
        conteudo[interaction.user.displayName] += interaction.options.getString("texto");
        const json = JSON.stringify(conteudo);
        await interaction.reply("WIP");
        fs.writeFile("./textos.json", json, err => {
            if (err)
                console.error(err);
            else{
                console.log("arquivo salvo");
            }
        });
    }
    
}