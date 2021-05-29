const assert = require('chai').assert
const Calculator = require('./Calculator')

describe('Prime Numbers', function(){

  describe('Test 1', function(){
    it('Deve somar apenas os números primos da sequência', function(){
      const calc = new Calculator()
      assert.equal(calc.sumPrimeNumbers([1,2,3,4,5,6,7,8,9,10,11]), 28)
    })
  })

  describe('Test 2', function() {
    it('A sequência não deve possuir números primos', function(){
      const calc = new Calculator()
      assert.equal(calc.sumPrimeNumbers([1,4,6,8,9,10]), 0)
    })
  })
  
})