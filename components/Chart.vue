<template>
  <svg
    :viewBox="viewBoxString"
    class="main"
    version="1.1"
    baseProfile="full"
    width="100"
    height="50"
    xmlns="http://www.w3.org/2000/svg"
    @click="nextChoice">

    <Box
      :nodes="nodes"
      :label="label"
      :content-box="viewBoxObject"
    />
  </svg>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  import Box from '~/components/Box'

  export default {
    components: {
      Box
    },
    data: () => {
      return {
        // todo merge
        viewBoxString: "0 0 100 50",
        viewBoxObject: {
          x: 0,
          y: 0,
          width: 100,
          height: 50
        }
      }
    },
    computed: {
      ...mapGetters({
        label: 'tree/getLabel',
        color: 'tree/getColor',
        nodes: 'tree/getNodes'
      }),
    },
    methods: {
      ...mapMutations({
        nextChoice: 'tree/nextChoice'
      }),
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    width: 100%;
    height: auto;
    border: 1px solid green;
  }
</style>
