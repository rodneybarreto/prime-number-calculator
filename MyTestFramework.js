/**
 * UECE - EESDevOps t2 - Testes Ágeis - exercício 1
 * Author: Rodney Barreto <rwbarreto@gmail.com>
 */
class MyTestFramework {

  constructor() {
  }

  assertEquals(paramToTest, expectedResult, message) {
    if (typeof paramToTest !== 'number' || typeof expectedResult !== 'number') {
      throw new TypeError('Parameter is not a number. Expected number value.')
    }
    console.log(`${message}: ${(paramToTest === expectedResult)}`)
  }

}

module.exports = MyTestFramework
