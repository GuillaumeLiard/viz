<template>
  <SvgUniversal class="main">
    <g >
      <path
        :d="path"
        class="line"/>
    </g>
  </SvgUniversal>
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
      data: [
        {date: new Date(2007, 3, 24), value: 93.24},
        {date: new Date(2007, 3, 25), value: 95.35},
        {date: new Date(2007, 3, 26), value: 98.84},
        {date: new Date(2007, 3, 27), value: 99.92},
        {date: new Date(2007, 3, 30), value: 99.80},
        {date: new Date(2007, 4,  1), value: 99.47},
      ]
    }
  },
  computed: {
    x: function() {
      return d3.scaleLinear()
      .domain([10, 130])
      .range([0, 960])
    },
    y: function() {
      return d3.scaleLinear()
      .domain([10, 130])
      .range([0, 960])
    },
    // area: function() {
    //   return d3.area()
    //   .x(function(d) { return this.x(d.date); })
    //   .y1(function(d) { return this.y(d.value); })
    //   .y0(this.y(0))
    // },
    // path: function() {
    //   return this.area(this.data)
    // }
    path: function() {
      return ''
    }
  },
  mounted: function() {

  }
}
</script>
<style scoped lang="scss">
</style>
