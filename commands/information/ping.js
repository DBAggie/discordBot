const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('node:timers/promises').setTimeout;
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		//console.log('Hit the exectution of the pong');
		await interaction.defer({content: "Pong!", ephemeral: true});
	},
};