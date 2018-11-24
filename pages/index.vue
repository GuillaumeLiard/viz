<template>
  <section class="container">
    <div class="content">
      <Chart/>
      <p>(click)</p>
      <!-- <componentAnimated/> -->
    </div>
  </section>
</template>

<script>
import Chart from '~/components/Chart.vue'
import transition from '~/assets/js/transitions/page.js'
// import componentAnimated from '~/components/componentAnimated.vue'

export default {
  components: {
    Chart,
    // componentAnimated
  },
  transition: {
    enterActiveClass: "animated zoomInDown fast",
    leaveActiveClass: "animated zoomOutDown fast"
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/variables.scss';

.container {

  width: 100%;
  height: 100%;
  // min-height: 100vh;
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
