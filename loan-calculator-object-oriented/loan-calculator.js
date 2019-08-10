// interest rate comes in % like 10 for 10%
class LoanCalculator {
  constructor(loanAmount, annualInterestRate, yearsToPay) {
    this.loanAmount = loanAmount
    this.monthlyInterestRate = annualInterestRate / 100 / 12
    this.monthsToPay = yearsToPay * 12
  }

  monthlyPayment() {
    let monthly
    if (this.monthlyInterestRate === 0) {
      monthly = this.loanAmount / this.monthsToPay
    } else {
      const x = Math.pow(1 + this.monthlyInterestRate, this.monthsToPay)
      monthly = (this.loanAmount * x * this.monthlyInterestRate) / (x - 1)
    }

    return monthly
  }

  totalPayment() {
    return this.monthlyPayment() * this.monthsToPay
  }

  totalInterest() {
    return this.totalPayment() - this.loanAmount
  }
}

export default { LoanCalculator }