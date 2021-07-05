import base from './base';
const resource = "/account";

export default {
  getAccount() {
    return {
      id: "1",
      name: "Mark Henry",
      balance: 3000,
      loanAmount: 0,
      repaymentPeriod: 12,
      repaidAmount: 0,
      status: "None"
    };
  },
  update(accountId, payload) {
    return base.put(`${resource}/${accountId}`, payload);
  }
}
