import { ICommand } from 'wokcommands'
import fs from 'fs'

import { classInfo } from '../db/classes';
import profile from './profile';

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
			description: 'Your desired character class.',
			required: true,
			type: 3
		}
	],

	callback: async ({ args, interaction }) => {
		const name = args[0];
		const characterClass = args[1];

		let validClass = false;
		for(let i = 0; i < 6; i++) {
			if(characterClass.toLowerCase() === classInfo.classNames[i]) {
				validClass = true;
				break;
			}
		}
		if(validClass === false) {
			interaction.reply({
				content: "Please enter a valid character class. These include: 'Mage', 'Assassin', 'Ranger', 'Fighter', 'Barbarian' and 'Monk'.",
				ephemeral: true
			})
			return;
		}

		let profiles = JSON.parse(fs.readFileSync('db/profiles.json').toString());

		if(profiles.hasOwnProperty(interaction.user.id)) {
			interaction.reply({
				content: "You have already created a profile. Type '/profile' to view your profile.",
				ephemeral: true
			})
			return;
		}


		let profile = {
			name: name,
			class: characterClass,
			lvl: 1,
			exp: 0,
			str: JSON.parse(JSON.stringify(classInfo.classAttributes))[characterClass.toLowerCase()].str,
			dex: JSON.parse(JSON.stringify(classInfo.classAttributes))[characterClass.toLowerCase()].dex,
			int: JSON.parse(JSON.stringify(classInfo.classAttributes))[characterClass.toLowerCase()].int,
			life: 50 + JSON.parse(JSON.stringify(classInfo.classAttributes))[characterClass.toLowerCase()].str/2,
			phys_res: 0,
			fire_res: 0,
			cold_res: 0,
			light_res: 0,
			chaos_res: 0,
		};

		profiles[interaction.user.id] = profile;

		fs.writeFileSync('db/profiles.json', JSON.stringify(profiles));

		interaction.reply({
			content: "Your character has been created. Type '/profile' to view your profile.",
			ephemeral: true
		})
		return;
	},
} as ICommand