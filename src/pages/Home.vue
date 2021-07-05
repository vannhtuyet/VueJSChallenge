<template>
  <q-page>
    Welcome back {{username}}
  </q-page>

</template>

<script>
  export default {
    data() {
      return {
        username: 'Admin'
      }
    },
    created() {
      this.username = this.$store.state.currentAccount.displayName;
    }
  }
</script>


