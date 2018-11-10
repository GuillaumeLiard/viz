<template>
  <section class="container">
    <div class="content">
      <D3component/>
    </div>
  </section>
</template>

<script>
import D3component from '~/components/d3/BlueBox.vue'

export default {
  components: {
    D3component
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
