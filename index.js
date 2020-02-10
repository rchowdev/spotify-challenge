function largestUniqSetOfChar(p) {
	const charMap = {},
		res = [];

	//Character occurences
	for (let i = 0; i < p.length; i++) {
		let c = p[i];
		charMap[c] = (charMap[c] || 0) + 1;
	}

	//Sort characters by count
	const characters = Object.keys(charMap);
	const sortedChars = characters.sort((a, b) => {
		return charMap[a] - charMap[b];
	});

	let pLength = p.length;

	while (pLength >= 50) {
		let c = sortedChars.pop();
		pLength -= charMap[c];

		if (pLength >= 50) {
			res.push(c);
		} else {
			pLength += charMap[c];
		}
	}

	return res;
}

module.exports = largestUniqSetOfChar;
