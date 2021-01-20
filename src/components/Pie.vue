<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  mounted() {
    this.renderChart(
      {
        labels: ["Foods", "Transportation", "Bill"],
        datasets: [
          {
            backgroundColor: ['#e74c3c', '#2ecc71', "#00D8FF"],
            data: [40, 20, 10]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>