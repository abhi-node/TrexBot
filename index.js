const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const command = require('./command')

client.on('ready', () => {
    console.log("The client is ready")
})

command(client, 'hi', message => {
    message.channel.send(`Hi ${message.author}`)
})

client.login(config.token)