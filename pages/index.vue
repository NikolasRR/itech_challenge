<template>
  <main class="container">
    <h1 class="title">
      you want charts?<br />
      we got charts.<br />
      lots of charts!<br />
      how many charts?<br />
      ...<br />
      three charts
    </h1>
    <form class="form">
      <CustomInput v-model="email" :inputType="'email'" :placeholder="'email'" />
      <CustomInput v-model="password" :inputType="'password'" :placeholder="'password'" />
      <CustomInput v-model="name" :inputType="'text'" :placeholder="'name'" />
      <button class="button" @click.prevent="handleSubmit()">sign up</button>
    </form>
    <NuxtLink class="signUpSwitch" to="/sign-in">Already have an account? Log in.</NuxtLink>
    <CustomModal v-if="modalOpen" :error="errorMessage"/>
  </main>
</template>

<script>
import CustomInput from '../components/Custom-Input.vue';
import CustomModal from '../components/Custom-Modal.vue';

export default {
  data() {
    return {
      email: "",
      password: "",
      name: "",
      modalOpen: true,
      errorMessage: "lalalal"
    }
  },
  components: { CustomInput, CustomModal },
  methods: {
    async handleSubmit() {
      try {
        // await this.$axios.$post(
        //   `${process.env.baseUrl}/sign-up`,
        //   {
        //     name: this.name,
        //     email: this.email,
        //     password: this.password
        //   }
        // );
        let newUrl = this.$route.path.replace('/', '/dashboard')
        this.$router.replace(newUrl);
      } catch (error) {
        console.log(error);
        // this.errorMessage = error;
      }
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
  cursor: pointer;
}

.signUpSwitch {
  text-decoration: underline;
  cursor: pointer;
  margin-top: 10px;
  color: white;
}

</style>
