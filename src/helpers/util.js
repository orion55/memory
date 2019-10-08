function getObjById (state, id) {
  const obj = state.cards.find((element) => element.id === id)
  return (obj === undefined) ? null : obj
}

function getIndexById (state, id) {
  const idx = state.cards.findIndex((element) => element.id === id)
  return (idx === -1) ? null : idx
}

export { getObjById, getIndexById }
