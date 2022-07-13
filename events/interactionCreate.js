module.exports = {
    name: "interactionCreate",
    async execute(interaction, client) {
        console.log(`hit the interaction create script`);
        if (!interaction.isCommand()) return console.log("Not a valid command");
        const command = client.commands.get(interaction.commandName);
        if (!command) return;
        try {
            console.log("Trying to execute");
            await command.execute(interaction);
        } catch (error) {
            await interaction.reply({
                content: "There was an error while executing this command!",
                ephemeral: true,
            });
        }
        console.log("Below the catch");
    },
};