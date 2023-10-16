#!/usr/bin/env node

const fs = require('fs');
const Table = require('cli-table3');
const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;


const displayMatches = (matches) => {
	const table = new Table({
		head: ['Match Number', 'Date', 'Location', 'Home Team', 'Away Team'],
	});

	matches.forEach(match => {
		table.push([match.MatchNumber, match.DateUtc, match.Location, match.HomeTeam, match.AwayTeam]);
	});

	console.log(table.toString());
};

const matches = async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	const command = process.argv[2] || '';

	try {
		const rawdata = fs.readFileSync('matches.json');
		const matches = JSON.parse(rawdata);

		if (command === 'today') {
			const today = new Date().toISOString().split('T')[0];
			const todayMatches = matches.filter(match => {
				const matchDateUtc = new Date(match.DateUtc).toISOString().split('T')[0];
				return matchDateUtc === today;
			});
			displayMatches(todayMatches);
		} 
		else if (command === 'all' || command === '') {
			displayMatches(matches);
		} 
		else if (command) {
			const countryMatches = matches.filter(match => {
				return match.HomeTeam.toLowerCase() === command.toLowerCase() || match.AwayTeam.toLowerCase() === command.toLowerCase();
			});
			displayMatches(countryMatches);
		} 
		else {
			console.log('Invalid command. Use "today" for today\'s matches, "CountryName" for specific country matches, or "all" for all matches.');
		}
	} 

	catch (error) {
		console.error('Error reading Cricket World Cup 2023 matches data:', error.message);
	}

};
matches();