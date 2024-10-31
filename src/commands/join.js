const {SlashCommandBuilder} = require("discord.js");
const {joinVoiceChannel, getVoiceConnection, AudioPlayer} = require("@discordjs/voice");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("join")
        .setDescription("testes"),
    async execute(interaction)
    {
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3038134423.
        const connection = joinVoiceChannel({
            channelId: interaction.member.voice.channel.id,
            guildId: interaction.guild.id,
            adapterCreator: interaction.guild.voiceAdapterCreator,
        });

        connection = getVoiceConnection(interaction.guild.id);
        await interaction.reply("conectado");
        await setTimeout(resolve, 5000);
        await connection.subscribe("../src/assets/irra.mp3")
        await connection.destroy()
    },
};