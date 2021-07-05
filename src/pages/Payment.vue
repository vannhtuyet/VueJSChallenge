<template>
  <q-page class="bg-white">
    <q-input class="q-pa-md" type="number" readonly v-model="weeklyAmount" label="Weekly amount" filled></q-input>
    <q-btn label="Repay" class="bg-indigo text-white float-right q-ma-md"  @click="updateRepaidAmount"></q-btn>
  </q-page>
</template>

<script>
  export default {
    name: 'Payment',
    data() {
      return {
        currentLoan: {},
        weeklyAmount: 0,
        isNotAcceptable: false
      }
    },
    created() {
      this.getCurrentLoan();
    },
    methods: {
      getCurrentLoan() {
        this.weeklyAmount = this.$store.getters.getCurrentUserWeeklyAmount;
      },
      updateRepaidAmount() {
        if (this.weeklyAmount > this.$store.state.currentAccount.balance) {
          alert("You don't have enough money. Please make a deposit. Thank you")
        }
        else {
          this.$store.dispatch("setLoanRepaidAmount", this.weeklyAmount);
        }
      }
    }
  }
</script>

