<template>
</template>
<script>
export default {
  beforeMount() {
    let newUrl = this.$route.path.replace('/', '/dashboard')
    this.$router.replace(newUrl);
  }
}
</script>