const {SlashCommandBuilder} = require("discord.js");
const {joinVoiceChannel, getVoiceConnection, createAudioPlayer, createAudioResource, AudioPlayerStatus} = require("@discordjs/voice");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("join")
    .setDescription("conecta ao canal de voz e diz: IIIIRRAAAAAA."),
    async execute(interaction)
    {
        if(!interaction.member.voice.channel)
            await interaction.reply("Conecte-se a um canal de voz antes de utilizar o comando **join**");
        else
        {
            await interaction.reply("conectado no canal de voz **" + interaction.member.voice.channel.name + "**");
            const player = createAudioPlayer()
            
            let resource = createAudioResource(`${__dirname}/../assets/irra.mp3`);
            // console.log(`diretório: ${process.cwd}`)
            //player.play(resource);
            await setTimeout(() => player.play(resource), 2000);


            const connection = joinVoiceChannel({
                channelId: interaction.member.voice.channel.id,
                guildId: interaction.guild.id,
                adapterCreator: interaction.guild.voiceAdapterCreator,
            });
            
            player.on(AudioPlayerStatus.Playing, () => {
                console.log('The audio player has started playing!');
            });
            player.on('error', (error) => {
                console.error(error);
            });
            
            player.on(AudioPlayerStatus.Idle, () => {
                console.log('The audio player has stopped playing!');
                connection.destroy()
            });
            connection.subscribe(player)
        }
    },
};