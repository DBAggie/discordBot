const { Client, Intents, Collection } = require("discord.js");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');
const config = require("./config.json");
// The Client and Intents are destructured from discord.js, since it exports an object by default. Read up on destructuring here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.commands = new Collection();

//Get commands, functions, & events
const functions = fs.readdirSync(`./functions`).filter(file => file.endsWith(`.js`));
const commandFolders = fs.readdirSync(`./commands`);
const eventFiles = fs.readdirSync(`./events`).filter(file => file.endsWith(`.js`));


(async () => {
    console.log('Hit the main.js async function')
    for(file of functions) {
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./events");
    client.handleCommands(commandFolders, "./commands");
    client.login(config.token);
})();
