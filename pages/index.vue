<template>
  <section class="container">
    <div class="content">
      <Chart/>
    </div>
  </section>
</template>

<script>
import Chart from '~/components/Chart.vue'

export default {
  components: {
    Chart
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
  &::before {
    content: '';
    width: 50px;
    height: 50px;
    background-color: blue;
  }
}

.content {
  width: $viz-width;
}
</style>
