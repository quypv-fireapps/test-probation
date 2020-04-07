<template>
  <div class="h-100 p-3">
    <div class="container d-flex flex-column">
      <!--  -->
      <div class="border-bottom pb-2 font-weight-bold">
        <h4>
          Search product
        </h4>
      </div>

      <!--  -->
      <div class="d-flex align-items-center mt-4">
        <div class="flex-grow-1">
          <TabFilter />
        </div>

        <div class="mr-3">
          <fa class="ml-2" :icon="['fas', 'plus']" />
          Import Multi Products
        </div>

        <router-link to="/products/create" class="btn text-white btn-primary">
          <fa class="ml-2" :icon="['fas', 'plus']" />
          Add Product
        </router-link>
      </div>

      <div v-if="isLoading" class="p-5">
        <v-loading />
      </div>

      <template v-else>
        <TableProducts :items="products" />

        <div class="d-flex justify-content-center mt-4">
          <v-pagination :current="pagination.current_page" :total="pagination.total_page" @change="onChangePage" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TableProducts from './components/TableProducts'

import TabFilter from './components/TabFilter'

export default {
  components: {
    TableProducts,
    TabFilter
  },

  data() {
    return {
      isLoading: false,
      per_page: 5
    }
  },

  computed: {
    ...mapGetters({
      products: 'products/getProducts',
      pagination: 'products/getPagination',
      filter: 'products/getFilter'
    })
  },

  watch: {
    'filter.status'() {
      this.fetchData(1)
    }
  },

  created() {
    this.fetchData(1)
  },

  methods: {
    ...mapActions({
      fetchProducts: 'products/fetch',
      updateFilter: 'products/updateFilter'
    }),

    async fetchData(current_page = 1) {
      this.isLoading = true

      try {
        await this.fetchProducts({
          current_page,
          per_page: this.per_page,
          status: this.status
        })
      } catch (error) {
      } finally {
        this.isLoading = false
      }
    },

    onChangePage(page) {
      this.fetchData(page)
    }
  }
}
</script>

<style lang="scss" scoped></style>
