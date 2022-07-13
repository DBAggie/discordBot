const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('node:timers/promises').setTimeout;
module.exports = {
	data: new SlashCommandBuilder()
		.setName('cheese')
		.setDescription('Gives you cheese'),
	async execute(interaction) {
		//console.log('Hit the exectution of the pong');
		await interaction.reply({content: "https://www.youtube.com/watch?v=SyimUCBIo6c!"});
	},
};