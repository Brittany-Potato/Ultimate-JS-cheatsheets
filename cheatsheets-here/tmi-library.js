//! tmi.js library

// tmi.js is a popular JavaScript library for creating chatbots and clients for Twitch. It's designed to connect to Twitch's IRC-based chat system using websockets, making it easy to send, 
// recieve, and react to chat messages in real time.

// tmi stands for Twitch Messaging Interface

//! Installation 

// npm install tmi.js

//! 1. Authentication 

// You will need:
// Twitch account for your bot
// An OAuth toke from https://twitchapps.com/tmi/

//! 2. Events

// tmi.js is event-driven. Some useful events:
// - message - Fired when someone sens a message in chat
// - connected - When the bot connects
// - join/part - when someone joins or leaves
// - subscription, resub, subgift, raid etc

//! 3. Client methods
// Once connected, the client has several methods you can use:
// - .say(channel, message) - sends a message
// - .join(channel) / .part(channel) - join/leave a channel
// - .disconnect() - Cleanly disconnects the bot 
// - .mods(channel) - Get list of mods in a channel

//! 4. Permissions and moderation

// You can check tags.mod, tags.badges, or tags['user-type] to identify mods, subs, vips etc

//! Basic example: Connecting and Logging messages

const tmi = require('tmi.js');

//Define configuration options
const opts = {
    identity: {
        username: 'YourBotUsername',
        password: 'oauth:your_token_here'
    },
    channels: [
        'channel_name'
    ]
};

// Create a client with our options
const client = new tmi.Client(opts);

// Register event handlers
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to twitch
client.connect();

// Called everytime a message come sin 
function onMessageHandler(channel, tags, message, self) {
    if (self) return; // ignores messages from the bot itself

    console.log(`${tags['display-name']}: ${message}`);

    if (message.toLowerCase() === '!hello') {
        client.say(channel, `@${tags['display-name']} Hello there!`);
    }
}

// Called when the bot successfully connects to twitch
function onConnectedHandler(addr, port) {
    console.log(`* Connect to ${addr}:${port}`);
}

//! Advanced Example: Handling commands

function onMessageHandler(channel, tags, message, self) {
    if (self) return;

    const command = message.trim();

    if (command === '!uptime') {
        client.say(channel, 'The sream has been live for 2 hours and 15 minutes!');
    } else if (command.startWith('!echo ')) {
        const text = command.slice(6);
        client.say(channel, `Echo: ${text}`);
    }
}