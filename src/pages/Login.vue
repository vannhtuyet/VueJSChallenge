<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card>
          <q-card-section>
            <q-avatar size="103px" class="absolute-center shadow-10">
              <img src="profile.svg">
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">
                Log in
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input filled
                       v-model="username"
                       label="Username"
                       lazy-rules
                       :rules="[val => !!val || 'Login name is missing']" />
              <div>
                <q-btn label="Login" to="/Home" type="button" color="primary" @click="login" />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
  export default {
    data() {
      return {
        username: ''
      }
    },
    created() {

    },
    methods: {
      login() {
        this.$store.dispatch("login", { loginName: this.username });
      }
    }
  }
</script>

