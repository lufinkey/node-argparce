# argparce

An easy argument parser for nodejs

## Install

```bash
npm install --save argparce
```

## Usage

```javascript
const ArgParser = require('argparce');
```

### API Reference

#### ArgParser.parse(args, options)

- `args` [\<Array>] an array of arguments

- `options` [\<Object>]
	- `args` [\<Array>] an array of argument flag definitions
		- [\<Object>]
			- `type` [\<string>] The data type of the argument.
				- Valid types are `'string'`, `'integer'`, `'uinteger'`, `'float'`, `'ufloat'`, `'url'`.
			- `name` [\<string>] The full name of the argument.
				- Example: `'connect-timeout'` will create an argument named `--connect-timeout`
			- `short` [\<string>] The short name of the argument.
				- Example: `'v'` will create a short argument named `-v`
			- `default` \<Any> The default value of the argument
				- **Default** is `true` for `type='boolean'` arguments
				- **Default** is `undefined` for everything else
	- `maxStrays` [\<integer>] the maximum number of stray (not attached to flags) arguments allowed, or `-1` to allow an infinite amount. **Default:** `0`
	- `unmappedArgsDefault` [\<string>] the default behavior for handling unrecognized argument flags. **Default:** `null`
		- `null` unrecognized flags will cause an error
		- `'stray'` unrecognized flags will be added as stray arguments.
		- `'boolean'` unrecognized flags will be read as boolean arguments and added to `args` in the result
		- `'string'` unrecognized flags will be read as string arguments (in the form `--arg=<string>`)
	- `stopAtError` [\<boolean>] stop parsing when an error is encountered.
	- `stopIfTooManyStrays` [\<boolean>] stop parsing when a stray is encountered that can't be added due to `maxStrays`
	- `errorExitCode` [\<integer>] An exit code to exit with if errors occur during parsing, or `null` to not exit. **Default:** `null`
- Returns [\<Object>]
	- `args` [\<Object>] An object mapping of argument names to their values
	- `errors` [\<Array>] An array of string messages for errors that occurred during parsing.
	- `endIndex` [\<integer>] The `args` index where parsing stopped, or `args.length` if parsing completed without stopping
	- `strays` [\<Array>] An array of stray arguments. Stray arguments are command line parameters that didn't match any arguments defined in `options.args`. Array is empty by default unless `options` has some non-default values.





[\<boolean>]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type
[\<number>]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type
[\<integer>]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type
[\<string>]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type
[\<Object>]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[\<Array>]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[\<Function>]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[\<Promise>]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[\<Error>]: https://nodejs.org/api/errors.html#errors_class_error
