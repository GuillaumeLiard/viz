export const state = () => ({
  levelDirections: [
    'v', 'h'
  ]
})

export const getters = {
  directionByDepth: state => depth => {
    const d = state.levelDirections[depth]
    return d ? d : 'h'
  }
}
