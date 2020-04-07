<template>
  <div class="layout-error">
    <div class="h-100 d-flex flex-column justify-content-center align-items-center">
      <h1>PAGE NOT FOUND</h1>

      <router-link to="/">
        Back to Home
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error'
}
</script>

<style lang="scss" scoped>
.layout-error {
  height: 100vh;
}
</style>
