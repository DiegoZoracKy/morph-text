/**
 * Recursively runs multiple replaces on String (text) based on a predefined rules defined as a parameter
 *
 * @param {String} str - Text to be replaced
 * @param {Object Literal}	replaces - { textToBeReplaced: newText, regExp: newText }
 * @return {String} Text replaced
 */
function morphText(str, replaces, flags) {
	if (str && replaces)
		for (var key in replaces)
			str = str.replace(new RegExp(key, flags || 'gi'), replaces[key]);

	return str;
}

if (typeof module != 'undefined' && module.exports)
	module.exports = morphText;