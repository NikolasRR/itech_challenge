<template>
  <div class="container">
    <Header />
    <main class="charts-container">
      <div class="chart">
        <h4>chart 1</h4>
        <div class="chart-body">
          <client-only>
            <CustomLineChart />
          </client-only>
        </div>
      </div>

      <div class="chart">
        <h4>chart 1</h4>
        <div class="chart-body">
          <client-only>
            <CustomBarChart />
          </client-only>
        </div>
      </div>

      <div class="chart">
        <h4>chart 1</h4>
        <div class="chart-body">
          <client-only>
            <CustomPieChart />
          </client-only>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import CustomBarChart from '../../components/CustomBarChart.vue';
import CustomLineChart from '../../components/CustomLineChart.vue';
import CustomPieChart from '../../components/CustomPieChart.vue';
import Header from '../../components/Header.vue';

export default {
  name: "DashboardPage",
  components: { Header, CustomPieChart, CustomBarChart, CustomLineChart },
}
</script>

<style>
.container {
  background-color: white;
  width: 100vw;
  height: 100vh;
}

.charts-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 50px;
}

.chart {
  background-color: white;
  width: 550px;
  height: 400px;
  border: 2px rgba(133, 133, 133, 0.3) solid;
  border-radius: 5px;
  padding-left: 25px;
}

.chart > h4 {
  font-size: 25px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: rgba(133, 133, 133, 1);
  margin: 8px 0;
}

.chart-body {
  width: 500px;
  height: 350px;
}
</style>