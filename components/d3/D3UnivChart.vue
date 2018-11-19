
<template>
  <div class="view">
    <SvgUniversal class="main">
      <g >
        <path
          :d="makePath"
          class="line"/>
      </g>
    </SvgUniversal>
  </div>
</template>

<script>
import * as d3 from 'd3'

import SvgUniversal from '~/components/d3/SvgUniversal.vue'

export default {
  components: {
    SvgUniversal
  },
  data: function() {
    return {
      n: 21,
      width: 200,
      height: 100
    }
  },
  computed: {
    scaleX: function() {
      return d3.scaleLinear()
        .domain([0, this.n-1])
        .range([0, this.width])
    },
    scaleY: function() {
      return d3.scaleLinear()
      .domain([0, 1])
      .range([this.height, 0])
    },
    line: function() {
      const { scaleX, scaleY } = this
      const a = d3.line()
        .x(function(d, i) { return scaleX(i) }) // set the x values for the line generator
        .y(function(d) { return scaleY(d.y) }) // set the y values for the line generator
        .curve(d3.curveMonotoneX) // apply smoothing to the line
      return a
    },
    dataset: function() {
      return d3.range(this.n).map(function(d) { return {"y": d3.randomUniform(1)() } })
    },
    makePath: function() {
      return this.line(this.dataset)
    }
  }
}
</script>
<style scoped lang="scss">
.main{

  width: 100%;
  height: auto;
  border: 1px solid green;
}

.line {
  fill: none;
  stroke: #ffab00;
  stroke-width: 3;
}

</style>
