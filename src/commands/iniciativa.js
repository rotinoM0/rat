const {SlashCommandBuilder, EmbedBuilder, Colors, time} = require("discord.js");
// const { execute } = require("./roll");

const nums = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣'];

module.exports = {
    data: new SlashCommandBuilder()
    .setName("init")
        .setDescription("cria uma ordem de iniciativa a partir de entradas separadas por vírgula (,). Exemplo: P1, P2, NPC1")
        .addStringOption(input => 
            input.setName("input")
            .setDescription("adicionar ordem")
            .setRequired(true)),
    async execute(interaction)
    { 
        const input = interaction.options.getString("input", true);
        var order = [];
        try {
            order = input.split(',');
            await interaction.reply("**Gerando Iniciativa**");
            await message(interaction, order);

        } catch (error) {
            await interaction.followUp("ocorreu um erro...");
            console.error(error);
            return;
        }
    }
}

function embedOrder(order)
{
    var embed = new EmbedBuilder()
    .setTitle("**Iniciativa**")
    .setColor(Colors.Blue)
    .setDescription("ordem da iniciativa")
    .setTimestamp()
    order.forEach((field, idx) => {
        embed.addFields({name: (idx + 1).toString(), value: field.toString(), inline: false});
    });
    return embed;
}

async function collectReactions(interaction, msg, order)
{
    try {
        const filter = (reaction, user) => {
            return !user.bot && nums.includes(reaction.emoji.name);
        };
    
        const collected = await msg.awaitReactions({ filter, max: 1, time: (3600*1000), errors: ["time"] });
    
        const reacted = collected.first();
        if (reacted && nums.includes(reacted.emoji.name)) {
            order.splice(nums.indexOf(reacted.emoji.name), 1);
            // msg.edit({embeds: [embedOrder(order)], fetchReply: true});
            await message(interaction, order);
            
        }
        else {
            console.log();
            msg.edit("asda");
            return;
        }
    } catch (error){
        console.error(error);
        
        msg = await msg.edit("**⚠️ Time Out ⚠️**");
        return;
    }
}


async function message(interaction, order) 
{
    const msg = await interaction.followUp({embeds: [embedOrder(order)], fetchReply: true});
    await reactions(interaction, msg, order);
}

async function reactions(interaction, msg, order) 
{
    await order.forEach((i, idx) => {
        msg.react(nums[idx]);
    });

    await collectReactions(interaction, msg, order);
}