const { Events } = require("discord.js");
const { once } = require("nodemon");

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Logado como: ${client.user.tag}`);
    },
};