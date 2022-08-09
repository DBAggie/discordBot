const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js')
const wait = require('node:timers/promises').setTimeout;
module.exports = {
    data: new SlashCommandBuilder()
        .setName('blackjack')
        .setDescription('This is a blackjack game under development'),
    async execute(interaction) {
        const startGame = async (interaction) => {
            await interaction.reply({ content: `One moment while we set your user up` });
            const userTag = interaction.user.tag;
            const userId = interaction.user.id
            await wait(2000);
            await interaction.editReply({ content: `Your user has just been added with an ID of ${userId} and a tag of ${userTag}` });
            //await interaction.editReply({ embeds: [gameEmbed] });



            function gameLoop() {

            }

            const newGame = (interaction,) => {
                const embed = createEmbed(activeGames.has(interaction.user.id), playerHand);
                interaction.edit({ embeds: [embed] });

                gameLoop();
            }

            const getDeck = () => {
                var cardSuits = ["spades", "diamonds", "clubs", "hearts"];
                var cardNames = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

                let deck = new Array();

                for (let i = 0; i < cardSuits.length; i++) {
                    for (let j = 0; x < cardNames.length; j++) {
                        let card = `${cardNames[j]}-${cardSuits[i]}`;
                        deck.push(card);
                    }
                }
                return deck;
            }

            const getCard = () => {
                return Math.floor(Math.random() * 52);
            }


            const createEmbed = () => {
                console.log(playerHand[0].Name);
                if (active) {
                    const gameEmbed = new MessageEmbed()
                        .setColor('#808080')
                        .setTitle('Blackjack!')
                        .setDescription('This is a blackjack game')
                        .addFields(
                            { name: 'The dealer has:', value: 'Two cards will be given', inline: false },
                            { name: '\u200b', value: '\u200b', inline: false },
                            { name: 'The player has: ', value: `You have a  and a `, inline: false },
                        )
                        .setTimestamp()
                        .setFooter({ text: 'Enjoy!' });

                    return gameEmbed;
                }
                else {
                    const gameEmbed = new MessageEmbed()
                        .setColor('#808080')
                        .setTitle('Blackjack!')
                        .setDescription('This is a blackjack game')
                        .addFields(
                            { name: 'The dealer has:', value: 'Two cards will be given', inline: false },
                            { name: '\u200b', value: '\u200b', inline: false },
                            { name: 'The player has: ', value: ``, inline: false },
                        )
                        .setTimestamp()
                        .setFooter({ text: 'Enjoy!' });

                    return gameEmbed;
                }
            }
        }
    },
};
