import Vue from 'vue';
import { Line, Pie } from 'vue-chartjs';
import {
  Chart as Chartjs,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement
} from 'chart.js'

Chartjs.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement
);

Vue.component('LineChart', {
  extend: Line
})

// Vue.component('BarChart', {
//   extends: Bar,
// })

Vue.component('PieChart', {
  extend: Pie,
})