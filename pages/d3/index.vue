<template>
  <section class="container">
    <div class="content">
      <h2>
        Example d3 Universal chart
      </h2>
      <D3UnivChart/>
      <a href="https://bl.ocks.org/gordlea/27370d1eea8464b04538e6d8ced39e89">
        link to original d3 chart
      </a>
      <h2>
        BlueBox d3 client side
      </h2>
      <BlueBox/>
      <h2>
        BlueBox Universal
      </h2>
      <BlueBoxUniversal/>
      <h2>
        Example d3 Component animated
      </h2>
      <D3component/>

    </div>
  </section>
</template>

<script>
import BlueBox from '~/components/d3/BlueBox.vue'
import BlueBoxUniversal from '~/components/d3/BlueBoxUniversal.vue'
import D3component from '~/components/d3/D3component.vue'
import D3UnivChart from '~/components/d3/D3UnivChart.vue'

export default {
  components: {
    BlueBox,
    BlueBoxUniversal,
    D3component,
    D3UnivChart
  },
  data: function() {
    return {
      points: [
        [0, 10],
        [1, 5],
        [2, 9]
      ]
    }
  },
  transition: {
    enterActiveClass: "animated rotateInUpRight faster",
    leaveActiveClass: "animated rotateOutUpRight faster"
  }
}
</script>

<style lang="scss">
@import '~assets/variables.scss';

.container {
  width: 100%;
  height: 100%;
  // min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
}

.content {
  width: $viz-width;
}
</style>
