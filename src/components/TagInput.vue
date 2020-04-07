<template>
  <div class="tag-input border-bottom">
    <div v-for="(item, i) in items" :key="i" class="tag">
      {{ item }}
      <fa class="tag-icon-close" :icon="['fas', 'times']" @click="deleteItem(i)" />
    </div>

    <input v-model="currentInput" type="text" :placeholder="placeholder" autocomplete="off" @keyup.enter="add" @keydown.delete="backspaceDelete" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => [],
      required: false
    },

    placeholder: {
      type: String,
      default: () => '',
      required: false
    }
  },

  data() {
    return {
      items: [],
      currentInput: ''
    }
  },

  created() {
    this.items = [...this.value]
  },

  methods: {
    add() {
      const { items, currentInput, set } = this
      ;((set && !items.includes(currentInput)) || !set) && items.push(currentInput)

      this.currentInput = ''
      this.update()
    },

    deleteItem(index) {
      this.items.splice(index, 1)
      this.update()
    },

    backspaceDelete({ which }) {
      if (which === 8 && this.currentInput === '') {
        this.items.splice(this.items.length - 1)
        this.update()
      }
    },

    update() {
      this.$emit('input', [...this.items])
    }
  }
}
</script>

<style lang="scss" scoped>
.tag-input {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  align-content: space-between;
  font-size: 15px;
  min-height: 30px;

  .tag {
    margin: 3px;
    background: #f6f6f6;
    padding: 5px 10px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    height: 30px;
    user-select: none;
  }

  .tag-icon-close {
    user-select: none;
    margin-left: 4px;
    cursor: pointer;
    font-size: 12px;
  }

  input {
    font-size: 15px;
    flex: 1 1 auto;
    width: 30px;
    border: none;
    outline: none;
    // color: #7c7d80;

    &::placeholder {
      color: #8795a1;
      font-weight: 300;
    }
  }
}
</style>
