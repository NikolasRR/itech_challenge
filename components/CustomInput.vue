<template>
    <input 
    class="input" 
    v-bind:value="model" 
    v-on:input="updateInputValue($event.target.value)" 
    :type="inputType" 
    :placeholder="placeholder" 
    :disabled="loading"
    />
</template>

<script>
export default {
  name: 'CustomInput',
  props: ['inputType', 'placeholder', 'model', 'loading'],
  methods: {
    updateInputValue: function (value) {
      this.$emit('input', value);
    }
  }
}
</script>

<style scoped src="@/assets/css/CustomInput.css"></style>