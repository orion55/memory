function getObjById (state, id) {
  const obj = state.cards.find((element) => element.id === id)
  return (obj === undefined) ? null : obj
}

function getIndexById (state, id) {
  const idx = state.cards.findIndex((element) => element.id === id)
  return (idx === -1) ? null : idx
}

function checkForMatch (state, commit, getters) {
  if (state.firstCard.nameCard === state.secondCard.nameCard) {
    disableCards(state, commit, getters)
  } else {
    unflipCards(state, commit)
  }
}

function disableCards (state, commit, getters) {
  setTimeout(() => {
    commit(
      'setShow',
      {
        id: state.firstCard.id,
        flag: false,
      })
    commit(
      'setShow',
      {
        id: state.secondCard.id,
        flag: false,
      })
    resetBoard(state)
    console.log(getters.isFinish)
  }, 500)
}

function unflipCards (state, commit) {
  state.secondTimeoutID = setTimeout(() => {
    commit(
      'setFlip',
      {
        id: state.firstCard.id,
        flag: false,
      })
    commit(
      'setFlip',
      {
        id: state.secondCard.id,
        flag: false,
      })
    resetBoard(state)
  }, 1500)
}

function unflipSingleCard (state, commit) {
  state.firstTimeoutID = setTimeout(() => {
    commit(
      'setFlip',
      {
        id: state.firstCard.id,
        flag: false,
      })
    resetBoard(state)
  }, 1500)
}

function resetBoard (state) {
  state.hasFlippedCard = false
  state.firstCard = null
  state.secondCard = null
  state.firstTimeoutID = 0
  state.secondTimeoutID = 0
}

function resetUnflipCards (state, commit) {
  if (state.secondTimeoutID !== 0) {
    clearTimeout(state.secondTimeoutID)
    commit(
      'setFlip',
      {
        id: state.firstCard.id,
        flag: false,
      })
    commit(
      'setFlip',
      {
        id: state.secondCard.id,
        flag: false,
      })
    resetBoard(state)
  }
}

function resetUnflipSingleCard (state, commit) {
  if (state.firstTimeoutID !== 0) {
    clearTimeout(state.firstTimeoutID)
    state.firstTimeoutID = 0
  }
}

export {
  getObjById,
  getIndexById,
  checkForMatch,
  resetUnflipCards,
  unflipSingleCard,
  resetUnflipSingleCard,
}
