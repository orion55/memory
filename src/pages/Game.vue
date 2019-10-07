<template>
    <div class="game">
        <card v-for="card in cards" :card="card" :key="card.id" :onClick="getById"></card>
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
      ...mapMutations(['getById'])
    }
  }

</script>

<style scoped>
    .game {
        height: 635px;
        width: 635px;
        margin: 0 auto;
        perspective: 1000px;
        position: relative;
    }
</style>
