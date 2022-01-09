import { ICommand } from 'wokcommands'
import fs from 'fs'

export default {
	category: 'Profile',
	description: 'Creates a new profile.',

	slash: true,
	testOnly: true,

	options: [
		{
			name: 'name',
			description: 'Your desired character name.',
			required: true,
			type: 3
		},
		{
			name: 'class',
			description: 'Your desired character class.'
			required: true,
			type: 3
		}
	],

	callback: ({ args, interaction }) => {
		const name = args[0];
		
		let validClass = 
		do {

		} while();

	},
} as ICommand