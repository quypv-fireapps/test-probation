<template>
  <div class="tab-fitler">
    <div v-for="item in statuses" :key="item.value" class="tab-item" :class="{ active: item.value === status }" @click="status = item.value">
      {{ item.key }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import constant from '@/utils/constant'
import helper from '@/utils/helper'

export default {
  computed: {
    ...mapGetters({
      products: 'products/getProducts',
      pagination: 'products/getPagination',
      getFilter: 'products/getFilter'
    }),

    status: {
      get: function() {
        return this.getFilter.status
      },

      set: function(newStatus) {
        this.updateFilter({
          status: newStatus
        })
      }
    },

    statuses() {
      return helper.convertMapToArray(constant.PRODUCT_STATUS)
    }
  },

  methods: {
    ...mapActions({
      updateFilter: 'products/updateFilter'
    })
  }
}
</script>

<style lang="scss" scoped>
.tab-fitler {
  display: inline-flex;
  padding: 2px 5px;
  border-radius: 6px;
  background-color: white;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);

  .tab-item {
    padding: 5px 20px;
    position: relative;
    cursor: pointer;

    &.active::after {
      content: '';
      width: calc(100% - 20px * 2);
      position: absolute;
      height: 2px;
      left: 20px;
      bottom: -2px;
      background-color: #47549f;
    }
  }
}
</style>
