const example = require('./index');

test('same string', () => {
    expect(example.texto('text')).toBe('text');
})

test('adds 2+6 to equal 8', () => {
    expect(example.suma(2, 6)).toBe(8);
})

test('subtract 8 - 6 to equal 2', () => {
    expect(example.resta(8, 6)).toBe(2);
})

test('multiply 2 * 3 to equel 6', () => {
    expect(example.multiplicacion(2, 3)).toBe(6);
})

test('divide 6 / 3 to equal 2', () => {
    expect(example.division(6, 3)).toBe(2);
})

test('cannot divide 6 by 0', () => {
    expect(example.division(6, 0)).toBe("No se puede dividir por 0");
})

test('multiplicador is undefined equal to 10', () => {
    expect(example.tablaMultiplicar(3)).toEqual([0,3,6,9,12,15,18,21,24,27,30]);
})

test('multiplicando is 3 and multiplicador is 6', () => {
    expect(example.tablaMultiplicar(3,6)).toEqual([0,3,6,9,12,15,18]);
})

test('2^4 to equal 16', () => {
    expect(example.potencia(2, 4)).toBe(16);
})

test('2*2 + 3*3 to equal 13', () => {
    expect(example.anidada(2, 3)).toBe(13);
})

test('3 with 4 ceros on the left to equal 00003', () => {
    expect(example.cerosIzq(3, 5)).toBe("00003");
})
