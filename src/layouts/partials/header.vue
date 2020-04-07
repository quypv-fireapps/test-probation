<template>
  <div class="layout-default-header">
    <div class="flex-grow-1"></div>

    <div class="d-flex align-content-center">
      <span class="d-flex align-items-center mr-3">
        Marry Doe
        <fa class="ml-2" :icon="['fas', 'angle-down']" />
      </span>

      <div class="avatar">
        <img src="https://i.imgur.com/St0H9xI.jpg" alt="Avatar" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.layout-default-header {
  z-index: 100;
  position: fixed;
  height: 60px;
  top: 0;
  left: 0;
  padding: 0 10px 0 260px;
  width: 100%;
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
