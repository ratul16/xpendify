<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12">
        <v-card class="pa-2 elevation-1">
            <v-fab-transition>
                <v-btn fab absolute small append dark top right color="green" class="v-btn--example">
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </v-fab-transition>
          <h2>Monthly Overview</h2>

          <div class="overview-stats">
            <v-row>
              <v-col cols="3" md="3">
                <div class="text-center">
                  <h2 class="green--text">20,000.0</h2>
                  <p>Income</p>
                </div>
              </v-col>
              <v-col cols="3" md="3">
                <div class="text-center">
                  <h2 class="red--text">5,000.0</h2>
                  <p>Expenses</p>
                </div>
              </v-col>
              <v-col cols="3" md="3">
                <div class="text-center">
                  <h2 class="orange--text">0.0</h2>
                  <p>Loan</p>
                </div>
              </v-col>
              <v-col cols="3" md="3">
                <div class="text-center">
                  <h2 class="blue--text">15,000.0</h2>
                  <p>Total</p>
                </div>
              </v-col>
            </v-row>
          </div>
          <v-progress-linear absolute bottom color="green" value="45" height="10"></v-progress-linear>
        </v-card>
      </v-col>
    </v-row>
    <v-data-table :headers="headers" :items="desserts" :items-per-page="10" class="elevation-1"></v-data-table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Item ",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
      ],
    };
  },
};
</script>