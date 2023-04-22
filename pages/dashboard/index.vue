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

<style scoped src="@/assets/css/Dashboard.css"></style>