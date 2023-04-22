<template>
  <div class="warning">
    <p>{{ error }}</p>
    <p>{{ modalOpen }}</p>
    <button @click.left="updateModalStatus()">OK</button>
  </div>
</template>

<script>
export default {
  name: 'CustomModal',
  props: ["error", "modalOpen"],
  computed: {},
  methods: {
    updateModalStatus: function () {
      console.log('rodou');
      this.$emit('click');
    }
  }
}
</script>

<style scoped src="@/assets/css/CustomModal.css"></style>