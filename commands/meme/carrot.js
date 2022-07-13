const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('node:timers/promises').setTimeout;
module.exports = {
	data: new SlashCommandBuilder()
		.setName('carrot')
		.setDescription('Gives you Steven Seagal sexually healing a carrot'),
	async execute(interaction) {
		//console.log('Hit the exectution of the pong');
		await interaction.reply({content: "https://www.youtube.com/watch?v=iyvbLtPpFW8"});
	},
};