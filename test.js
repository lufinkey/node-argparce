
const ArgParser = require('./');

var result = ArgParser.parse(process.argv.slice(2), {
	args: [
		{
			type: 'boolean',
			name: 'verbose',
			short: 'v'
		},
		{
			type: 'uinteger',
			name: 'request-timeout',
			default: 10000
		},
		{
			type: 'string',
			name: 'name'
		}
	],
	maxStrays: 2,
	stopAtError: true
});
console.log(result);
