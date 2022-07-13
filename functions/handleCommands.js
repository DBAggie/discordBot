const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const config = require('../config.json');
const fs = require('node:fs');

module.exports = (client) => {
    //console.log('Hit handleCommands')
    client.handleCommands = async (commandFolders, path) => {
        client.commandArray = [];
        for (folder of commandFolders) {
            const commandFiles = fs.readdirSync(`${path}/${folder}`).filter(file => file.endsWith('.js'));
            for (const file of commandFiles) {
                const command = require(`../commands/${folder}/${file}`);
                console.log(`Current Command ${command.data.name}`);
                // Set a new item in the Collection
                // With the key as the command name and the value as the exported module
                client.commands.set(command.data.name, command);
                client.commandArray.push(command.data.toJSON());
            }
        }
        const rest = new REST({ version: '9' }).setToken(config.token);

        (async () => {
            try {
                console.log('Started refreshing application (/) commands.');

                await rest.put(
                    Routes.applicationGuildCommands(config.clientid, config.guildid),
                    { body: client.commandArray },
                );

                console.log('Successfully reloaded application (/) commands.');
            } catch (error) {
                console.error(error);
            }
        })();
    };
};