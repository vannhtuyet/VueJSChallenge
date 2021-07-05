<template>
  <q-page class="bg-white">
    <q-input class="q-pa-md" v-model="userAccount.repaidAmount" label="Weekly amount" filled></q-input>
    <q-btn label="Repay" class="bg-indigo text-white float-right q-ma-md" @click="updateRepaidAmount"></q-btn>
  </q-page>
</template>

<script>
  import account from "../service/account";
  export default {
    name: 'Payment',
    data() {
      return {
        userAccount: {}
      }
    },
    created() {
      this.updateRepaidAmount();
    },
    methods: {
      async updateRepaidAmount() {
        await account.update("1", this.userAccount);
      }
    }
  }
</script>

