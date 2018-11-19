<template>
  <section class="container">
    <nuxt-link
      class="toD3"
      to="/d3">goto d3 components
    </nuxt-link>
    <div class="content">
      <Chart/>
      <p>(click)</p>
      <!-- <componentAnimated/> -->
    </div>
  </section>
</template>

<script>
import Chart from '~/components/Chart.vue'
// import componentAnimated from '~/components/componentAnimated.vue'

export default {
  components: {
    Chart,
    // componentAnimated
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/variables.scss';

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.content {
  width: $viz-width;
  cursor: pointer;
}

.toD3 {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 22px;
}
</style>
