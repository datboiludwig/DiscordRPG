import DiscordJS, {Intents} from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

import fs from 'fs'

const client = new DiscordJS.Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES
	]
})

client.on('ready', async () => {

	new WOKCommands(client, {
		commandsDir: path.join(__dirname, 'commands'),
		typeScript: true,
		testServers: ['929540223724036117'],
	});

})

client.login(process.env.TOKEN)