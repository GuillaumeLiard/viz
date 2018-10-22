export const evenlySpaced1d = (availableSpace, itemsCount, percentFilledSpace, itemIndex) => {
  const filledSpace = availableSpace * percentFilledSpace
  const itemSpace = filledSpace / itemsCount

  const emptySpace = availableSpace - filledSpace
  const gutterSpace = emptySpace / itemsCount

  const itemPosition = 0.5 * gutterSpace + (itemSpace + gutterSpace) * itemIndex

  return {
    itemSpace,
    itemPosition
  }
}
