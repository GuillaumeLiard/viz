<template lang="html">
  <g class="box">
    <Box
      v-for="(node, index) in nodes"
      :key="index"
      :nodes="node.nodes">
      <!-- {{ label }} -->
    </Box>
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
    }
  };
</script>

<style scoped lang="scss">
</style>
