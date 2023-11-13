<script setup>
import { onMounted, ref } from "vue";
import drawerComponent from "../components/drawerComponent.vue";
import tabComponent from "../components/tabComponent.vue";
import { Chart, registerables } from "chart.js/auto";

const chartRef = ref(null);
const chartRef2 = ref(null);
const chartRef3 = ref(null);
const chartRef4 = ref(null);

onMounted(() => {
    const ctx = chartRef.value.getContext("2d");
    const ctx2 = chartRef2.value.getContext("2d");
    const ctx3 = chartRef3.value.getContext("2d");
    const ctx4 = chartRef4.value.getContext("2d");

    Chart.register(...registerables);

    const myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ],

            datasets: [
                {
                    label: "Special Retention",
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                        "rgba(255, 205, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(201, 203, 207, 0.2)",
                    ],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });

    const myChart2 = new Chart(ctx2, {
        type: "line", 
        data: {
            labels: ["Q1", "Q2", "Q3", "Q4"],

            datasets: [
                {
                    label: "Total Sum Insured By Quarters",
                    borderColor: "rgb(75, 192, 192)",
                    data: [12, 19, 3, 5, 2, 3],
                },
            ],
        },
    });
    const myChart3 = new Chart(ctx3, {
        type: "doughnut",
        data: {
            labels: ["Local", "USD", "LYD"],
            datasets: [
                {
                    label: "My First Dataset",
                    data: [300, 50, 100],
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                        "rgba(255, 205, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(201, 203, 207, 0.2)",
                    ],
                    hoverOffset: 4,
                },
            ],
        },

    });
    const myChart4 = new Chart(ctx4, {
        type: "line",
        data: {
            labels: ["Q1", "Q2", "Q3", "Q4"],
            datasets: [
                {
                    label: "Total Premium By Quarters",
                    borderColor: "rgb(75, 192, 192)",
                    fill:true,
                    backgroundColor: "#23d166",
                    data: [12, 19, 3, 5, 2, 3],
                },
            ],
        },
    });
})

</script>

<template>
  <drawerComponent :noResize="true" />
  <tabComponent :noResize="true" />
  <v-container>
    <v-row class="flex justify-space-around" style="margin-bottom: 120px">
      <v-col cols="12" sm="6" md="6">
        <div style="width: 100%">
          <canvas ref="chartRef"></canvas>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <div style="width: 100%">
          <canvas ref="chartRef2"></canvas>
        </div>
      </v-col>
    </v-row>
    <v-row class="flex justify-space-around">
      <v-col cols="12" sm="6" md="6">
        <div style="width: 100%">
          <canvas ref="chartRef4"></canvas>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <div style="width: 100%">
          <canvas ref="chartRef3"></canvas>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
