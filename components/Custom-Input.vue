<template>
    <input class="input" v-bind:value="model" v-on:input="updateInputValue($event.target.value)" :type="inputType" :placeholder="placeholder" />
</template>

<script>
export default {
  props: ['inputType', 'placeholder', 'model'],
  methods: {
    updateInputValue: function (value) {
      this.$emit('input', value);
    }
  }
}
</script>

<style>
.input {
  width: 350px;
  height: 50px;
  border: 1px black solid;
  padding-left: 5px;
  border-radius: 10px;
  margin-top: 10px;
}

.input:focus {
  outline: none;
}
</style>