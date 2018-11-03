<template>
  <section class="container">
    <div class="content">
      <Chart/>
      <componentAnimated/>
    </div>
  </section>
</template>

<script>
import Chart from '~/components/Chart.vue'
import componentAnimated from '~/components/componentAnimated.vue'

export default {
  components: {
    Chart,
    componentAnimated
  }
}
</script>

<style lang="scss">
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
}
</style>
