const { Events, ActivityType } = require("discord.js");

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Logado como: ${client.user.tag}`);
        client.user.setActivity({
            name: "chorar é ação livre.",
            type: ActivityType.Playing
        })
    },
};