<template>
  <svg
    class="main"
    version="1.1"
    baseProfile="full"
    width="100"
    height="50"
    viewBox="0 0 100 50"
    xmlns="http://www.w3.org/2000/svg">

    <Countries/>
  </svg>
</template>

<script>
  import Countries from '~/components/Countries'

  export default {
    components: {
      Countries
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
