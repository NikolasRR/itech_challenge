<template>
  <div class="background">
    <div class="warning">
      <p>{{ error }}</p>
      <button @click.left="updateModalStatus()">OK</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomModal',
  props: ["error", "modalOpen"],
  computed: {},
  methods: {
    updateModalStatus: function () {
      this.$emit('click');
    }
  }
}
</script>

<style scoped src="@/assets/css/CustomModal.css"></style>