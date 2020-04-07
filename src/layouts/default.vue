<template>
  <div class="layout-default">
    <Sidebar />
    <Header />

    <div class="layout-default-main">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from './partials/header'
import Sidebar from './partials/sidebar'

export default {
  name: 'defaultLayout',

  components: {
    Header,
    Sidebar
  }
}
</script>

<style lang="scss">
.layout-default {
  display: flex;
  min-height: 100vh;

  .layout-default-main {
    background-color: #fafafa;
    position: relative;
    flex-grow: 1;
    padding: 60px 0 0 250px;
  }
}
</style>
