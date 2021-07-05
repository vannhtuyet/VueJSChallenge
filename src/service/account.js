
export default {
  getAccounts() {
    var accounts = [{
      accountId: "1",
      accountName: "henry",
      displayName: "Mark Henry",
      balance: 3000,
      role: "user"
    },
    {
      accountId: "2",
      accountName: "admin",
      displayName: "Admin",
      balance: 10000000,
      role: "admin"
    },
    {
      accountId: "3",
      accountName: "johan",
      displayName: "Johan",
      balance: 0,
      role: "user"
    }];
    var accountsText = localStorage.getItem("accounts");
    if (accountsText != null) {
      accounts = JSON.parse(accountsText);
    }
    return accounts;
  }
}
