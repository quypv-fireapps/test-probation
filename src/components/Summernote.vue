<template>
  <textarea :name="name"></textarea>
</template>

<script>
require('summernote/dist/summernote-bs4')
require('summernote/dist/summernote-bs4.css')

export default {
  props: {
    value: {
      required: true
    },

    name: {
      type: String,
      required: true
    },

    height: {
      type: String,
      default: '200'
    }
  },

  mounted() {
    let config = {
      height: this.height,
      toolbar: [
        ['fontname', ['fontname']],
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['fontsize', ['fontsize']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['height', ['height']],
        ['insert', ['link', 'picture', 'video']]
      ]
    }

    let vm = this

    config.callbacks = {
      onInit: function() {
        $(vm.$el).summernote('code', vm.value)
      },

      onChange: function() {
        vm.$emit('input', $(vm.$el).summernote('code'))
      },

      onBlur: function() {
        vm.$emit('input', $(vm.$el).summernote('code'))
      }
    }

    $(this.$el).summernote(config)
  }
}
</script>

<style lang="scss" scoped></style>
