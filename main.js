const { channel } = require("diagnostics_channel");
const { Client, Intents } = require("discord.js");
const fs = require('fs');
const config = require("./config.json");
// The Client and Intents are destructured from discord.js, since it exports an object by default. Read up on destructuring here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
client.login(config.token);


function main() {
    //Connect bot and confirm status ready
    client.on("ready", () => {
        console.log("I am ready!");
        
      });
    //On message check for commands --> Will be replaced with slash commands in future
    client.on("messageCreate", (message) => {
        if (!message.content.startsWith(config.prefix) || message.author.bot) return;
        if (message.content.startsWith(`${config.prefix}ping`)) {
            message.channel.send("pong!");
        }
        if (message.content.startsWith(`${config.prefix}userid`)) {
            let userId = message.author.id;
            message.channel.send(userId);
        }
        if (message.content.startsWith(`${config.prefix}channelid`)) {
            let channelId = message.channel.id;
            message.channel.send(channelId);
        }
        if (message.content.startsWith(`${config.prefix}myuser`)) {
            let userName = message.author;
            message.channel.send(`Your username is ${userName}`);
        }
        if (message.content.startsWith(`${config.prefix}emote`)) {
            message.channel.send(":grinning:");
        }
    })
}

main()

/*
Creating a section here for code
I might use a bunch but not sure

---> Commands
Used to remove prefix, remove whitespae at beginning and end, and split the string
const args = message.content.slice(prefix.length).trim().split(/ +/g);

Used to remove the command and send all values to lowercase
const command = args.shift().toLowerCase();
---


*/