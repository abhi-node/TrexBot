const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const command = require('./command')

client.on('ready', () => {
    console.log("The client is ready")

    command(client, ['hi', 'wassup'], message => {
        message.channel.send(`Hi ${message.author}`)
    })
    command(client, 'abouttrex', message => {
        message.channel.send('Trex is a 15 year old streamer trying to make it big. He enjoys playing Rainbow Six Siege, Rocket League and many other games. He loves interacting with his followers and subs and likes to keep a friendly community that is open to everyone')
    })
})



client.login(config.token)