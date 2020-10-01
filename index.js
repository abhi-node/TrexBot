const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const command = require('./command')
const random = require('random')

client.on('ready', () => {
    console.log("The client is ready")

    command(client, ['hi', 'wassup'], message => {
        message.channel.send(`Hi ${message.author}`)
    })
    command(client, 'abouttrex', message => {
        message.channel.send('Trex is a 15 year old streamer trying to make it big. He enjoys playing Rainbow Six Siege, Rocket League and many other games. He loves interacting with his followers and subs and likes to keep a friendly community that is open to everyone')
    })
    command(client, 'mood', message => {
        if (random.float(min=0,max=1) > 0.45) {
            message.channel.send('I am feeling happy today! :smiley:')
        } else if (random.float > 0.2) {
            message.channel.send('I am feeling ok :neutral_face:')
        } else {
            message.channel.send('I am feeling sad :frowning2:')
        }
    })

})



client.login(config.token)