<template>
  <div class="bg-white shadow-sm rounded-lg mt-4 p-4">
    <div class="d-flex justify-content-between">
      <h6 class="text-secondary">Product Images</h6>

      <div class="">
        <input type="file" multiple="multiple" name="file" id="file" @change="onChoose" class="inputfile" />
        <label for="file">
          <fa icon="upload" />
          Upload Images
        </label>
      </div>
    </div>

    <div class="d-flex flex-wrap">
      <ImageItem v-for="(item, i) in images" :key="i + item" :src="item" :index="i" @remove="onRemove" />
    </div>
  </div>
</template>

<script>
import ImageItem from './ImageItem'

export default {
  components: {
    ImageItem
  },

  props: {
    value: {
      type: Array,
      default: () => [],
      required: true
    }
  },

  data() {
    return {
      images: []
    }
  },

  watch: {
    images(val) {
      this.$emit('input', val)
    }
  },

  methods: {
    async onChoose(evt) {
      this.images = await this.tobase64Handler(evt.target.files)
    },

    async tobase64Handler(files) {
      const filePathsPromises = []

      files.forEach(file => {
        filePathsPromises.push(this.toBase64(file))
      })

      const filePaths = await Promise.all(filePathsPromises)
      // const mappedFiles = filePaths.map(base64File => ({ selectedFile: base64File }))
      return filePaths
    },

    toBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })
    },

    onRemove(index) {
      this.images.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.inputfile + label {
  display: inline-block;
  cursor: pointer;
}
</style>
