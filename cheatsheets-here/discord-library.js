//! Discord.js library

//! 1. Client

// Main class for interacting with the Discord API.
// First section of code:
const { Client } = require('discord.js');
// const client = new Client();
// Key responsibilities:
// - Logging into Discord (client.login(token))
// - emitting events (messageCreate, ready etc)
// - Accessing chaches (guids/server, channels, users etc)

//! 2. Events

// Common Events
// Triggered by the DIscord API and using .on() or .once()
// Examples:
// - ready : Fired when the bot is connected and ready
// - messageCreate : Fired when a new message is sent in a etxt channel
// - integrationCreate : Fired when an interaction (slash command, button etc) is recieved
// - guildMemberAdd : Fired when a user joins a server.
client.on('ready', () => {
    console.log(`logged in as ${client.user.tag}`);
});

//! 3. Structures

// Class = Represents

// Guild = A discord server
// GuildMember = A user in a specific guild
// User = A discord user
// Message = A message created in a channel
// Channel = A generic channel
// TextChannel = A text-based channel
// VoiceChannel = A voice channel
// Role = A role within a guild
// Interaction = A user interaction

//! 4. Managers

// Managers are responsible for caching and interacting with Discords API for specfic resource types

// GuildManager = Access and manage servers
// ChannelManager = Access and manage channels
// MessageManager = Send, edit and delete messages
// UserManager = Fetch or resolve user data
// InteractionManager = Handles slash commands, buttons etc
// Example:
client.guilds.cache.forEach(guild => console.log(guild.name));

//! 5. Intents

// Specify what types of events your bot wants to recieve

const { GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});
// Choosing the right intents is crucial for performance and privacy

//! 6. Interactions
// Slash commands, Buttons, Select menus etc
// Discords modern way to talkw ith bots without message parsing
// Key classes:
// - CommandInteraction
// - ButtonInteraction
// - ModalSubmitInteraction
// - SelectMenuInteraction

client.on('interactionCreate', interaction => {
    if (interaction.isCommand()) {
        if (interaction.commandName === 'ping') {
            interaction.reply('pong');
        }
    }
});

//! 7. Builders
// Available with @discord/builders package
// Helps define application commands easier.

const { SlashCommandBuilder } = require('@discordjs/builders');

const command = new SlashCommandBuilder()
.setName('ping')
.setDescription('Replies with poing!');

//! 8. REST API (REST module)
// For sending direst HTTP requests to Discords REST API (When not using cached managers)
// Used for:
// Registering slash commands and sending raw API requests.

const { REST } = require('@discordjs/rest');

//! 9. Collectors 
// Collectors listen for a specific kind of interaction over time.
// Types:
// - MessageCollector
// - InteractionCollector
// - ReactionCollector
// Used to gather user input like responses or button clicks

const collector = MessageChannel.channel.CreateMessageCollector({ time:15000 });
collector.on('collect', m => console.log('Collected: ${m.content'));

//! 10. Permissions and Bitfields
// Used to control what your bot or users can do
const { PermissionBitField } = require('discord.js');

if (!member.permissions.has(PermissionBitField.Flags.ManageMessages)) {
    return MessageChannel.reply(`You don't have permission!`);
}

//! 11. Voice support
// Via @discordjs/voice - Allows bots to join voice channels, play audio etc

//! Extra information

//! .ENV

// - DISCORD_TOKEN = your discord bot token
// - CLIENT_ID = your client id
// - PUBLIC_KEY = your public key

// GUILD_ID = your test server id (for testing slash commands in a single server)

// API_KEY = API keys or external tokens

// Bot configuration settings
// BOT_PREFIX = !
// LOG_CHANNEL_ID = 
// DEBUG_MODE = true

// Add your .env file to a .gitignore file