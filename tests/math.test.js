const math = require('../math')

test('soma 2 + 3 igual a 5', ()=>{
    expect(math.add(2,3)).toBe(5)
})
test('Subtração 3 - 3 igual a 0', ()=>{
    expect(math.subtract(3,3)).toBe(0)
})
test('Subtração 2 * 3 igual a 6', ()=>{
    expect(math.mutiply(2,3)).toBe(6)
})
test('Divisão 10 / 2 igual a 5', ()=>{
    expect(math.divide(10,2)).toBe(5)
})
