<template lang="html">
  <g class="box">
    <Box
      v-for="(node, index) in nodes"
      :depth="depth + 1"
      :key="index"
      :nodes="node.nodes"
      :content-box="computeSpace(index)">
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
    data: () => ({
      percentFilledSpace: 0.8
    }),
    computed: {
      itemsCount: function() {
        return this.nodes.length
      },
      direction: function() {
        return this.$store.getters['viz/directionByDepth'](this.depth)
      }
    },
    methods: {
      computeSpace: function(itemIndex) {
        const availableSpace = (this.direction === 'h') ? this.contentBox.width : this.contentBox.height
        const coord = evenlySpaced1d(availableSpace, this.itemsCount, this.percentFilledSpace, itemIndex)

        if (this.direction === 'h') {
          return {
            width: coord.itemSpace,
            height: '100%',
            x: coord.itemPosition,
            y: 0,
          }
        } else {
          return {
            width: '100%',
            height: coord.itemSpace,
            x: 0,
            y: coord.itemPosition,
          }
        }
      }
    }
  };
</script>

<style scoped lang="scss">
</style>
