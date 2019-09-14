const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login("NjIyMjA5ODYwOTEzODU2NTIz.XXzywg.b7VAH7-87OHuFmLZJbONAT31u-8");//BOT_TOKEN is the Client Secret
