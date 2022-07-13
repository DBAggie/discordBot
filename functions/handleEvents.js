module.exports = (client) => {
    client.handleEvents = async (eventFiles, path) => {
        //console.log('Hit the handleEvents.js script')
        for (const file of eventFiles) {
            const event = require(`../events/${file}`);
            if (event.once) {
                client.once(event.name, (...args) => event.execute(...args, client));
                //console.log(`${event.name} handEvent if`);
            } else {
                client.on(event.name, (...args) => event.execute(...args, client));
                //console.log(`${event.name} handEvent else`);
            }
        }
    };
};