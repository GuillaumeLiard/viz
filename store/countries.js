export const state = () => ({
  config: {
    containerWidth: 100,
    spaceBetweenTotalWidth: 10
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
  list(state) {
    return state.list
  },
  count(state) {
    return state.list.length
  },
  itemWidth(state, { count }) {
    const { containerWidth, spaceBetweenTotalWidth } = state.config
    return count > 0 ? ((containerWidth - spaceBetweenTotalWidth)) / count : 0
  },
  spaceBetween(state, { count }) {
    const { spaceBetweenTotalWidth } = state.config
    return count > 0 ?  spaceBetweenTotalWidth / (count - 1) : 0
  },
  get(state, { list, itemWidth, spaceBetween }) {
    return list.map((item, index) => {
      return {
        name: item.name,
        width: itemWidth,
        x: (itemWidth + spaceBetween) * index,
      }
    })
  }
}
