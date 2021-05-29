/**
 * UECE - EESDevOps t2 - Testes Ágeis - exercício 1
 * Author: Rodney Barreto <rwbarreto@gmail.com>
 */
const MyTestFramework = require('./MyTestFramework')
const Calculator = require('./Calculator')

console.log(`\n::::: Testes Unitários :::::`)

const sequenceA = [1,2,3,4,5,6,7,8,9,10,11]
const sequenceB = [1,4,6,8,9,10]
const sequenceC = []

const calc = new Calculator()

const tester = new MyTestFramework()
tester.assertEquals(calc.sumPrimeNumbers(sequenceA), 28, 'Deve somar apenas os números primos da sequencia A')
tester.assertEquals(calc.sumPrimeNumbers(sequenceB),  0, 'A sequencia B não deve possuir números primos')
tester.assertEquals(calc.sumPrimeNumbers(sequenceC),  0, 'A sequencia C, vazia, não deve possuir números primos')