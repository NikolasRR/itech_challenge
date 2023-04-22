<template>
  <div class="chart" v-bind:class="{ selected: selected }">
    <h4>Bar Chart</h4>
    <div class="chart-body">
      <client-only>
        <Bar :data="data" :options="options" />
      </client-only>
    </div>
    <ul>
      <li class="listitem">Elegant</li>
      <li class="listitem">Is full of rectangles</li>
      <li class="listitem">Has two axis</li>
      <li class="listitem">Accepts multiple colors</li>
      <li class="listitem">Great for comparison of values by month</li>
      <li class="listitem">Easy to read</li>
    </ul>
    <div class="lower-section">
      <p>For Only: $29.99</p>
      <button @click.left="selectChart()" ref="buttonToggle">Select</button>
    </div>
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Bar
  },
  data() {
    return {
      selected: false,
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ],
        datasets: [
          {
            label: 'Profit (in millions of dollars)',
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
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

<style scoped src="@/assets/css/CustomChart.css"></style>