<template>
  <div>
    <BulkAction :productIds="seletedProductIds" @change="seletedProductIds = []" />

    <div class="mt-4 bg-white shadow-sm">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Inventory</th>
          </tr>
        </thead>

        <tbody>
          <ProductItem v-for="product in items" :product-info="product" :key="product.id" @selected="selectProduct" @unselected="unSelectProduct" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem'
import BulkAction from './BulkAction'
import { mapGetters } from 'vuex'

export default {
  components: {
    ProductItem,
    BulkAction
  },

  data() {
    return {
      seletedProductIds: []
    }
  },

  props: {
    items: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    ...mapGetters({
      filter: 'products/getFilter'
    })
  },

  watch: {
    filter() {
      this.seletedProductIds = []
    }
  },

  methods: {
    selectProduct(productId) {
      const index = this.seletedProductIds.findIndex(item => item === productId)

      if (index < 0) {
        this.seletedProductIds.push(productId)
      }
    },

    unSelectProduct(productId) {
      const index = this.seletedProductIds.findIndex(item => item === productId)
      if (index >= 0) {
        this.seletedProductIds.splice(index, 1)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
