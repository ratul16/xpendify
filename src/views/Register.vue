<template>
  <v-container fill-height fluid>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-10">
          <div class="pa-4">
            <h2 class="text-center green--text">Xpendify</h2>
          </div>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field
                color="green"
                ref="username"
                prepend-icon="mdi-account"
                label="Username"
                required
              />
              <v-text-field
                color="green"
                ref="password"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                required
                @click:append="showPassword = !showPassword"
              />
              <v-text-field
                color="green"
                ref="password"
                prepend-icon="mdi-lock-plus"
                :append-icon="ReshowPassword ? 'mdi-eye-off' : 'mdi-eye'"
                :type="ReshowPassword ? 'text' : 'password'"
                label="Re-enter Password"
                required
                @keydown.enter="register"
                @click:append="ReshowPassword = !ReshowPassword"
              />
            </v-form>
          </v-card-text>
          <v-card-actions class="mx-4">
            <v-btn
              class="white--text pa-4 my-4"
              block
              align-center
              justify-center
              color="green"
            >Login</v-btn>
          </v-card-actions>
          <v-snackbar v-model="snackbar" :color="color" :top="true">
            {{ errorMessages }}
            <v-btn dark text @click="snackbar = false">Close</v-btn>
          </v-snackbar>
          <v-card-text class="text-center">
            <h4>
              Already have an account ?
              <router-link :to="{ name: 'login'}">Go to login</router-link>
            </h4>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "register",
  data: () => ({
      username: "",
      password: "",
      errorMessages: "Incorrect login info",
      snackbar: false,
      showPassword: false,
      ReshowPassword: false,
  })
};
</script>
<style>
</style>