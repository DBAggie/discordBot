const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('node:timers/promises').setTimeout;
const startGame = async (user) => {
    console.log(user);
}
module.exports = {
    data: new SlashCommandBuilder()
        .setName('blackjack')
        .setDescription('This is a blackjack game under development'),
    async execute(interaction) {
        const startGame = async (interaction, getReply) => {
            await interaction.reply({content: `One moment while we set your user up`});
            const activeGames = new Map();
            const userTag = interaction.user.tag;
            const userId = interaction.user.id
            await wait(2000);
            activeGames.set(userId, userTag);
            await interaction.editReply({content: `Your user has just been added with an ID of ${userId} and a tag of ${userTag}`});
            console.log(activeGames);
        }
        const getReply = async () => {
            return await interaction.fetchReply()
        }
        startGame(interaction, getReply);
    },
};

