<template>
  <div class="product-image-item">
    <img :src="src" alt="Product item" width="100%" height="100%" />

    <div class="actions">
      <fa icon="trash" class="action-delete" @click="$emit('remove', index)" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
      required: false
    },

    index: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.product-image-item {
  width: 80px;
  height: 80px;
  overflow: hidden;
  position: relative;
  margin-right: 10px;
  margin-top: 10px;
  border-radius: 10px;
  user-select: none;

  img {
    object-fit: cover;
  }

  &:hover .actions {
    bottom: 0;
  }
}

.actions {
  position: absolute;
  bottom: -20px;
  height: 20px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  transition: all 0.2s linear;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 14px;
    cursor: pointer;
  }

  .action-delete {
    color: rgb(224, 67, 67);
  }
}
</style>
