const calculadora = require("./calculadora")

test('somar um mais um é igual a dois', () => {
    expect(calculadora.somar(1, 1)).toBe(2)
  });

  test('subtrair dois menos um é igual a um', () => {
    expect(calculadora.subtrair(2, 1)).toBe(1)
  });

  test('multiplicar dois vezes um é igual a dois', () => {
    expect(calculadora.multiplicar(2, 1)).toBe(2)
  });

  test('dividir dois por dois é igual a dois', () => {
    expect(calculadora.dividir(2, 1)).toBe(2)
  });