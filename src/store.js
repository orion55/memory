import Vue from 'vue'
import Vuex from 'vuex'
import { generateGrid, generateUsers } from './helpers/generators'
import * as util from './helpers/util'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: generateGrid(),
    hasFlippedCard: false,
    firstCard: null,
    secondCard: null,
    firstTimeoutID: 0,
    secondTimeoutID: 0,
    currentTime: 0,
    timer: 0,
    rating: generateUsers(),
    userName: 'noName',
    curPosition: 99,
  },
  getters: {
    isFinish (state) {
      return state.cards.every(elem => !elem.isShow)
    },
  },
  mutations: {
    setFlip (state, {id, flag}) {
      const obj = util.getObjById(state, id)
      if (obj) {
        obj.isFlip = flag
        Vue.set(state.cards[util.getIndexById(state, id)], 'cards', obj)
      }
    },
    setShow (state, {id, flag}) {
      const obj = util.getObjById(state, id)
      if (obj) {
        obj.isShow = flag
        Vue.set(state.cards[util.getIndexById(state, id)], 'cards', obj)
      }
    },
    createCards (state) {
      state.cards = generateGrid()
    },
    resetBoard (state) {
      util.resetBoard(state)
    },
    setTimer (state, id) {
      state.timer = id
    },
    stopTimer (state) {
      clearTimeout(state.timer)
      state.timer = 0
    },
    setCurrentTime (state, num) {
      state.currentTime = num
    },
    addCurrentTime (state) {
      state.currentTime++
    },
    setUserName (state, name) {
      state.userName = name
    },
    changeRating (state, userTime) {
      let idx = state.rating.findIndex((item) => item.timeUser > userTime)
      state.rating.splice(idx, 0, {
        nameUser: state.userName,
        timeUser: userTime,
      })
      state.rating = state.rating.slice(0, 9);
      state.curPosition = idx
    },
  },
  actions: {
    flipCard ({state, commit}, id) {
      const obj = util.getObjById(state, id)
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

        util.resetUnflipCards(state, commit)

        if (!state.hasFlippedCard) {
          state.hasFlippedCard = true
          state.firstCard = obj
          util.unflipSingleCard(state, commit)
        } else {
          util.resetUnflipSingleCard(state)
          state.hasFlippedCard = false
          state.secondCard = obj
          util.checkForMatch(state, commit)
        }
      }
    },
    startTimer ({state, commit}) {
      commit('setCurrentTime', 0)
      commit('setTimer', setInterval(() => { commit('addCurrentTime') }, 1000))
    },

  },
})


