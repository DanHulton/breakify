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
	}).catch((err) => {
		callback(err);
	});
}

module.exports = breakify;