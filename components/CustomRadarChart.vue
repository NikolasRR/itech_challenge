<template>
  <div class="chart" v-bind:class="{ selected: selected }">
    <h4>Radar Chart</h4>
    <div class="chart-body">
      <client-only>
        <Radar :data="data" :options="options" />
      </client-only>
    </div>
    <ul>
      <li class="listitem">Holds a lot of info</li>
      <li class="listitem">Up to 7 different infos</li>
      <li class="listitem">Great for in depth analysis</li>
      <li class="listitem">Accepts more than 1 dataset</li>
      <li class="listitem">Fifa uses it</li>
      <li class="listitem">Radars are cool</li>
    </ul>
    <div class="lower-section">
      <p>For Only: $69.99</p>
      <button @click.left="selectChart()" ref="buttonToggle">Select</button>
    </div>
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'
import { Radar } from 'vue-chartjs'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

export default {
  name: 'CustomRadarChart',
  components: {
    Radar
  },
  data() {
    return {
      selected: false,
      data: {
        labels: [
          'Ambition',
          'Dicipline',
          'Commitment',
          'Designing',
          'Coding',
          'Ethic',
          'Honesty'
        ],
        datasets: [
          {
            label: 'Nikolas',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [100, 82, 71, 19, 83, 96, 100]
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