
export default {
  getLoans() {
    var loans = [{
      loanId: "1",
      accountId: "1",
      amountTotal: 9000,
      period: 6,
      status: "Pending",
      repaidAmount: 200
    },
    {
      loanId: "2",
      accountId: "3",
      amountTotal: 0,
      period: 0,
      status: "None",
      repaidAmount: 0
    }];
    var loansText = localStorage.getItem("loans");
    if (loansText != null) {
      loans = JSON.parse(loansText);
    }
    return loans;
  },
  getLoanById(loanId) {
    var loansText = localStorage.getItem("loans");
    var loans = JSON.parse(loansText);
    var loan = loans.filter(l => l.id == loanId);
    return loan;
  },
  updateLoan(loan) {
    var loansText = localStorage.getItem("loans");
    var loans = JSON.parse(loansText);
    var loanSelected = loans.filter(l => l.id == loan.id);
    if (loanSelected != null)
      loanSelected = loan
    else
      loans.push(loan)
    localStorage.setItem("loans", JSON.stringify(loans))
  },
  updateLoanStatus(loanId, status) {
    var loan = this.getLoanById(loanId);
    loan.status = status;
    this.updateLoan(loan);
  },
  updateRepaidAmount(amount) {
    var loan = this.getLoanById(loanId);
    loan.repaidAmount = amount;
    this.updateLoan(loan);
  }
}
