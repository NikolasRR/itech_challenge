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
        <CustomInput v-model="name" :inputType="'text'" :placeholder="'name'" />
        <button class="button" @click.prevent="handleSubmit()">Sign Up</button>
      </form>
      <NuxtLink class="signIpSwitch" to="/sign-in">Already have an account? Log in.</NuxtLink>
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
      name: "",
      modalOpen: true,
      errorMessage: "Something went wrong"
    }
  },
  components: { CustomInput, CustomModal },
  methods: {
    async handleSubmit() {
      try {
        await this.$axios.$post(
          `${process.env.baseUrl}/sign-up`,
          {
            name: this.name,
            email: this.email,
            password: this.password
          }
        );
        let newUrl = this.$route.path.replace('/sign-up', '/sign-in')
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

<style scoped src="@/assets/css/SignUp.css"></style>
