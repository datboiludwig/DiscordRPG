import { ICommand } from 'wokcommands'

export default {
	category: 'Math',
	description: 'adds two numbers',

	slash: true,
	testOnly: true,

	minArgs: 2,
	expectedArgs: '<num1> <num2>',

	callback: ({args, interaction}) => {
		let sum = parseInt(args[0]) + parseInt(args[1]);

		return `${sum}`;
	}
} as ICommand