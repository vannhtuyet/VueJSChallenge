<template>
  <q-page class="bg-white">
    <q-input :readonly="isReadOnly" class="q-pa-md" v-model="currentUser.displayName" label="Account Name" filled></q-input>
    <q-input :readonly="isReadOnly" class="q-pa-md" v-model="currentLoan.amountTotal" type="number" label="Amount" filled
             lazy-rules
             :rules="[val => !!val || 'Amount is missing', isValidAmount]">
    </q-input>
    <q-input :readonly="isReadOnly" class="q-pa-md" v-model="currentLoan.period" type="number" label="Repayment period (weeks)" filled
             lazy-rules
             :rules="[val => !!val || 'Repayment period is missing', isValidPeriod]"></q-input>
    <q-input v-if="currentLoan.status != 'None'" readonly class="q-pa-md" v-model="currentLoan.status" label="Status" filled></q-input>
    <div class="row float-right" v-if="isReadOnly == false">
      <q-btn class="q-ma-md bg-indigo text-white" label="Cancel"></q-btn>
      <q-btn class="q-ma-md bg-indigo text-white" label="Save" @click="updateLoan"></q-btn>
    </div>
  </q-page>
</template>

<script>
  export default {
    name: 'Credit',
    data() {
      return {
        currentUser: {},
        userAccount: {},
        currentLoan: {amountTotal: 0, status: "None", period: 0},
        isReadOnly: false
      }
    },
    created() {
      this.initData();
    },
    methods: {
      initData() {
        this.currentUser = this.$store.state.currentAccount;
        this.currentLoan = this.$store.getters.getLoanByUserId(this.currentUser.accountId);
        if (this.currentLoan != null && this.currentLoan.status != "None") {
          this.isReadOnly = true;
        }
      },
      updateLoan() {
        this.currentLoan.accountId = this.currentUser.accountId;
        this.currentLoan.id = Date.now();
        this.currentLoan.status = "Pending";
        this.$store.dispatch("addLoan", this.currentLoan);
      }
    },
  }
</script>

