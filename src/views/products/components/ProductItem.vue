<template>
  <tr class="product-row">
    <td>
      <input type="checkbox" v-model="checked" />
    </td>

    <td>
      <div class="d-flex align-items-center">
        <img class="product-thumbnail mr-3" :src="productInfo.thumbnail" :alt="productInfo.name" />
        {{ productInfo.name }}
      </div>
    </td>

    <td>Accessories</td>
    <td>$30</td>
    <td>
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
    width: 70px;
    height: 70px;
    object-fit: cover;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
  }
}
</style>
