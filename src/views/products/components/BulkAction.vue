<template>
  <div class="d-flex align-items-center mt-4">
    <strong class="mr-4"> Selected {{ productIds.length }} in {{ products.length }} products </strong>

    <div>
      <div class="dropdown">
        <button type="button" class="btn btn-bulk-action dropdown-toggle" data-toggle="dropdown">
          Bulk Action
        </button>
        <div class="dropdown-menu">
          <li class="dropdown-item" @click="bulkDelete">Delete</li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: {
    productIds: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    ...mapGetters({
      pagination: 'products/getPagination',
      products: 'products/getProducts'
    })
  },

  methods: {
    ...mapActions({
      deleteProduct: 'products/delete'
    }),

    bulkDelete() {
      if (this.productIds.length > 0) {
        this.$emit('change')
        this.productIds.forEach(productId => {
          try {
            this.deleteProduct(productId)
          } catch (error) {}
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown-item {
  cursor: pointer;
}

.btn-bulk-action {
  border-radius: 6px;
  background-color: white;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
}
</style>
