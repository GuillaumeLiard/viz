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
  spaceBetweenTotal(state, getters) {
    const { spaceBetween, containerWidth } = state.config
    const count = getters.getCount
    return count > 1 ? ((count - 1) * spaceBetween) : 0
  },
  getCountryWidth(state, getters) {
    const { containerWidth } = state.config
    const { getCount, spaceBetweenTotal} = getters
    return getCount > 0 ? ((containerWidth - spaceBetweenTotal)) / getCount : 0
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
