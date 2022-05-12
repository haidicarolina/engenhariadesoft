const sum = require('./sum');
const soma = require('./app.component');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('teste 1', () => {
    expect(soma(1,2).toBe(3));
})