<template>
  <main class="container">
      <h1 class="title">
        you want charts?<br/>
        we got charts.<br/>
        lots of charts!<br/>
        how many charts?<br/>
        ...<br/>
        three charts
      </h1>
    <form class="form">
      <Custom-input :inputType="'email'" :placeholder="'email'" />
      <Custom-input :inputType="'password'" :placeholder="'password'" />
      <Custom-input :inputType="'text'" :placeholder="'name'" />
      <button class="button" @click.prevent="handleSubmit()">sign up</button>
    </form>
    <p class="signUpSwitch">Already have an account? Log in.</p>
  </main>
</template>

<script>
import CustomInput from '../components/Custom-Input.vue';

export default {
  data() {
    return {
    }
  },
  components: { CustomInput },
  methods: {
    handleSubmit() {
      console.log("submited");
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  background-color: blueviolet;
  height: 100vh;
  width: 100vw;
}

.title {
  font-size: 30px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  line-height: 40px;
  text-align: center;
  margin: 80px 0 30px 0;
}

.form {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  min-height: 190px;
}

.button {
  width: 355px;
  height: 50px;
  border-radius: 10px;
  background-color: white;
  margin-top: 10px;
  border: none;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.signUpSwitch {
  text-decoration: underline;
  cursor: pointer;
  margin-top: 10px;
}
</style>
