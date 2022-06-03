const countEm = require('./foobar');

test('1. Check beginning of pattern is valid.', () => {
    expect(countEm(100)).toContain(' 1 2 Foo 4 Bar Foo 7 8 Foo Bar 11 Foo 13 14 FooBar');
})