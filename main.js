const { channel } = require("diagnostics_channel");
const { Client, Intents } = require("discord.js");
require('dotenv').config()
const config = require("./config.json");
// The Client and Intents are destructured from discord.js, since it exports an object by default. Read up on destructuring here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
client.login(config.token);


function main() {
    client.on("ready", () => {
        console.log("I am ready!");
        
      });

    client.on("messageCreate", (message) => {
        if (!message.content.startsWith(config.prefix) || message.author.bot) return;
        if (message.content.startsWith(`${config.prefix}ping`)) {
            message.channel.send("pong!");
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