<template>
  <div class="layout-default-sidebar">
    <div class="sidebar-top">
      <div class="app-name">
        DropSquare
      </div>

      <p class="app-desc">A Product Of Fireapps</p>
    </div>

    <div class="sidebar-menu">
      <div v-for="(item, i) in menus" :key="i" class="menu-item">
        <router-link :to="item.to">
          <fa :icon="['fas', item.icon]" />
          {{ item.name }}
        </router-link>

        <div v-if="item.children" class="children">
          <div v-for="(child, j) in item.children" :key="i + '-' + j" class="menu-item">
            <router-link :to="child.to">
              <fa :icon="['fas', child.icon]" />
              {{ child.name }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          icon: 'home',
          name: 'Dashboard',
          to: '/'
        },
        {
          icon: 'shopping-bag',
          name: 'Product List',
          to: '/products',
          children: [
            {
              icon: 'plus',
              name: 'Add',
              to: '/products/create'
            }
          ]
        },
        {
          icon: 'shopping-cart',
          name: 'Orders List',
          to: '/orders'
        },
        {
          icon: 'cog',
          name: 'Settings',
          to: '/settings'
        },
        {
          icon: 'life-ring',
          name: 'Help Center',
          to: '/help'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-default-sidebar {
  position: fixed;
  width: 250px;
  top: 0;
  left: 0;
  overflow-y: auto;
  height: 100vh;
  z-index: 101;
  background-color: #7023ce;
  background-color: #47549f;
  color: white;
  display: flex;
  flex-direction: column;
}

.sidebar-top {
  height: 60px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3px;

  .app-name {
    font-size: 21px;
    font-weight: 700;
  }

  .app-desc {
    font-size: 12px;
    font-weight: 300;
  }
}

.sidebar-menu {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;

  .menu-item {
    padding: 5px 0;
    display: flex;
    flex-direction: column;

    .children {
      padding: 5px 0 0 25px;
    }

    a {
      padding: 10px 15px;
      color: white;
      width: 100%;
      border-radius: 5px;

      &.router-link-exact-active {
        text-decoration: none;
        background-color: rgba(255, 255, 255, 0.3);
      }

      svg {
        margin-right: 10px;
      }

      &:hover {
        text-decoration: none;
        background-color: rgba(255, 255, 255, 0.3);
      }
    }
  }
}
</style>
