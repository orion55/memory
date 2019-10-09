<template>
    <div class="game">
        <card v-for="card in cards" :card="card" :key="card.id" :onClick="flipCard"></card>
    </div>
</template>

<script>
  import card from '../components/card'
  import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'Game',
    components: {
      card,
    },
    computed: {
      ...mapState(['cards']), ...mapGetters(['isFinish'])
    },
    methods: {
      ...mapActions(['flipCard']), ...mapMutations(['resetBoard'])
    },
    watch: {
      isFinish: function (newVal) {
        if (newVal) {
          this.resetBoard()
          this.$swal({
              type: 'success',
              title: 'Победа',
              html: 'Вы победили!',
              confirmButtonColor: '#FF9C13',
            }
          )
        }
      }
    },
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
