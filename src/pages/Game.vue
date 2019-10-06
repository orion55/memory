<template>
    <div class="game">
<!--        <card url="../assets/svg/angular.svg" item="card__item-1-1"></card>-->
        <card item="card__item-1-1"></card>
    </div>
</template>

<script>
  import card from '../components/card'

  export default {
    name: 'Game',
    components: {
      card,
    },
  }
</script>

<style scoped>
    .game {
        width: 840px;
        height: 840px;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        perspective: 1000px;
        align-items: center;
        justify-content: center;
        position: relative;
    }
</style>
