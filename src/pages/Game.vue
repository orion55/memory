<template>
    <div class="game">
        <card v-for="card in cards" :card="card" :key="card.id" :onClick="flipCard"></card>
    </div>
</template>

<script>
  import card from '../components/card'
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'Game',
    components: {
      card,
    },
    computed: {
      ...mapState(['cards'])
    },
    methods:{
      ...mapMutations(['flipCard'])
    }
  }

</script>

<style scoped>
    .game {
        height: 638px;
        width: 638px;
        margin: 0 auto;
        perspective: 1000px;
        position: relative;
    }
</style>
