<template lang="html">
  <g class="box">
    <Box
      v-for="(node, index) in nodes"
      :depth="depth + 1"
      :key="index"
      :nodes="node.nodes"
      :content-box="childContentBox(index)">
      <!-- {{ label }} -->
    </Box>
    <rect
      v-if="!nodes.length"
      :width="contentBox.width"
      :height="contentBox.height"
      :x="contentBox.x"
      :y="contentBox.y"
      fill="red" />
  </g>
</template>

<script>
  import { evenlySpaced1d } from '~/assets/js/grid.js'

  export default {
    name: 'Box',
    props: {
      depth: {
        type: Number,
        default: 0
      },
      nodes: {
        type: Array,
        default: () => []
      },
      label: {
        type: String,
        default: ''
      },
      contentBox: {
        type: Object,
        default: () => ({
          x: 0,
          y: 0,
          width: 0,
          height: 0
        })
      },
    },
    computed: {
      itemsCount: function() {
        return this.nodes.length
      },
      direction: function() {
        return this.$store.getters['viz/directionByDepth'](this.depth)
      },
      percentFilledSpace: function() {
        return this.$store.getters['viz/percentFilledSpaceByDepth'](this.depth)
      },
      availableSpace1d: function() {
        return (this.direction === 'h') ? this.contentBox.width : this.contentBox.height
      },
    },
    methods: {
      childContentBox: function(itemIndex) {
        const coord = evenlySpaced1d(this.availableSpace1d, this.itemsCount, this.percentFilledSpace, itemIndex)

        if (this.direction === 'h') {
          return {
            width: coord.itemSpace,
            height: this.contentBox.height,
            x: this.contentBox.x + coord.itemPosition,
            y: this.contentBox.y
          }
        } else {
          return {
            width: this.contentBox.width,
            height: coord.itemSpace,
            x: this.contentBox.x,
            y: this.contentBox.y + coord.itemPosition,
          }
        }
      }
    }
  };
</script>

<style scoped lang="scss">
</style>
