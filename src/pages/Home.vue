<template>
    <div id="app">
        <div class="main">
            <div class="text">
                <h1 class="text__title">Игра “Память”</h1>
                <p class="text__paragraph">Переворачивайте карточки, найдите пару и как можно
                    быстрее!</p>
            </div>
            <div class="btn btn__start" @click="gameStart">Старт</div>
            <Rating></Rating>
        </div>
    </div>
</template>

<script>
  import Rating from '@/components/rating'
  import { mapMutations, mapState } from 'vuex'

  export default {
    name: 'Home',
    components: {Rating},
    computed: {
      ...mapState(['curPosition']),
    },
    methods: {
      ...mapMutations(['setUserName']),
      gameStart: function () {
        if (this.curPosition === 99) {
          this.$swal({
            title: 'Введите своё имя',
            input: 'text',
            inputValue: 'User',
            inputAttributes: {
              autocapitalize: 'off',
            },
            inputValidator: (value) => {
              if (!value) {
                return 'Введите непустое имя'
              }
            },
            confirmButtonColor: '#FF9C13',
            showLoaderOnConfirm: true,
            preConfirm: (userName) => {
              this.setUserName(userName)
              this.$router.push({name: 'Game'})
            },
          })
        } else {
          this.$router.push({name: 'Game'})
        }
      },
    },
  }
</script>

<style scoped lang="scss">
    @import "../components/css/misc";
    @import "../components/css/btn";

    .main {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100vh;
    }

    .text {
        color: white;
        font-size: 18px;
        padding-bottom: 20px;
    }

    .text__title {
        font-size: 28px;
        font-weight: 700;
    }
</style>
