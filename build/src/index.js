//https://discord.com/oauth2/authorize?client_id=894965508166795304&permissions=8&scope=bot+applications.commands

const fs = require("node:fs");
const path = require("node:path");
const {token} = require("./config.json");

const {Client, GatewayIntentBits, Collection} = require("discord.js");
const { REST, Routes } = require("discord.js");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildVoiceStates,
    ],
});

const commands = [];

client.commands = new Collection();

const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));
for(const file of commandFiles)
{
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if('data' in command && 'execute' in command){
        client.commands.set(command.data.name, command);
        commands.push(command.data.toJSON());
    }
    else
        console.log(`COMANDO ${command} NÃO POSSUI 'data' OU 'execute'!!!`);
}

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith(".js"));
for (file of eventFiles)
    {
        const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if(event.once)
        client.once(event.name, (...args) => event.execute(...args))
    else
        client.on(event.name, (...args) => event.execute(...args));
}

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
    try {
        console.log("registrando comandos...");
        await rest.put(Routes.applicationCommands("894965508166795304"), {body: commands});
        console.log("sucesso");
    } catch (error) {
        console.error(error);
    }
})();

client.login(token);