const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const command = require('./command')
const random = require('random')

client.on('ready', () => {
    console.log("The client is ready")

    client.user.setPresence({
        activity: {
            name: 'Trex\'s stream',
            type: 'WATCHING',
        }
    })

    command(client, ['hi', 'wassup'], message => {
        message.channel.send(`Hi ${message.author}`)
    })
    command(client, 'abouttrex', message => {
        message.channel.send('Trex is a 15 year old streamer trying to make it big. He enjoys playing Rainbow Six Siege, Rocket League and many other games. He loves interacting with his followers and subs and likes to keep a friendly community that is open to everyone')
    })
    command(client, 'mood', message => {
        const randomFloat = random.float(min=0,max=1)
        if (randomFloat > 0.45) {
            message.channel.send('I am feeling happy today! :smiley:')
        } else if (randomFloat > 0.2) {
            message.channel.send('I am feeling ok :neutral_face:')
        } else if (randomFloat > 0.01) {
            message.channel.send('I am feeling sad :frowning2:')
        } else {
            message.channel.send('I AM SO SADDDDD :sob::sob::sob:')
        }
    })
    command(client, '**cc', message => {
        if (message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.messages.fetch().then(results => {
                message.channel.bulkDelete(results)
            })
        }
    })
    command(client, ['bf','boyfriend'], message => {
        if ((random.float(min=0,max=1) > 0.75 && !(message.author.username === 'sooohie')) || message.author.username === 'abhi' || message.author.username === 'TrexxxxxMix' || message.author.username === 'sigma' || message.author.username === 'Collingswoodkm') {
            message.channel.send(`${message.author} hi baby :smiling_face_with_3_hearts::smiling_face_with_3_hearts:`)
        } else {
            message.channel.send(`${message.author} we aren't dating :rolling_eyes:`)
        }
    })
    client.on('message', message => {
        if (message.author.username === 'WeaklierName') {
            message.channel.send(`Happy Birthday ${message.author}!`)
        }
    })
})



client.login(config.token)