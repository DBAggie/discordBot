const { channel } = require("diagnostics_channel");
const { Client, Intents } = require("discord.js");
require('dotenv').config()
// The Client and Intents are destructured from discord.js, since it exports an object by default. Read up on destructuring here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
client.login(process.env.TOKEN);
const prefix = ".";

function main() {
    client.on("ready", () => {
        console.log("I am ready!");
        
      });

    client.on("messageCreate", (message) => {
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        if (message.content.startsWith(`${prefix}ping`)) {
            message.channel.send("pong!");
        }
    })
}

main()