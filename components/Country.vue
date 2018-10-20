<template>
  <g
    class="country">
    <rect
      :width="countryWidth"
      :x="countryX"
      height="100%"
      fill="red" />
  </g>
</template>

<script>
// <text
// x="150"
// y="125"
// font-size="60"
// text-anchor="middle"
// fill="white">
// {{ name }}
// </text>
  export default {
    props: {
      name: {
        type: String,
        default: 'John Doe'
      },
      countryWidth: {
        type: Number,
        default: 10
      },
      countryX: {
        type: Number,
        default: 0
      },
    }
  }
</script>
