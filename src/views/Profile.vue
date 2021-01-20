<template>
  <v-app>
    <Navigation />

    <v-main>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation";


export default {
  name: "profile",
  components: {
    Navigation,
    // Bar,
    // Pie,
  },
};
</script>

<style>
</style>