export const state = () => ({
  levels: [
    {
      direction: 'h',
      percentFilledSpace: 0.9
    },
    {
      direction: 'h',
      percentFilledSpace: 0.99
    }
  ]
})

export const getters = {
  directionByDepth: state => depth => {
    const d = state.levels[depth].direction
    return d ? d : 'h'
  },
  percentFilledSpaceByDepth: state => depth => {
    const p = state.levels[depth].percentFilledSpace
    return p ? p : 100
  }
}
