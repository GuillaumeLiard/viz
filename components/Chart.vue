<template>
  <svg
    :viewBox="viewBoxString"
    class="main"
    version="1.1"
    baseProfile="full"
    width="100"
    height="50"
    xmlns="http://www.w3.org/2000/svg">

    <!-- <Countries/> -->
    <Box
      :nodes="nodes"
      :label="label"
      :content-box="viewBoxObject"
    />
  </svg>
</template>

<script>
  import { mapGetters } from 'vuex'
  // import Countries from '~/components/Countries'
  import Box from '~/components/Box'

  export default {
    components: {
      // Countries
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
        nodes: 'tree/getNodes'
      }),
    }
  }
</script>

<style lang="scss">
  .main {
    width: 100%;
    height: auto;
    border: 1px solid green;
  }
</style>
