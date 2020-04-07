<template>
  <tr class="product-row">
    <td class="align-middle">
      <v-checkbox :val="productInfo.id" v-model="checked" />
    </td>

    <td>
      <img class="product-thumbnail mr-3" :src="productInfo.thumbnail" :alt="productInfo.name" />
      {{ productInfo.name }}
    </td>

    <td class="align-middle">Accessories</td>
    <td class="align-middle">$30</td>
    <td class="align-middle">
      <strong>150 in stocks</strong>
      <p class="mb-0">
        For 50 variants
      </p>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    productInfo: {
      type: Object,
      default: () => {},
      required: true
    }
  },

  data() {
    return {
      checked: false
    }
  },

  watch: {
    checked(val) {
      if (val === true) {
        this.$emit('selected', this.productInfo.id)
      } else {
        this.$emit('unselected', this.productInfo.id)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.product-row {
  .product-thumbnail {
    border-radius: 5px;
    width: 60px;
    height: 60px;
    object-fit: cover;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
  }
}
</style>
