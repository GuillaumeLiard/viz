export const state = () => ({
  levels: [
    {
      direction: 'h',
      percentFilledSpace: 1,
      distributionType: 'spaceBetween'
    },
    {
      direction: 'h',
      percentFilledSpace: 0.6,
      distributionType: 'spaceAround'
    },
    {
      direction: 'v',
      percentFilledSpace: 0.618,
      distributionType: 'spaceBetween'
    },
    {
      direction: 'h',
      percentFilledSpace: 0.4,
      distributionType: 'spaceAround'
    },
    {
      direction: 'v',
      percentFilledSpace: 0.141,
      distributionType: 'spaceBetween'
    },
    {
      direction: 'h',
      percentFilledSpace: 0.5,
      distributionType: 'spaceAround'
    },
    {
      direction: 'h',
      percentFilledSpace: 0.5,
      distributionType: 'spaceAround'
    },
    {
      direction: 'h',
      percentFilledSpace: 0.5,
      distributionType: 'spaceAround'
    },
    {
      direction: 'h',
      percentFilledSpace: 0.5,
      distributionType: 'spaceAround'
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
