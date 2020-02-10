const largestUniqSetOfChar = require('./index.js');

const paragraph = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccd ';

test('should output the largest unique set of characters that can be removed from a paragraph without letting its length drop below 50', () => {
	expect(largestUniqSetOfChar(paragraph).sort()).toEqual(
		['b', 'c', 'd', ' '].sort()
	);
});

test('should output empty array from a paragraph with length < 50', () => {
	expect(largestUniqSetOfChar('aaa')).toEqual([]);
});
