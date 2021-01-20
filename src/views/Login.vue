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
                v-model="username"
                :rules="[() => !!username || 'This field is required']"
                prepend-icon="mdi-account"
                label="Username"
                required
              />
              <v-text-field
                color="green"
                ref="password"
                v-model="password"
                :rules="[() => !!password || 'Password is required']"
                :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                :type="showPassword ? 'text' : 'password'"
                prepend-icon="mdi-lock"
                label="Password"
                required
                @keydown.enter="login"
                @click:append="showPassword = !showPassword"
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
              <h4>Don't have an account ? <router-link :to="{ name: 'register'}">Register now</router-link></h4>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "login",
  data: function () {
    return {
      username: "",
      password: "",
      errorMessages: "Incorrect login info",
      snackbar: false,
      color: "general",
      showPassword: false,
    };
  },
};
</script>
<style>
</style>