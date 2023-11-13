#!/usr/bin/env node
const Table = require('cli-table3');
const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const chalk = require('chalk');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

const matchesData = [
  {
    "MatchNumber": 1,
    "RoundNumber": 1,
    "DateUtc": "2023-10-05 08:30:00Z",
    "Location": "Narendra Modi Stadium",
    "HomeTeam": "England",
    "AwayTeam": "New Zealand"
  },
  {
    "MatchNumber": 2,
    "RoundNumber": 1,
    "DateUtc": "2023-10-06 08:30:00Z",
    "Location": "Rajiv Gandhi International Stadium",
    "HomeTeam": "Pakistan",
    "AwayTeam": "Netherlands"
  },
  {
    "MatchNumber": 3,
    "RoundNumber": 1,
    "DateUtc": "2023-10-07 05:00:00Z",
    "Location": "Himachal Pradesh Cricket Association Stadium",
    "HomeTeam": "Bangladesh",
    "AwayTeam": "Afghanistan"
  },
  {
    "MatchNumber": 4,
    "RoundNumber": 1,
    "DateUtc": "2023-10-07 08:30:00Z",
    "Location": "Arun Jaitley Stadium",
    "HomeTeam": "South Africa",
    "AwayTeam": "Sri Lanka"
  },
  {
    "MatchNumber": 5,
    "RoundNumber": 1,
    "DateUtc": "2023-10-08 08:30:00Z",
    "Location": "MA Chidambaram Stadium",
    "HomeTeam": "India",
    "AwayTeam": "Australia"
  },
  {
    "MatchNumber": 6,
    "RoundNumber": 1,
    "DateUtc": "2023-10-09 08:30:00Z",
    "Location": "Rajiv Gandhi International Stadium",
    "HomeTeam": "New Zealand",
    "AwayTeam": "Netherlands"
  },
  {
    "MatchNumber": 7,
    "RoundNumber": 1,
    "DateUtc": "2023-10-10 05:00:00Z",
    "Location": "Himachal Pradesh Cricket Association Stadium",
    "HomeTeam": "England",
    "AwayTeam": "Bangladesh"
  },
  {
    "MatchNumber": 9,
    "RoundNumber": 1,
    "DateUtc": "2023-10-10 08:30:00Z",
    "Location": "Rajiv Gandhi International Stadium",
    "HomeTeam": "Pakistan",
    "AwayTeam": "Sri Lanka"
  },
  {
    "MatchNumber": 8,
    "RoundNumber": 1,
    "DateUtc": "2023-10-11 08:30:00Z",
    "Location": "Arun Jaitley Stadium",
    "HomeTeam": "India",
    "AwayTeam": "Afghanistan"
  },
  {
    "MatchNumber": 10,
    "RoundNumber": 2,
    "DateUtc": "2023-10-12 08:30:00Z",
    "Location": "BRSABVE Cricket Stadium",
    "HomeTeam": "Australia",
    "AwayTeam": "South Africa"
  },
  {
    "MatchNumber": 11,
    "RoundNumber": 2,
    "DateUtc": "2023-10-13 08:30:00Z",
    "Location": "MA Chidambaram Stadium",
    "HomeTeam": "New Zealand",
    "AwayTeam": "Bangladesh"
  },
  {
    "MatchNumber": 13,
    "RoundNumber": 2,
    "DateUtc": "2023-10-14 08:30:00Z",
    "Location": "Narendra Modi Stadium",
    "HomeTeam": "India",
    "AwayTeam": "Pakistan"
  },
  {
    "MatchNumber": 12,
    "RoundNumber": 2,
    "DateUtc": "2023-10-15 08:30:00Z",
    "Location": "Arun Jaitley Stadium",
    "HomeTeam": "England",
    "AwayTeam": "Afghanistan"
  },
  {
    "MatchNumber": 14,
    "RoundNumber": 2,
    "DateUtc": "2023-10-16 08:30:00Z",
    "Location": "BRSABVE Cricket Stadium",
    "HomeTeam": "Australia",
    "AwayTeam": "Sri Lanka"
  },
  {
    "MatchNumber": 15,
    "RoundNumber": 2,
    "DateUtc": "2023-10-17 08:30:00Z",
    "Location": "Himachal Pradesh Cricket Association Stadium",
    "HomeTeam": "South Africa",
    "AwayTeam": "Netherlands"
  },
  {
    "MatchNumber": 16,
    "RoundNumber": 2,
    "DateUtc": "2023-10-18 08:30:00Z",
    "Location": "MA Chidambaram Stadium",
    "HomeTeam": "New Zealand",
    "AwayTeam": "Afghanistan"
  },
  {
    "MatchNumber": 17,
    "RoundNumber": 2,
    "DateUtc": "2023-10-19 08:30:00Z",
    "Location": "MCA International Stadium",
    "HomeTeam": "India",
    "AwayTeam": "Bangladesh"
  },
  {
    "MatchNumber": 18,
    "RoundNumber": 3,
    "DateUtc": "2023-10-20 08:30:00Z",
    "Location": "M Chinnaswamy Stadium",
    "HomeTeam": "Australia",
    "AwayTeam": "Pakistan"
  },
  {
    "MatchNumber": 19,
    "RoundNumber": 3,
    "DateUtc": "2023-10-21 05:00:00Z",
    "Location": "BRSABVE Cricket Stadium",
    "HomeTeam": "Netherlands",
    "AwayTeam": "Sri Lanka"
  },
  {
    "MatchNumber": 20,
    "RoundNumber": 3,
    "DateUtc": "2023-10-21 08:30:00Z",
    "Location": "Wankhede Stadium",
    "HomeTeam": "England",
    "AwayTeam": "South Africa"
  },
  {
    "MatchNumber": 21,
    "RoundNumber": 3,
    "DateUtc": "2023-10-22 08:30:00Z",
    "Location": "Himachal Pradesh Cricket Association Stadium",
    "HomeTeam": "India",
    "AwayTeam": "New Zealand"
  },
  {
    "MatchNumber": 22,
    "RoundNumber": 3,
    "DateUtc": "2023-10-23 08:30:00Z",
    "Location": "MA Chidambaram Stadium",
    "HomeTeam": "Pakistan",
    "AwayTeam": "Afghanistan"
  },
  {
    "MatchNumber": 23,
    "RoundNumber": 3,
    "DateUtc": "2023-10-24 08:30:00Z",
    "Location": "Wankhede Stadium",
    "HomeTeam": "South Africa",
    "AwayTeam": "Bangladesh"
  },
  {
    "MatchNumber": 24,
    "RoundNumber": 3,
    "DateUtc": "2023-10-25 08:30:00Z",
    "Location": "Arun Jaitley Stadium",
    "HomeTeam": "Australia",
    "AwayTeam": "Netherlands"
  },
  {
    "MatchNumber": 25,
    "RoundNumber": 3,
    "DateUtc": "2023-10-26 08:30:00Z",
    "Location": "M Chinnaswamy Stadium",
    "HomeTeam": "England",
    "AwayTeam": "Sri Lanka"
  },
  {
    "MatchNumber": 26,
    "RoundNumber": 4,
    "DateUtc": "2023-10-27 08:30:00Z",
    "Location": "MA Chidambaram Stadium",
    "HomeTeam": "Pakistan",
    "AwayTeam": "South Africa"
  },
  {
    "MatchNumber": 27,
    "RoundNumber": 4,
    "DateUtc": "2023-10-28 05:00:00Z",
    "Location": "Himachal Pradesh Cricket Association Stadium",
    "HomeTeam": "Australia",
    "AwayTeam": "New Zealand"
  },
  {
    "MatchNumber": 28,
    "RoundNumber": 4,
    "DateUtc": "2023-10-28 08:30:00Z",
    "Location": "Eden Gardens",
    "HomeTeam": "Netherlands",
    "AwayTeam": "Bangladesh"
  },
  {
    "MatchNumber": 29,
    "RoundNumber": 4,
    "DateUtc": "2023-10-29 08:30:00Z",
    "Location": "BRSABVE Cricket Stadium",
    "HomeTeam": "India",
    "AwayTeam": "England"
  },
  {
    "MatchNumber": 30,
    "RoundNumber": 4,
    "DateUtc": "2023-10-30 08:30:00Z",
    "Location": "MCA International Stadium",
    "HomeTeam": "Afghanistan",
    "AwayTeam": "Sri Lanka"
  },
  {
    "MatchNumber": 31,
    "RoundNumber": 4,
    "DateUtc": "2023-10-31 08:30:00Z",
    "Location": "Eden Gardens",
    "HomeTeam": "Pakistan",
    "AwayTeam": "Bangladesh"
  },
  {
    "MatchNumber": 32,
    "RoundNumber": 4,
    "DateUtc": "2023-11-01 08:30:00Z",
    "Location": "MCA International Stadium",
    "HomeTeam": "New Zealand",
    "AwayTeam": "South Africa"
  },
  {
    "MatchNumber": 33,
    "RoundNumber": 4,
    "DateUtc": "2023-11-02 08:30:00Z",
    "Location": "Wankhede Stadium",
    "HomeTeam": "India",
    "AwayTeam": "Sri Lanka"
  },
  {
    "MatchNumber": 34,
    "RoundNumber": 4,
    "DateUtc": "2023-11-03 08:30:00Z",
    "Location": "BRSABVE Cricket Stadium",
    "HomeTeam": "Netherlands",
    "AwayTeam": "Afghanistan"
  },
  {
    "MatchNumber": 35,
    "RoundNumber": 5,
    "DateUtc": "2023-11-04 05:00:00Z",
    "Location": "M Chinnaswamy Stadium",
    "HomeTeam": "New Zealand",
    "AwayTeam": "Pakistan"
  },
  {
    "MatchNumber": 36,
    "RoundNumber": 5,
    "DateUtc": "2023-11-04 08:30:00Z",
    "Location": "Narendra Modi Stadium",
    "HomeTeam": "England",
    "AwayTeam": "Australia"
  },
  {
    "MatchNumber": 37,
    "RoundNumber": 5,
    "DateUtc": "2023-11-05 08:30:00Z",
    "Location": "Eden Gardens",
    "HomeTeam": "India",
    "AwayTeam": "South Africa"
  },
  {
    "MatchNumber": 38,
    "RoundNumber": 5,
    "DateUtc": "2023-11-06 08:30:00Z",
    "Location": "Arun Jaitley Stadium",
    "HomeTeam": "Bangladesh",
    "AwayTeam": "Sri Lanka"
  },
  {
    "MatchNumber": 39,
    "RoundNumber": 5,
    "DateUtc": "2023-11-07 08:30:00Z",
    "Location": "Wankhede Stadium",
    "HomeTeam": "Australia",
    "AwayTeam": "Afghanistan"
  },
  {
    "MatchNumber": 40,
    "RoundNumber": 5,
    "DateUtc": "2023-11-08 08:30:00Z",
    "Location": "MCA International Stadium",
    "HomeTeam": "England",
    "AwayTeam": "Netherlands"
  },
  {
    "MatchNumber": 41,
    "RoundNumber": 5,
    "DateUtc": "2023-11-09 08:30:00Z",
    "Location": "M Chinnaswamy Stadium",
    "HomeTeam": "New Zealand",
    "AwayTeam": "Sri Lanka"
  },
  {
    "MatchNumber": 42,
    "RoundNumber": 5,
    "DateUtc": "2023-11-10 08:30:00Z",
    "Location": "Narendra Modi Stadium",
    "HomeTeam": "South Africa",
    "AwayTeam": "Afghanistan"
  },
  {
    "MatchNumber": 44,
    "RoundNumber": 5,
    "DateUtc": "2023-11-11 05:00:00Z",
    "Location": "MCA International Stadium",
    "HomeTeam": "Australia",
    "AwayTeam": "Bangladesh"
  },
  {
    "MatchNumber": 45,
    "RoundNumber": 5,
    "DateUtc": "2023-11-11 08:30:00Z",
    "Location": "Eden Gardens",
    "HomeTeam": "England",
    "AwayTeam": "Pakistan"
  },
  {
    "MatchNumber": 43,
    "RoundNumber": 5,
    "DateUtc": "2023-11-12 08:30:00Z",
    "Location": "M Chinnaswamy Stadium",
    "HomeTeam": "India",
    "AwayTeam": "Netherlands"
  },
  {
    "MatchNumber": 46,
    "RoundNumber": 6,
    "DateUtc": "2023-11-15 08:30:00Z",
    "Location": "Wankhede Stadium",
    "HomeTeam": "India",
    "AwayTeam": "New Zealand"
  },
  {
    "MatchNumber": 47,
    "RoundNumber": 6,
    "DateUtc": "2023-11-16 08:30:00Z",
    "Location": "Eden Gardens",
    "HomeTeam": "South Africa",
    "AwayTeam": "Australia"
  },
  {
    "MatchNumber": 48,
    "RoundNumber": 7,
    "DateUtc": "2023-11-19 08:30:00Z",
    "Location": "Narendra Modi Stadium",
    "HomeTeam": "To be announced",
    "AwayTeam": "To be announced"
  }
]

const displayMatches = (matches) => {
	const table = new Table({
		head: [chalk.green('Match Number'), chalk.green('Date'), chalk.green('Location'), chalk.green('Home Team'), chalk.green('Away Team')],
	});

	matches.forEach(match => {
		table.push([match.MatchNumber, match.DateUtc, match.Location, match.HomeTeam, match.AwayTeam]);
	});

	console.log(table.toString());

	console.log();
	
	console.log(chalk.green('✔'), chalk.dim('Star the repo for updates → https://github.com/MoazIrfan/wc-cli'));

	console.log(chalk.blue('ℹ'), chalk.dim('Follow for more CLIs → https://twitter.com/MoazIrfan'));

	console.log();
};

const matches = async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	const command = process.argv[2] || '';

	try {
		if (command === 'today') {
			const today = new Date().toISOString().split('T')[0];
			const todayMatches = matchesData.filter(match => {
				const matchDateUtc = new Date(match.DateUtc).toISOString().split('T')[0];
				return matchDateUtc === today;
			});
			displayMatches(todayMatches);
		} 
		else if (command === 'all' || command === '') {
			displayMatches(matchesData);
		} 
		else if (command) {
			const countryMatches = matchesData.filter(match => {
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