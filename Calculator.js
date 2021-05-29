/**
 * UECE - EESDevOps t2 - Testes Ágeis - exercício 1
 * Author: Rodney Barreto <rwbarreto@gmail.com>
 */
class Calculator {
  
  constructor() {
  }

  isPrime(num) {
    if (typeof num !== 'number') {
      throw new TypeError('Parameter is not a number. Expected number value.')
    }
    
    if (num % 2 === 0 && num !== 2) {
      return false
    } 

    for (let i = 3, s = Math.sqrt(num); i <= s; i += 2) {
      if (num % i === 0) {
        return false; 
      } 
    }
    return num > 1;
  }

  sumPrimeNumbers(arr) {
    return arr.reduce(
      (acc, cur) => {
        if (this.isPrime(cur)) {
          return acc + cur
        }
        return acc + 0
      }, 
      0
    )
  }

}

module.exports = Calculator
