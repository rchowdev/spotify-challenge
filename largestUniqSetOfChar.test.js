const largestUniqSetOfChar = require('./index.js');

const paragraph =
    'If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.';

test('should output the largest unique set of characters that can be removed from a paragraph without letting its length drop below 50', () => {
    expect(largestUniqSetOfChar(paragraph)).toEqual(['H', 'i', '!', ' ']);
});
