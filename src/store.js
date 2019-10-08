import Vue from 'vue'
import Vuex from 'vuex'
import { generateGrid } from './helpers/grid'
import { getObjById, getIndexById, checkForMatch, resetBoard } from './helpers/util'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: generateGrid(),
    hasFlippedCard: false,
    firstCard: null,
    secondCard: null,
    timeoutID: 0,
  },
  mutations: {
    setFlip (state, {id, flag}) {
      const obj = getObjById(state, id)
      if (obj) {
        let cardsTmp = state.cards
        obj.isFlip = flag
        cardsTmp[getIndexById(state, id)] = obj
        Vue.set(state, 'cards', cardsTmp)
      }
    },
    setShow (state, {id, flag}) {
      const obj = getObjById(state, id)
      if (obj) {
        let cardsTmp = state.cards
        obj.isShow = flag
        cardsTmp[getIndexById(state, id)] = obj
        Vue.set(state, 'cards', cardsTmp)
      }
    },
  },
  actions: {
    flipCard ({state, commit}, id) {
      const obj = getObjById(state, id)
      if (obj) {
        commit('setFlip', {id: id, flag: !obj.isFlip,})

        if (state.timeoutID !== 0) {
          clearTimeout(state.timeoutID)
          state.timeoutID = 0
          commit('setFlip', {id: state.firstCard.id, flag: false})
          commit('setFlip', {id: state.secondCard.id, flag: false})
          resetBoard(state)
        }

        if (!state.hasFlippedCard) {
          state.hasFlippedCard = true
          state.firstCard = obj
        } else {
          state.hasFlippedCard = false
          state.secondCard = obj
          checkForMatch(state, commit)
        }
      }
    },
  },
})


