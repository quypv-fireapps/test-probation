<template>
  <div v-if="isShow" class="pagination">
    <div v-for="(page, i) in items" :key="i" :class="`page-item ${page === current ? 'active' : ''}`" @click="changePage(page)">
      <a v-if="page !== '...'" class="page-link active">
        {{ page }}
      </a>

      <a v-else class="page-link">
        <fa :icon="['fas', 'ellipsis-h']" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 0,
      required: true
    },

    total: {
      type: Number,
      default: 0,
      required: true
    }
  },

  data() {
    return {
      pageGoto: this.current
    }
  },

  computed: {
    items() {
      return this.pagination(this.current, this.total)
    },

    isShow() {
      return this.total && this.total > 1
    }
  },

  watch: {
    current(val) {
      this.pageGoto = val
    }
  },

  methods: {
    changePage(page) {
      if (page !== '...') {
        this.$emit('change', page)
      }
    },

    isInt(n) {
      try {
        let rs = /^[0-9]+$/g.test(n)
        return rs
      } catch (error) {
        return false
      }
    },

    pagination(currentPage, pageCount) {
      if (!currentPage && !pageCount) {
        return []
      }
      let delta = 2
      let left = currentPage - delta
      let right = currentPage + delta + 1
      let result = []

      result = Array.from({ length: pageCount }, (v, k) => k + 1).filter(i => i && i >= left && i < right)

      if (result.length > 1) {
        // Add first page and dots
        if (result[0] > 1) {
          if (result[0] > 2) {
            result.unshift('...')
          }
          result.unshift(1)
        }

        // Add dots and last page
        if (result[result.length - 1] < pageCount) {
          if (result[result.length - 1] !== pageCount - 1) {
            result.push('...')
          }
          result.push(pageCount)
        }
      }

      return result
    }
  }
}
</script>

<style lang="scss" scoped>
.page-link {
  user-select: none;
  cursor: pointer;
}
</style>
