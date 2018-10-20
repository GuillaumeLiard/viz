export const state = () => ({
  config: {
    containerWidth: 100,
    spaceBetweenTotal: 10
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
    },

  ]
})

export const getters = {
  getCountryList(state) {
    return state.list
  },
  getCount(state) {
    return state.list.length
  },
  getCountryWidth(state, { getCount }) {
    const { containerWidth, spaceBetweenTotal } = state.config
    return getCount > 0 ? ((containerWidth - spaceBetweenTotal)) / getCount : 0
  },
  getSpaceBetween(state, { getCount }) {
    const { spaceBetweenTotal } = state.config
    return getCount > 0 ?  spaceBetweenTotal / (getCount - 1) : 0
  },
  get(state, { getCountryList, getCountryWidth, getSpaceBetween }) {
    return getCountryList.map((country, index) => {
      const { marginLeft, spaceBetween } = state.config
      // const width = getters.getCountryWidth
      return {
        name: country.name,
        width: getCountryWidth,
        x: (getCountryWidth + getSpaceBetween) * index,
      }
    })
  }
}
