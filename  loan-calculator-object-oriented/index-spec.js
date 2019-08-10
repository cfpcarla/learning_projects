import LoanCalculator from "./loan-calculator.js"

describe('LoanCalculator', function() {
  const calculatorClass = LoanCalculator.LoanCalculator

  describe('Calculates monthly payment', function() {

    it('without an interest rate', function() {
      const calculator = new calculatorClass(120, 0, 1)
      expect(calculator.monthlyPayment()).toBe(10);
    })

    it('with an interest rate of 1%', function() {
      const calculator = new calculatorClass(120, 1, 1)
      expect(calculator.monthlyPayment()).toBe(10.05);
    })
  })
})

