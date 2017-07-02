# breakify
The opposite of promisify.

Seems silly, right?  Except if you're in the middle of converting a project from callbacks to promises and you don't want to try to convert a few hundred files at once, some functions will still have to return their values through callbacks despite it being promises from there on down.

## Usage

```
const breakify  = require('breakify');

function callbackFunction(callback) {
	const wrapper = async () => {
		const someFunctionAsync = promisify(someFunction);
		const value = await someFunctionAsync();

		if (value === 0) {
			throw new Error("You can't have 0, don't you know that?");
		}

		return value;
	}

	breakify(wrapper(), callback);
}
```

If your `promiseReturningFunction` returns a value, callback is called as `callback(null, value)`, and if it throws an error, it is called as `callback(err)`.