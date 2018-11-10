<template>
  <div class="view">
    text
  </div>
</template>

<script>
import * as d3 from 'd3'
export default {
  mounted () {
    // console.log(
      d3.select('.view')
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
