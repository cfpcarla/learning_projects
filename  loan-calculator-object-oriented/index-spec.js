import LoanCalculator from "./loan-calculator.js"

describe('LoanCalculator', function () {
  const calculatorClass = LoanCalculator.LoanCalculator

  describe('Calculates monthly payment', function () {
    it('without an interest rate', function () {
      const calculator = new calculatorClass(120, 0, 1)
      expect(calculator.monthlyPayment()).toBe(10)
    })

    it('with an interest rate of 1%', function () {
      const calculator = new calculatorClass(120, 1, 1)
      expect(calculator.monthlyPayment()).toBeCloseTo(10.05, 2)
    })
  })

  describe('Calculates Total payment', function () {
    it('With interest rate of 5%', function () {
      const calculator = new calculatorClass(120, 5, 1)
      expect(calculator.totalPayment()).toBeCloseTo(123.27, 2)
    })
  })

  describe('Calculates total interest amount', function() {
    it('with interest rate of 5%', function() {
      const calculator = new calculatorClass(120, 5, 1)
      expect(calculator.totalInterest()).toBeCloseTo(3.27, 2)
    })
  })
})

