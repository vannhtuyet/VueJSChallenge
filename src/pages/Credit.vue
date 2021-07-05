<template>
  <q-page class="bg-white">
    <q-input class="q-pa-md" v-model="userAccount.name" label="Account Name" filled></q-input>
    <q-input class="q-pa-md" v-model="userAccount.amountRequired" type="number" label="Amount" filled
             lazy-rules
             :rules="[val => !!val || 'Amount is missing', isValidAmount]">
    </q-input>
    <q-input class="q-pa-md" v-model="userAccount.repaymentPeriod" type="number" label="Repayment period" filled
             lazy-rules
             :rules="[val => !!val || 'Repayment period is missing', isValidPeriod]"></q-input>
    <div class="row float-right">
      <q-btn class="q-ma-md bg-indigo text-white" label="Cancel"></q-btn>
      <q-btn class="q-ma-md bg-indigo text-white" label="Save"></q-btn>
    </div>
  </q-page>
</template>

<script>
  import account from "../service/account";
  export default {
    name: 'Credit',
    data() {
      return {
        userAccount: {}
      }
    },
    created() {
      this.getData();
    },
    methods: {
      async getData() {
        var accountData = await account.getAccount();
        this.userAccount = accountData;
      }
    },
  }
</script>

