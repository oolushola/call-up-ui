<template>
  <div>
    <today-chart
      :chartType="chartType"
      :chartData="chartData"
      :chartOptions="chartOptions"
      :id="id"
      :height="height"
    ></today-chart>
  </div>
</template>


<script>
import Chart from './Chart.vue'
export default {
  props: {
    data: Array,
    label: String,
    labels: Array,
    type: String,
    id: String,
    height: Number
  },
  components: {
    'today-chart': Chart
  },
  data() {
    return {
      chartType: this.type,
      chartData: {
        labels: this.labels,
        datasets: [{
          label: this.label,
          data: this.data,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      chartOptions: {
        scales: {
            yAxes: [{
              ticks: {
                  beginAtZero: true
              }
            }]
          }
      }
    }
  }
}
</script>


