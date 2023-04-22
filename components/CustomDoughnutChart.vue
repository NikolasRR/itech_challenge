<template>
  <div class="chart" v-bind:class="{ selected: selected }">
    <h4>Doughnut Chart</h4>
    <div class="chart-body">
      <client-only>
        <Doughnut :data="data" :options="options" />
      </client-only>
    </div>
    <ul>
      <li class="listitem">Pretty</li>
      <li class="listitem">Is round</li>
      <li class="listitem">Has a hole in the middle</li>
      <li class="listitem">Looks like a doughnut</li>
      <li class="listitem">Accepts multiple colors</li>
      <li class="listitem">Good for comparison in percentages</li>
    </ul>
    <div class="lower-section">
      <p>For Only: $49.99</p>
      <button @click.left="selectChart()" ref="buttonToggle">Select</button>
    </div>
  </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'CustomDoughnutChart',
  components: {
    Doughnut
  },
  data() {
    return {
      selected: false,
      data: {
        labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: [40, 20, 80, 10]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  methods: {
    selectChart() {
      this.selected = !this.selected;
      this.$refs.buttonToggle.innerText = this.selected ? 'Unselect' : 'Select';
    }
  }
}
</script>

<style scoped src="@/assets/css/CustomChart.css">
</style>