import Vue from 'vue'
import Vuex from 'vuex'
import { generateGrid } from './helpers/grid'
import { getObjById, getIndexById } from './helpers/util'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: generateGrid(),
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
    flipCard (state, id) {
      const obj = getObjById(state, id)
      if (obj) {
        this.commit(
          'setFlip',
          {
            id: id,
            flag: !obj.isFlip,
          })
      }
    },
  },
  actions: {},
})


