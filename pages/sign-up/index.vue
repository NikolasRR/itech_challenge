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
        <CustomInput :disabled="loading" v-model="name" :inputType="'text'" :placeholder="'name'" />
        <button :disabled="loading" class="button" @click.prevent="handleSubmit()">Sign Up</button>
        <p v-if="creationSucessfull" class="sucess-alert">Account created!<br/> You will be redirected to sign-in</p>
      </form>
      <NuxtLink class="signIpSwitch" to="/sign-in">Already have an account? Log in.</NuxtLink>
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
      name: "",
      loading: false,
      creationSucessfull: false,
      modalOpen: false,
      errorMessage: "Something went wrong"
    }
  },
  components: { CustomInput, CustomModal },
  methods: {
    verifyForm() {
      const formIsIncomplete = this.name === "" || this.email === "" || this.password === "";
      if (formIsIncomplete) {
        this.errorMessage = "Fields are not allowed to be empty!";
        this.modalOpen = true;
        this.loading = false;
      }
      return formIsIncomplete;
    },
    async handleSubmit() {
      this.loading = true;
      if (this.verifyForm()) return;

      try {
        await this.$axios.$post(
          `${process.env.baseUrl}/sign-up`,
          {
            name: this.name,
            email: this.email,
            password: this.password
          }
        );
        this.creationSucessfull = true;
        setTimeout(() => {
          let newUrl = this.$route.path.replace('/sign-up', '/sign-in')
          this.$router.replace(newUrl);
          console.log('checkpoint');
        }, 2000);

      } catch (error) {
        if (error?.response) this.errorMessage = error.response.data.info;
        this.modalOpen = true;
        this.loading = false;
      }
    },
    closeModal() {
      this.modalOpen = false;
    }
  }
}
</script>

<style scoped src="@/assets/css/SignUp.css"></style>
