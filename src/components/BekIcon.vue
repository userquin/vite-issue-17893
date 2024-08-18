<script>
// define sprites at module scope
const sprites = Object.entries(
  import.meta.glob('/src/assets/svg-sprites/*.svg', { eager: true })
).reduce((acc, [path, sprite]) => {
  acc[path.replace('/src/assets/svg-sprites/', '')] = sprite.default
  return acc
}, {})
// console.log(sprites)
</script>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    required: true,
    validator(value) {
      const [iconSet, iconName] = value.split(':')
      if (!iconName) {
        console.error(
          `Invalid icon format: "${value}". Must be in the format "svg-sprite-name:icon-name"`
        )
        return false
      }
      console.log(iconSet, sprites[`${iconSet}.svg`])
      if (!sprites[`${iconSet}.svg`]) {
        console.error(`Icon set "${iconSet}" not found`)
        return false
      }

      return true
    }
  },
  size: {
    type: [String, Number],
    default: '24'
  },
  className: {
    type: String,
    default: ''
  }
})

const svgUrl = computed(() => {
  const [iconSet, iconName] = props.icon.split(':')
  const sprite = sprites[`${iconSet}.svg`]
  return `${sprite}#${iconName}`
})
</script>

<template>
  <svg class="icon" :class="className" :width="size" :height="size">
    <use :xlink:href="svgUrl"></use>
  </svg>
</template>

<style scoped>
.icon {
  display: inline-block;
  vertical-align: middle;
}
</style>
