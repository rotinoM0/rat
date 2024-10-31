const {SlashCommandBuilder} = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("roll")
        .setDescription("rola um dado")
        .addIntegerOption(dados => 
            dados.setName("dados")
            .setDescription("quantidade de dados a ser rolado!"))
        .addIntegerOption(faces => 
            faces.setName("faces")
            .setDescription("número de faces dos dados"))
        .addIntegerOption(mod => 
            mod.setName("mod")
            .setDescription("adicionar modificador")),
    async execute(interaction)
    {
        const dados = interaction.options.getInteger("dados") || 1;
        const faces = interaction.options.getInteger("faces") || 20;
        const mod = interaction.options.getInteger("mod");
        
        if (dados < 1 || faces < 2 || dados >= 200 || faces >= 2000)
        {
            await interaction.reply("**limites:** \n dados: 1 - 200 \n faces: 2 - 2000");
            return;
        }
        
        var random = Math.ceil(Math.random() * faces);
        var results = [];
        var response = "";
        if(dados != 1)
        {
            for(var i= 0; i < dados; i++)
            {
                random = Math.ceil(Math.random() * faces);
                results.push(random)
            }
            var total = 0;
            for(const val of results)
            {
                total += val
            }
                mod ? response = `<@${interaction.user.id}> \n **Resultado:** ${dados}d${faces} (${results})${mod<0 ? mod : "+" + mod} \n **Total:** ${total + mod}`
                    : response = `<@${interaction.user.id}> \n **Resultado:** ${dados}d${faces} (${results}) \n **Total:** ${total + mod}`;
        }
        else
        {
        mod ? response = `<@${interaction.user.id}> \n **Resultado:** 1d${faces}${mod<0 ? mod : "+" + mod} \n **Total:** ${random + mod}`
            : response = `<@${interaction.user.id}> \n **Resultado:** 1d${faces} \n **Total:** ${random.toString()}`;
        }
        return interaction.reply(response);
    },
};