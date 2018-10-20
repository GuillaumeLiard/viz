export const state = () => ({
  config: {
    containerWidth: 100,
    spaceBetween: 5
  },
  list:[
    {
      name: 'France',
    },
    {
      name: 'Espagne'
    },
    {
      name: 'Italie'
    }
  ]
})

export const getters = {
  getCountryList(state) {
    return state.list
  },
  getCount(state) {
    return state.list.length
  },
  getCountryWidth(state, getters) {
    const { spaceBetween, containerWidth } = state.config
    const count = getters.getCount
    return count > 0 ? ((containerWidth - ((count - 1) * spaceBetween))) / count : 0
  },
  get(state, getters) {
    return getters.getCountryList.map((country, index) => {
      const { marginLeft, spaceBetween } = state.config
      const width = getters.getCountryWidth
      return {
        name: country.name,
        width,
        x: (width + spaceBetween) * index,
      }
    })
  }
}
