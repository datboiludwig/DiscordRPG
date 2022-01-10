import {ICommand} from 'wokcommands'
import fs from 'fs'
import { MessageEmbed } from 'discord.js';

export default {
    category: 'Profile',
    description: 'Displays your profile',

    slash: true,
    testOnly: true,

    callback: async ({interaction}) => {
        let profile = JSON.parse(fs.readFileSync('db/profiles.json').toString())[interaction.user.id];

        let embed = new MessageEmbed()
            .setTitle(`${interaction.user.username}'s Profile`)
            .setDescription(
                'Name: ' + profile.name.toString() + '\n' +
                'Class: ' + profile.class.toString() +'\n' +
                'Level: ' + profile.lvl.toString() +'\n' +
                'Experience: ' + profile.exp.toString() +'\n' +
                'Strength: ' + profile.str.toString() +'\n' +
                'Dexterity: ' + profile.dex.toString() +'\n' +
                'Intelligence: ' + profile.int.toString() +'\n' +
                'Maximum Life: ' + profile.life.toString() +'\n' +
                'Physical Resistance: ' + profile.phys_res.toString() +'\n' +
                'Fire Resistance: ' + profile.fire_res.toString() +'\n' +
                'Cold Resistance: ' + profile.cold_res.toString() +'\n' +
                'Lightning Resistance: ' + profile.light_res.toString() +'\n' +
                'Chaos Resistance: ' + profile.chaos_res.toString()
            )
        ;

        return embed;
    }
} as ICommand