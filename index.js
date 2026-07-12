const { 
  Client, 
  GatewayIntentBits, 
  Collection, 
  Partials 
} = require('discord.js');
const { token } = require('./config.json');
const evento = require('./handler/Events');

console.clear();
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.AutoModerationExecution,
  ],
  partials: [Partials.Message, Partials.Channel],
});

module.exports = client;

client.slashCommands = new Collection();

evento.run(client);
require('./handler/index')(client);

client.login(token).then(() => {
  console.log('Bot connected successfully.');
}).catch((err) => {
  console.error('Error connecting bot:', err);
});
