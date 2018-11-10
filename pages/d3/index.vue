<template>
  <section class="container">
    <div class="content">
      <h2>
        BlueBox d3 client side
      </h2>
      <BlueBox/>
      <h2>
        BlueBox Universal
      </h2>
      <BlueBoxUniversal/>
    </div>
  </section>
</template>

<script>
import BlueBox from '~/components/d3/BlueBox.vue'
import BlueBoxUniversal from '~/components/d3/BlueBoxUniversal.vue'

export default {
  components: {
    BlueBox,
    BlueBoxUniversal
  },
  data: function() {
    return {
      points: [
        [0, 10],
        [1, 5],
        [2, 9]
      ]
    }
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
