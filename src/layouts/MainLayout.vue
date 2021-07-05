<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer v-model="leftDrawerOpen"
              show-if-above
              bordered
              content-class="bg-indigo-9 text-white q-pa-md">
      <q-list>
        <q-item class="text-h5 text-secondary text-weight-bold items-center">aspire</q-item>
        <q-item>Trusted way of banking for 3,000+ SMEs and Startups in Singapore</q-item>
        <q-item to="/Home" active-class="q-item-no-link-highlighting text-secondary">
          <q-item-section avatar>
            <q-icon name="fas fa-home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-item v-if="currentAccount.role === 'user'" to="/MyCards" active-class="q-item-no-link-highlighting text-secondary">
          <q-item-section avatar>
            <q-icon name="fas fa-credit-card" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Cards</q-item-label>
          </q-item-section>
        </q-item>
        <q-item v-if="currentAccount.role === 'admin'" to="/AdminView" active-class="q-item-no-link-highlighting text-secondary">
          <q-item-section avatar>
            <q-icon name="fas fa-credit-card" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Request</q-item-label>
          </q-item-section>
        </q-item>
        <q-item v-if="currentAccount.role === 'user'" to="/Payment" active-class="q-item-no-link-highlighting text-secondary">
          <q-item-section avatar>
            <q-icon name="fas fa-exchange-alt" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Payment</q-item-label>
          </q-item-section>
        </q-item>
        <q-item v-if="currentAccount.role === 'user'" to="/Credit" active-class="q-item-no-link-highlighting text-secondary">
          <q-item-section avatar>
            <q-icon name="fas fa-arrow-circle-up" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Credit</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/Login" active-class="q-item-no-link-highlighting text-secondary">
          <q-item-section avatar>
            <q-icon name="fas fa-user" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Settings</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

  export default {
    name: 'MainLayout',

    data() {
      return {
        leftDrawerOpen: false,
        currentAccount: {}
      }
    },
    created() {
      this.currentAccount = this.$store.state.currentAccount;
    },
    methods: {
      
    }
  }
</script>
