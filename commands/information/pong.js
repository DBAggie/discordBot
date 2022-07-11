const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('node:timers/promises').setTimeout;
module.exports = {
	data: new SlashCommandBuilder()
		.setName('pong')
		.setDescription('Replies with Ping!'),
	async execute(interaction) {
		console.log('Hit the exectution of the ping');
		return await interaction.reply({content: "Ping!", ephemeral: true});
	},
};