<template>
  <div id="app-drawer">
    <v-app-bar app clipped-left dark flat floating class="green">
      <v-btn fab small class="green darken-3" @click.stop="drawer = !drawer">
        <v-icon class="white--text">mdi-menu</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <div>
        <!-- <v-img src="@/assets/img/logo-white.png"></v-img> -->
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped dark floating fixed>
      <v-list-item class="py-4">
        <v-list-item-avatar size="68">
          <img src="https://randomuser.me/api/portraits/women/74.jpg" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>User Name</v-list-item-title>
          <v-list-item-subtitle>Paitent</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <!-- <v-divider></v-divider> -->

      <template v-slot:append>
        <div class="pa-2">
          <v-btn class="green darken-2" block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", link: "analytics" },
        { title: "Transactions", icon: "mdi-cash-multiple", link: "/transactions" },
        { title: "Account Balance", icon: "mdi-laptop", link: "/account" },
        { title: "Profile", icon: "mdi-home", link: "/account" },
        { title: "Expanse Table", icon: "mdi-table", link: "/" },
      ],
      drawer: true,
    };
  },
};
</script>

<style>
</style>