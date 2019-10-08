import Vue from 'vue'
import Vuex from 'vuex'
import { generateGrid } from './helpers/grid'
import {
  checkForMatch,
  getIndexById,
  getObjById,
  resetUnflipCards,
  resetUnflipSingleCard,
  unflipSingleCard,
} from './helpers/util'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: generateGrid(),
    hasFlippedCard: false,
    firstCard: null,
    secondCard: null,
    firstTimeoutID: 0,
    secondTimeoutID: 0,
  },
  getters: {
    isFinish (state) {
      return state.cards.every(elem => !elem.isShow)
    },
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
    flipCard ({state, commit, getters}, id) {
      const obj = getObjById(state, id)
      if (obj) {
        if (obj === state.firstCard || obj === state.secondCard) {
          return
        }
        commit(
          'setFlip',
          {
            id: id,
            flag: !obj.isFlip,
          })

        resetUnflipCards(state, commit)

        if (!state.hasFlippedCard) {
          state.hasFlippedCard = true
          state.firstCard = obj
          unflipSingleCard(state, commit)
        } else {
          resetUnflipSingleCard(state, commit)
          state.hasFlippedCard = false
          state.secondCard = obj
          checkForMatch(state, commit, getters)
        }
      }
    },
  },
})


