import Vue from 'vue'
import Vuex from 'vuex'
import loans from "../service/loans";
import accounts from "../service/account";
// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */
function initialStateFromLocalStorage() {
  const initData = {
    accounts: [],
    loans: [],
    currentAccount: null,
    count: 0
  }
  initData.loans = loans.getLoans();
  initData.accounts = accounts.getAccounts();
  return initData;
}
export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: initialStateFromLocalStorage,
    getters: {
      getCurrentAccount: state => {
        return state.currentAccount();
      },
      getLoanByUserId: (state) => (accountId) => {
        var loan = state.loans.find(loan => loan.accountId == accountId && loan.status == "None");
        if (loan == null) {
          loan = { amountTotal: 0, status: "None", period: 0 };
        }
        return loan;
      },
      getCurrentUserWeeklyAmount: (state) => {
        var result = 0;
        var loans = state.loans.filter(loan => loan.accountId == state.currentAccount.accountId && loan.status == "Approve");
        loans.forEach((loan) => {
          result += loan.amountTotal / loan.period;
        });
        return Math.round(result);
      },
      getAccountById: (state) => (accountId) => {
        return state.accounts.find(account => account.accountId == accountId);
      }
    },
    mutations: {
      setCurrentAccount(state, payload) {
        state.currentAccount = payload
      },
      setLoanInfo(state, payload) {
        var loan = state.loans.find(loan => loan.loanId == payload.loanId);
        if (loan == null) {
          state.loans.push(payload);
        }
        else
          loan = payload;
      },
      setLoanStatus(state, payload) {
        var loan = state.loans.find(l => l.loanId == payload.loanId);
        loan.status = payload.status;
      },
      login(state, account) {
        state.currentAccount = account;
      },
      updateLoanToBalance(state, loan) {
        if (loan.status == "Approve") {
          var account = state.accounts.find(account => account.accountId == loan.accountId);
          account.balance = parseInt(account.balance) + parseInt(loan.amountTotal);
        }
      }
    },
    actions: {
      login(context, payload) {
        var account = context.state.accounts.find(account => account.accountName == payload.loginName);
        console.log("account", account);
        if (account != null) {
          context.commit("login", account)
        }
      },
      setLoanStatus(context, payload) {
        console.log("setLoanStatus", payload)
        context.commit('setLoanStatus', payload);
        context.commit("updateLoanToBalance", payload);
        var account = context.getters.getAccountById(payload.accountId);
        accounts.updateAccount(account);
        loans.updateLoan(payload);
      },
      addLoan(context, payload) {
        loans.updateLoan(payload);
        context.commit('setLoanInfo', payload)
      },
      setLoanRepaidAmount(context, payload) {
        var currentAccount = context.state.currentAccount;
        currentAccount.balance = currentAccount.balance - payload;
        accounts.updateAccount(currentAccount);
        context.commit("setCurrentAccount", currentAccount);
        context.commit('setLoanInfo', payload)
      }
    },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
