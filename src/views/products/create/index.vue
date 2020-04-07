<template>
  <div class="h-100 p-3">
    <div class="container d-flex flex-column">
      <div class="d-flex flex-row justify-content-between py-4 align-items-center">
        <router-link tag="h5" to="/products" class="font-weight-bold text-secondary text-decoration-none mb-0" style="cursor: pointer;">
          <fa class="mr-2" :icon="['fas', 'angle-left']" />
          Add product
        </router-link>

        <div>
          <router-link to="/products" class="btn bg-white rounded-lg shadow-sm px-3">
            Cancel
          </router-link>

          <button class="btn bg-white rounded-lg shadow-sm ml-3 px-3" @click="onSubmit(PRODUCT_STATUS.DRAFT)">
            Save Draft
          </button>

          <button class="btn rounded-lg shadow-sm ml-3 bg-dark text-white px-3" @click="onSubmit(PRODUCT_STATUS.PUBLISHED)">
            Submit
          </button>
        </div>
      </div>

      <div class="d-flex flex-column flex-lg-row mt-3">
        <div class="flex-grow-1 pr-0 pr-lg-4">
          <!--  -->
          <div class="alert alert-danger" role="alert" v-if="msg">
            {{ msg }}
          </div>

          <!--  -->
          <div class="bg-white shadow-sm rounded-lg p-4">
            <h6 class="text-secondary">Product Name</h6>

            <div>
              <input type="text" class="form-control" v-model="product.name" />
            </div>

            <div class="border-t mt-4">
              <h6 class="text-secondary">Descriptions</h6>

              <div>
                <summernote name="summernote-editor" v-model="product.descriptions" />
              </div>
            </div>
          </div>
          <!--  -->

          <ProductImages v-model="product.images" />

          <ProductVariants v-model="product.variants" />

          <div class="bg-white shadow-sm rounded-lg mt-4 p-4 d-flex">
            <div class="w-50 font-weight-bold text-secondary">
              Processing Time

              <div class="input-group mt-2 pr-5">
                <input type="text" v-model="product.processing_time" class="form-control w-50" />
                <div class="input-group-append">
                  <span class="input-group-text px-3">Days</span>
                </div>
              </div>
            </div>

            <div class="w-50 font-weight-bold text-secondary">
              Return Policy

              <div class="input-group mt-2">
                <select class="form-control" v-model="product.return_policy">
                  <option v-for="policy in return_policies" :key="policy.value" :value="policy.value"> {{ policy.name }}</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!--  -->
        <div class="w-25 mt-4 mt-lg-0">
          <div class="bg-white shadow-sm rounded-lg p-4">
            <div class="form-group">
              <label class="font-weight-bold text-secondary">Product Type</label>
              <select class="form-control" v-model="product.type">
                <option v-for="type in product_types" :key="type.value" :value="type.value"> {{ type.name }}</option>
              </select>
            </div>

            <div class="form-group">
              <label class="font-weight-bold text-secondary">Vendor</label>
              <select class="form-control" v-model="product.vendor">
                <option v-for="vendor in vendors" :key="vendor.value" :value="vendor.value"> {{ vendor.name }}</option>
              </select>
            </div>

            <div class="form-group">
              <label class="font-weight-bold text-secondary">Tags</label>
              <TagInput v-model="product.tags" placeholder="Enter tag then enter" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div></div>
  </div>
</template>

<script>
import constant from '@/utils/constant'
import Summernote from '@/components/Summernote'
import TagInput from '@/components/TagInput'

import ProductImages from './components/Images'
import ProductVariants from './components/Variants'
import { mapActions } from 'vuex'

export default {
  components: {
    Summernote,
    TagInput,
    ProductImages,
    ProductVariants
  },

  data() {
    return {
      isSubmiting: false,

      variants: [],

      product: {
        name: '',
        type: 1,
        vendor: 1,
        images: [],
        tags: [],
        variants: [],
        descriptions: null,
        processing_time: 10,
        return_policy: 1
      },

      product_types: [
        { name: 'Simple', value: 1 },
        { name: 'External/Affiliate product', value: 2 }
      ],

      vendors: [
        { name: 'Unknown', value: 1 },
        { name: 'Nike', value: 2 },
        { name: 'Adidas', value: 3 }
      ],

      return_policies: [
        { name: 'Return in 7 days', value: 1 },
        { name: 'Return in 15 days', value: 2 },
        { name: 'Return in 30 days', value: 3 }
      ],

      msg: '',

      PRODUCT_STATUS: constant.PRODUCT_STATUS
    }
  },

  methods: {
    ...mapActions({
      addProduct: 'products/addProduct'
    }),

    async onSubmit(status) {
      this.msg = ''
      if (!this.product.name) {
        this.msg = 'Product name must not be empty'
        return
      }

      if (!this.product.descriptions) {
        this.msg = 'Descriptions must not be empty'
        return
      }

      if (this.product.images.length === 0) {
        this.msg = 'Please select at least one image.'
        return
      }

      this.isSubmiting = true
      try {
        this.product.status = status

        console.log(this.product)
        await this.addProduct(this.product)
        this.$router.push('/products')
      } catch (e) {
      } finally {
        this.isSubmiting = false
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
