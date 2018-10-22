export const spaceAround = (availableSpace, itemsCount, percentFilledSpace, itemIndex) => {
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

export const spaceBetween = (availableSpace, itemsCount, percentFilledSpace, itemIndex) => {
  const filledSpace = availableSpace * percentFilledSpace
  const itemSpace = filledSpace / itemsCount

  const emptySpace = availableSpace - filledSpace
  const gutterSpace = itemsCount > 1 ? emptySpace / (itemsCount - 1) : 0

  const itemPosition = (itemSpace + gutterSpace) * itemIndex

  return {
    itemSpace,
    itemPosition
  }
}
