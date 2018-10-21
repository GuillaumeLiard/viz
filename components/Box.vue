<template lang="html">
  <g class="box">
    <Box
      v-for="(node, index) in nodes"
      :key="index"
      :nodes="node.nodes">
      <!-- {{ label }} -->
    </Box>
    <rect
      v-if="!nodes.length"
      width="50"
      x="0"
      y="0"
      height="100%"
      fill="red" />
  </g>
</template>

<script>
  export default {
    name: 'Box',
    props: {
      nodes: {
        type: Array,
        default: () => []
      },
      label: {
        type: String,
        default: ''
      },
      contentBoundingBox: {
        type: Object,
        default: () => ({
          x: 0,
          y: 0,
          width: 200,
          height: 200
        })
      },
    },
    computed: {

    }
  };
</script>

<style scoped lang="scss">
</style>
