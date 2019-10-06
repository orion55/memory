<template>
    <div class="game">
        <card v-for="card in cards" :card="card" :key="card.keyCard"></card>
    </div>
</template>

<script>
  import card from '../components/card'

  export default {
    name: 'Game',
    components: {
      card,
    },
    data () {
      return {
        cards: this.generateSimpleGrid(),
      }
    },

    methods: {
      generateSimpleGrid () {
        const images = ['angular', 'aurelia', 'backbone', 'jest', 'jquery', 'nuxt', 'react', 'svelte', 'vue']
        let cards = []
        let card = {}
        for (let i = 0; i < 6; i++) {
          for (let j = 0; j < 6; j++) {
            card = {
              url: 'svg/' + images[Math.floor(Math.random() * images.length)] + '.svg',
              item: `card__item-${i}-${j}`,
              isFlip: false,
              keyCard: i * 10 + j,
            }
            cards.push(card)
          }
        }
        return cards
      },
    },
  }

</script>

<style scoped>
    .game {
        height: 820px;
        width: 635px;
        margin: 0 auto;
        perspective: 1000px;
        position: relative;
    }
</style>
