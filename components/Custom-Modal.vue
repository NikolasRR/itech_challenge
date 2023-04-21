<template>
  <div class="warning">
    <p>{{ error }}</p>
    <button>OK</button>
  </div>
</template>

<script>
  export default {
    props: ["error", "modalOpen"],
    methods: {
    updateModalStatus: function () {
      this.$emit('button', !this.modalOpen);
    }
  }
  }
</script>

<style>
.warning {
  height: 200px;
  width: 400px;
  background-color: brown;
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

.warning > button {
  width: 100px;
  height: 40px;
  margin-top: 20px;
}

</style>