<template lang="html">
  <g class="box">
    <transition-group
      name="list"
      tag="g">
      <Box
        v-for="(node, index) in nodes"
        :depth="depth + 1"
        :key="index"
        :nodes="node.nodes"
        :color="node.color"
        :content-box="childContentBox(index)">
        <!-- {{ label }} -->
      </Box>
    </transition-group>
    <transition
      name="fade"
      mode="in-out">
      <rect
        v-if="!nodes.length"
        :width="contentBox.width"
        :height="contentBox.height"
        :x="contentBox.x"
        :y="contentBox.y"
        :fill="color" />
    </transition>
  </g>
</template>

<script>
  import { spaceAround, spaceBetween } from '~/assets/js/grid.js'

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
      color: {
        type: String,
        default: 'green'
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
      distributionType: function() {
        return this.$store.getters['viz/distributionTypeByDepth'](this.depth)
      },
      makeCoord: function() {
        return (this.distributionType === 'spaceAround') ? spaceAround : spaceBetween
      },
      availableSpace1d: function() {
        return (this.direction === 'h') ? this.contentBox.width : this.contentBox.height
      },
    },
    methods: {
      childContentBox: function(itemIndex) {
        const coord = this.makeCoord(this.availableSpace1d, this.itemsCount, this.percentFilledSpace, itemIndex)

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
  .fade-enter-active {
    transition: all 0.4s ease;
  }
  .fade-leave-active {
    transition: all 0.2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-enter, .fade-leave-to
    /* .fade-leave-active below version 2.1.8 */ {
    transform: translateX(100px);
    opacity: 0;
  }

  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 0.5s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
  .list-move {
    transition: transform 0.5s;
  }
  </style>
