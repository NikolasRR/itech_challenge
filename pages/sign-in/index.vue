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
        <CustomInput :disabled="loading" v-model="email" :inputType="'email'" :placeholder="'email'" />
        <CustomInput :disabled="loading" v-model="password" :inputType="'password'" :placeholder="'password'" />
        <button :disabled="loading" class="button" @click.prevent="handleSubmit()">Sign In</button>
      </form>
      <NuxtLink class="signUpSwitch" to="/sign-up">Don't have an account? Sign-up</NuxtLink>
    </div>
    <CustomModal v-if="modalOpen" v-model="modalOpen" @click="closeModal()" :error="errorMessage" />
  </main>
</template>

<script>
import CustomInput from '../../components/CustomInput.vue';
import CustomModal from '../../components/CustomModal.vue';

export default {
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      modalOpen: false,
      errorMessage: "Something went wrong"
    }
  },
  components: { CustomInput, CustomModal },
  methods: {
    verifyForm() {
      const formIsIncomplete = this.password === "" || this.email === "";
      if (formIsIncomplete) {
        this.errorMessage = "Fields are not allowed to be empty!";
        this.modalOpen = true;
      }
      return formIsIncomplete;
    },
    async handleSubmit() {
      this.loading = true;
      if (this.verifyForm()) return;

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

      this.loading = false;
    },
    closeModal() {
      this.modalOpen = false;
    }
  }
}
</script>

<style scoped src="@/assets/css/SignIn.css"></style>