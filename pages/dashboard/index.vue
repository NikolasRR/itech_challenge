<template>
  <div class="container">
    <Header />
    <main class="charts-container">
      <CustomDoughnutChart />
      <CustomRadarChart />
      <CustomBarChart />
    </main>
  </div>
</template>

<script>
import CustomBarChart from '../../components/CustomBarChart.vue';
import CustomDoughnutChart from '../../components/CustomDoughnutChart.vue';
import CustomRadarChart from '../../components/CustomRadarChart.vue';
import Header from '../../components/Header.vue';

export default {
  name: "DashboardPage",
  components: { Header, CustomBarChart, CustomDoughnutChart, CustomRadarChart },
  async fetch() {
    try {
      await this.$axios.get(`${process.env.baseUrl}/auth`, { withCredentials: true });
    } catch (error) {
      let newUrl = this.$route.path.replace('/dashboard', '/sign-in')
      this.$router.replace(newUrl);
    }
  }
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

.chart>h4 {
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