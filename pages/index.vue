<template>
  <section class="container">
    <div class="content">
      <Chart/>
      <d3component/>
    </div>
  </section>
</template>

<script>
import Chart from '~/components/Chart.vue'
import d3component from '~/components/d3component.vue'

export default {
  components: {
    Chart,
    d3component
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
