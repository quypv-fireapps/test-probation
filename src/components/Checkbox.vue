<template>
  <div class="v-checkbox">
    <input type="checkbox" :value="val" v-model="checked" @change="onChange" :id="id" />
    <label class="checkmark" :for="id"></label>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [Boolean, Array],
      default: null
    },

    val: {
      type: [Object, String, Number, Boolean],
      default: null
    }
  },

  data() {
    return {
      id: null,
      checkedProxy: false
    }
  },

  computed: {
    checked: {
      get() {
        return this.value
      },

      set(val) {
        this.checkedProxy = val
      }
    }
  },

  mounted() {
    this.id = this._uid
  },

  methods: {
    onChange() {
      this.$emit('input', this.checkedProxy)
    }
  }
}
</script>

<style lang="scss" scoped>
.v-checkbox {
  display: block;
  position: relative;
  cursor: pointer;
  height: 22px;
  width: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.v-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  width: 22px;
  border-radius: 4px;
  background-color: #ccc;
  cursor: pointer;
}

.v-checkbox:hover input ~ .checkmark {
  background-color: #ccc;
}

.v-checkbox input:checked ~ .checkmark {
  background-color: #2196f3;
}

.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

.v-checkbox input:checked ~ .checkmark:after {
  display: block;
}

.v-checkbox .checkmark:after {
  left: 8px;
  top: 2px;
  width: 6px;
  height: 15px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
