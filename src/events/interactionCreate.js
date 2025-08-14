const { Events } = require("discord.js");

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if(!interaction.isChatInputCommand()) return;

        const command = interaction.client.commands.get(interaction.commandName);

        if(!command) {
            console.log("comando inexistente");
            return;
        }
        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            if (interaction.replied || interaction.deferred)
                await interaction.followUp({content: "erro executando comando."});
            else{
                await interaction.followUp("erro executando comando...");
            }
        }
    },
}