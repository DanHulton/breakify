/**
 * Break a promise and return its value or error to the provided callback.
 *
 * @param {Promise} promise - The promise to break.
 * @param {Function} callback - The callback to pass the value or error to.
 */
function breakify(promise, callback)
{
	promise.then((value) => {
		callback(null, value);
	// If there's an error, first run the callback to continue the original error logic
	}).catch((err) => {
		callback(err);
	// Then catch it again and log it to console to prevent unhandled promise rejections.
	}).catch((err) => {
		console.log(err);
	})
}

module.exports = breakify;