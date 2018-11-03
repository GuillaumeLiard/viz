
<template>
  <div class="">
    <transition>
      <h1 v-if="show">About</h1>
    </transition>
    <button
      type="button"
      name="button"
      @click="show=!show">
      show
    </button>
  </div>
</template>

<script>
import * as d3 from 'd3'
export default {
  data: function() {
    return {
      show: true
    }
  },
  mounted () {
    // console.log(
      d3.select('h1')
        .append('svg')
        .attr('width', 200)
        .attr('height', 100)
        .append('g')
        .append('rect')
        .attr('width', 100)
        .attr('height', 100)
        .attr('x', 50)
        .attr('y', 0)
        .attr('style', 'fill:rgb(0,0,255);')
      // )
  }
}
</script>
<style scoped lang="scss">
  h1 {

    display: block;
  }
  .v-enter {
    opacity: 0;
    transform: translateX(-100px);
  }
  .v-enter-to {
    opacity: 1;
    transform: translateX(0);
  }
  .v-enter-active {
    transition:
      opacity 2s,
      transform 0.5s 1s
  }
  .v-leave {
    transform: translateX(0);
  }
  .v-leave-to {
    transform: translateX(100px);
    opacity: 0.5;
  }
  .v-leave-active {
    /* transition: all ease 1s; */
  }
</style>
