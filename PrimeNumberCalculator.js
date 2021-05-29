/**
 * UECE - EESDevOps t2 - Testes Ágeis - exercício 1
 * Author: Rodney Barreto <rwbarreto@gmail.com>
 */
const Calculator = require('./Calculator')

console.log(`\n======= Calculadora de Números Primos =======`)

const sequenceA = [1,2,3,4,5,6,7,8,9,10,11]
const sequenceB = [1,4,6,8,9,10]

const calc = new Calculator()
const resultA = calc.sumPrimeNumbers(sequenceA)
const resultB = calc.sumPrimeNumbers(sequenceB)

console.log(`Sequencia A: ${JSON.stringify(sequenceA)}`)
console.log(`A soma dos números primos da sequencia A é: ${resultA}`)
console.log(`\nSequencia B: ${JSON.stringify(sequenceB)}`)
console.log(`A soma dos números primos da sequencia B é: ${resultB}`)
