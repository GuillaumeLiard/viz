export const state = () => ({
  levels: [
    {
      direction: 'h',
      percentFilledSpace: 0.7,
      distributionType: 'spaceBetween'
    },
    {
      direction: 'h',
      percentFilledSpace: 0.7,
      distributionType: 'spaceBetween'
    },
    {
      direction: 'h',
      percentFilledSpace: 0.9,
      distributionType: 'spaceBetween'
    },
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
  },
  distributionTypeByDepth: state => depth => {
    const p = state.levels[depth].distributionType
    return p ? p : 'spaceBetween'
  }
}
