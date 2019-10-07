import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let generateSimpleGrid = () => {
  const images = ['angular', 'aurelia', 'backbone', 'jest', 'jquery', 'nuxt', 'react', 'svelte', 'vue']
  let cards = []
  let card = {}
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      card = {
        id: i * 10 + j,
        url: 'svg/' + images[Math.floor(Math.random() * images.length)] + '.svg',
        item: `card__item-${i}-${j}`,
        isFlip: true,
        isShow: true
      }
      cards.push(card)
    }
  }
  return cards
}
export default new Vuex.Store({
  state: {
    cards: generateSimpleGrid()
  },
  mutations: {
    setFlip (state, id) {

    },
    getById (state, id) {
      const index = state.cards.find((element) => element.id === id)
      return (index === undefined) ? null : index
    }
  },
  actions: {},
})
