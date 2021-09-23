const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

// function test() {
//     throw new Error('you are using the wrong JDK');
// }

// test('compiling android goes as expected', () => {
//     expect(() => test()).toThrow('you are using the wrong JDK');
// });