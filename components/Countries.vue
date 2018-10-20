<template>
  <g class="countries">
    <Country
      v-for="(country, index) in countries"
      :name="country.name"
      :country-x="country.x"
      :country-width="country.width"
      :key="index"/>
  </g>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Country from '~/components/Country'

  export default {
    components: {
      Country
    },
    computed: {
      ...mapGetters({
        'count': 'countries/getCount',
        'countries': 'countries/get'
      })
    }
  }
</script>
