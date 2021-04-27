const example = require('./index');

describe('function texto', () => {
    test('is the same string', () => {
        expect(example.texto('text')).toBe('text');
    });
    test('should be falsy', () => {
        expect(example.texto()).toBeFalsy();
    })
})

describe('function suma', () => {
    test('adds 2 + 6 to equal 8', () => {
        expect(example.suma(2, 6)).toBe(8);
    });
    test('adds 2 + (-3) not equal to 0', () => {
        expect(example.suma(2, -3)).not.toBe(0);
    });
    test('two strings equal to one string', () => {
        expect(example.suma('hi ', 'world')).toBe('hi world');
    })
})

describe('function resta', () => {
    test('subtract 8 - 6 to equal 2', () => {
        expect(example.resta(8, 6)).toBe(2);
    });
    test('subtract sumandos are defined', () => {
        expect(example.resta(3, 4)).toBeDefined();
    })
})

describe('function multiplicacion', () => {
    test('multiply 2 * 3 to equal 6', () => {
        expect(example.multiplicacion(2, 3)).toBe(6);
    });
    test('multiply -3 * 4 not equal to -13', () => {
        expect(example.multiplicacion(-3, 4)).not.toEqual(-13);
    })
})

describe('function division', () => {
    test('divide 6 / 3 to equal 2', () => {
        expect(example.division(6, 3)).toBe(2);
    });
    test('cannot divide 6 by 0', () => {
        expect(example.division(6, 0)).toBe("No se puede dividir por 0");
    });
    test('divide 9 / 4 close to 2.25', () => {
        expect(example.division(9, 4)).toBeCloseTo(2.25);
    });
})

describe('function tablaMultiplicar', () => {
    test('result is not null', () => {
        expect(example.tablaMultiplicar(3, 4)).not.toBeNull();
    });
    test('multiplicador equal to 10 when is undefined', () => {
        expect(example.tablaMultiplicar(3)).toEqual([0,3,6,9,12,15,18,21,24,27,30]);
    });
    test('multiplicando is 3 and multiplicador is 6', () => {
        expect(example.tablaMultiplicar(3,6)).toEqual([0,3,6,9,12,15,18]);
    });
    test('length of array is 4 when multiplicador is 3', () => {
        expect(example.tablaMultiplicar(2,3)).toHaveLength(4);
    });
    test('object result not equal to array type', () => {
        expect(example.tablaMultiplicar(2,0)).not.toStrictEqual({table: ['0']});
    })
})

describe('function potencia', () => {
    test('2^4 to equal 16', () => {
        expect(example.potencia(2, 4)).toBe(16);
    });
    test('7^2 to be less or equal than 49', () => {
        expect(example.potencia(7, 2)).toBeLessThanOrEqual(49);
    });
    test('3^3 to be greater or equal than 30', () => {
        expect(example.potencia(3, 3)).toBeGreaterThan(25);
    });
    test('0^3 equal to zero is false', () => {
        expect(example.potencia(0, 3)).toBeFalsy();
    })
})

describe('function anidada', () => {
    test('2*2 + 3*3 to equal 13', () => {
        expect(example.anidada(2, 3)).toBe(13);
    });
    test('square of two numbers', () => {
        expect(example.anidada(1, 5)).toBeTruthy();
    })
})

describe('function cerosLeft', () => {
    test('3 with 4 ceros on the left to equal 00003', () => {
        expect(example.cerosIzq(3, 5)).toBe("00003");
    });
    test('same number with total length equal to a text string', () => {
        expect(example.cerosIzq(45, "hi")).toBe("45");
    });
    test('45 with 3 ceros on the left to equal 00045 with total length equal to a number string', () => {
        expect(example.cerosIzq(45, "5")).toEqual("00045");
    })
})