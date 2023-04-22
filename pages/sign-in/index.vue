<template>
  <main class="container">
    <div class="presentation">
      <h1 class="title">The Chart Store</h1>
      <h2 class="sub-title">
        you want charts?<br />
        we got charts.<br />
        lots of charts!<br />
        how many charts?<br />
        ...<br />
        three charts
      </h2>
    </div>
    <div class="form-div">
      <form class="form">
        <CustomInput v-model="email" :inputType="'email'" :placeholder="'email'" />
        <CustomInput v-model="password" :inputType="'password'" :placeholder="'password'" />
        <button class="button" @click.prevent="handleSubmit()">Sign In</button>
      </form>
      <NuxtLink class="signUpSwitch" to="/sign-up">Already have an account? Log in.</NuxtLink>
    </div>
    <CustomModal v-if="modalOpen" v-model="modalOpen" @click="closeModal()" :error="errorMessage" />
  </main>
</template>

<script>
import CustomInput from '../../components/Custom-Input.vue';
import CustomModal from '../../components/Custom-Modal.vue';

export default {
  data() {
    return {
      email: "",
      password: "",
      modalOpen: false,
      errorMessage: "something went wrong"
    }
  },
  components: { CustomInput, CustomModal },
  methods: {
    async handleSubmit() {
      try {
        await this.$axios.$post(
          `${process.env.baseUrl}/sign-in`,
          {
            email: this.email,
            password: this.password
          },
          {
            withCredentials: true
          }
        );
        let newUrl = this.$route.path.replace('/sign-in', '/dashboard')
        this.$router.replace(newUrl);
      } catch (error) {
        this.errorMessage = error.response.data.info;
        this.modalOpen = true;
      }
    },
    closeModal() {
      this.modalOpen = false;
    }
  }
}
</script>

<style scoped src="@/assets/css/SignIn.css"></style>