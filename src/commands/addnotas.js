const { SlashCommandBuilder } = require("discord.js");
const fs = require("node:fs");

//estrutura "conteudo" = {user: [{titulo: "", texto: ""}]}
let conteudo = {
};

module.exports = {
    data: new SlashCommandBuilder()
        .setName("addnota")
        .setDescription("permite criar e gerenciar notas diversas")
        .addStringOption(titulo => 
            titulo.setName("titulo")
            .setDescription("titulo da nota")
            .setRequired(true)
        )
        .addStringOption(texto => 
            texto.setName("texto")
            .setDescription("texto para anotar"))
            .setRequired(true),
    async execute(interaction)
    {
        const userName = interaction.user.displayName;
        if(!conteudo[userName])
        {
            conteudo[userName] = [];
        }
        conteudo[userName].push({
            titulo: interaction.options.getString("titulo", true), 

            texto: interaction.options.getString("texto", false)
    });
        
        const json = JSON.stringify(conteudo);
        await interaction.reply("WIP");
        console.log(conteudo)
        fs.writeFile("./textos.json", json, err => {
            if (err)
                console.error(err);
            else{
                console.log("arquivo exportado");
            }
        });
    }
    
}