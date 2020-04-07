<template>
  <div class="bg-white shadow-sm rounded-lg mt-4 p-4">
    <h6 class="text-secondary">Add Variants if this product comes in multiple verions</h6>

    <div class="d-flex pt-4 align-items-center" v-for="(item, i) in options" :key="i">
      <div class="w-25">
        <input type="text" class="form-control" v-model="options[i].name" />
      </div>

      <div class="flex-grow-1 pl-4">
        <TagInput v-model="options[i].items" placeholder="Enter variants" />
      </div>

      <div>
        <fa icon="trash" @click="removeOption(i)" style="cursor: pointer;" />
      </div>
    </div>

    <div class="py-3">
      <span class="text-primary" @click="addMoreVariant" style="cursor: pointer;">
        <fa icon="plus" class="mr-2" />
        Add more variant
      </span>
    </div>

    <div class="mt-4" v-if="variants && variants.length > 0">
      <h6 class="text-secondary">
        Modify the variants to be created
      </h6>
    </div>

    <div class="d-flex flex-column mt-4" v-if="variants && variants.length > 0">
      <!--  -->
      <div class="d-flex align-items-center" style="padding-left: 40px;">
        <div class="flex-grow-1 w-25">
          <strong>Variants</strong>
        </div>

        <div class="flex-grow-1 w-25">
          <strong>Price</strong>
        </div>

        <div class="flex-grow-1 w-25">
          <strong>SKU</strong>
        </div>

        <div class="flex-grow-1 w-25">
          <strong>Inventory</strong>
        </div>
      </div>
      <!--  -->
      <div class="d-flex mt-3 align-items-center" v-for="item in variants" :key="item.value">
        <div class="d-flex align-items-center" style="width: 40px;">
          <!-- <input type="checkbox" :value="item" v-model="selectedVariants" /> -->
          <v-checkbox :val="item" v-model="selectedVariants" />
        </div>

        <div class="pr-4 w-25">
          <input type="text" class="form-control" :value="item.value" readonly />
        </div>

        <div class="pr-4 w-25">
          <input type="text" class="form-control" v-model="item.price" />
        </div>

        <div class="pr-4 w-25">
          <input type="text" class="form-control" v-model="item.sku" />
        </div>

        <div class="pr-4 w-25">
          <input type="text" class="form-control" v-model="item.inventory" />
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script>
import TagInput from '@/components/TagInput'

export default {
  components: {
    TagInput
  },

  data() {
    return {
      options: [],

      variants: [],

      selectedVariants: []
    }
  },

  watch: {
    mixedVariants(arr) {
      if (arr && arr.length > 0) {
        this.variants = this.mixedVariants.map(item => {
          return {
            value: item,
            price: 100,
            sku: 'SKU',
            inventory: 50
          }
        })
      } else {
        this.variants = []
      }
    },

    selectedVariants(val) {
      this.$emit('input', JSON.parse(JSON.stringify(val)))
    }
  },

  computed: {
    deepOptions() {
      return JSON.parse(JSON.stringify(this.options))
    },

    mixedVariants() {
      const arr = []

      this.deepOptions.forEach(option => {
        if (option.items && option.items.length > 0) {
          arr.push(option.items)
        }
      })

      if (arr.length === 1) {
        return arr[0]
      }

      let mixedArr = []

      for (let i = 0; i < arr.length - 1; i++) {
        if (i === 0) {
          mixedArr = arr[0]
        }
        mixedArr = this.mixArray(mixedArr, arr[i + 1])
      }

      return mixedArr
    }
  },

  created() {
    if (this.mixedVariants && this.mixedVariants.length > 0) {
      this.variants = this.mixedVariants.map(item => {
        return {
          value: item,
          price: 100,
          sku: 'SKU',
          inventory: 50
        }
      })
    }
  },

  methods: {
    addMoreVariant() {
      this.options.push({
        name: '',
        items: []
      })
    },

    mixArray(currentArr, nextArr) {
      let arr = []

      currentArr.forEach(a => {
        nextArr.forEach(b => {
          arr.push(`${a}, ${b}`)
        })
      })
      return arr
    },

    removeOption(index) {
      this.options.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped></style>
