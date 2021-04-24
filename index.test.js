// const sum = require('./index');

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });

// test('adds 1 + 2 + 3 to equal 6', () => {
//     expect(sum(1, 2, 3)).toBe(6);
// });

const example = require('./index');

test('return same string', () => {
    expect(example.texto('text')).toBe('text');
})

test('return 8 for add 2 + 6', () => {
    expect(example.suma(2, 6)).toBe(8);
})

test('return 2 for subtract 8 - 6', () => {
    expect(example.resta(8, 6)).toBe(2);
})

test('return 6 for multiply 2 * 3', () => {
    expect(example.multiplicacion(2, 3)).toBe(6);
})

test('return 2 for divide 6 / 3', () => {
    expect(example.division(6, 3)).toBe(2);
})

test('return ERROR for divide 6 / 0', () => {
    expect(example.division(6, 0)).toBe("No se puede dividir por 0");
})

// test('return ERROR if multiplicador is undefined', () => {
//     expect(example.tablaMultiplicar(3)).toBe([0,3,6,9,12,15,18,21,24,27,30]);
// })

// test('return ERROR if multiplicador is undefined', () => {
//     expect(example.tablaMultiplicar(3,6)).toBe([0,3,6,9,12,15,18]);
// })

test('return 16 for 2^4', () => {
    expect(example.potencia(2, 4)).toBe(16);
})

test('return 13 for 2*2 + 3*3', () => {
    expect(example.anidada(2, 3)).toBe(13);
})

test('return 00003 for 3 with 4 ceros on the left', () => {
    expect(example.cerosIzq(3, 5)).toBe("00003");
})
