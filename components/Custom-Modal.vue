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

<style>
.warning {
  height: 200px;
  width: 400px;
  background-color: #2b3034;
  border-radius: 20px;
  z-index: 2;
  position: fixed;
  left: calc(50% - 200px);
  top: calc(50% - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.warning>button {
  width: 100px;
  height: 40px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
}
</style>