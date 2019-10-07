import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function generateSimpleGrid () {
  const images = ['angular', 'aurelia', 'backbone', 'jest', 'jquery', 'nuxt', 'react', 'svelte', 'vue']
  let cards = []
  let card = {}
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      card = {
        id: i * 10 + j,
        url: 'svg/' + images[Math.floor(Math.random() * images.length)] + '.svg',
        item: `card__item-${i}-${j}`,
        isFlip: false,
        isShow: true,
      }
      cards.push(card)
    }
  }
  return cards
}

function generateGrid () {
  const countCards = 18
  const countCells = 6
  const names = ['angular', 'aurelia', 'backbone', 'jest', 'jquery', 'nuxt', 'react', 'svelte', 'vue']

  let cards = []
  let card = {}
  let grid = []
  let i = 0, j = 0

  for (i = 0; i < countCells; i++) {
    grid[i] = []
    for (j = 0; j < countCells; j++) {
      grid[i][j] = 0
    }
  }

  j = 0
  for (i = 0; i < countCards; i++) {
    let x = 0, y = 0
    do {
      x = Math.floor(Math.random() * countCells)
      y = Math.floor(Math.random() * countCells)
    } while (grid[x][y] !== 0)
    grid[x][y] = 1

    card = {
      id: i,
      name: names[j],
      url: 'svg/' + names[j] + '.svg',
      item: `card__item-${x}-${y}`,
      isFlip: false,
      isShow: true,
    }
    cards.push(card)

    if ((i + 1) % 2) {
      j++
    }
  }
  console.log(cards)
  return cards
}

function getObjById (state, id) {
  const obj = state.cards.find((element) => element.id === id)
  return (obj === undefined) ? null : obj
}

function getIndexById (state, id) {
  const idx = state.cards.findIndex((element) => element.id === id)
  return (idx === -1) ? null : idx
}

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

