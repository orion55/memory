<template>
    <div id="app">
        <div id="nav">
            <div class="left"></div>
            <timer></timer>
            <div class="right">
                <router-link to="/">
                    <div class="btn btn__app" @click="quit">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas"
                             data-icon="sign-out-alt"
                             class="svg-inline--fa fa-sign-out-alt fa-w-16 btn__svg"
                             role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                                  d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"></path>
                        </svg>
                    </div>
                </router-link>
            </div>
        </div>
        <div id="content">
            <div class="game">
                <card v-for="card in cards" :card="card" :key="card.id" :onClick="flipCard"></card>
            </div>
        </div>
    </div>
</template>

<script>
  import card from '../components/card'
  import timer from '../components/timer'

  import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
  import * as util from '../helpers/util'

  export default {
    name: 'Game',
    components: {
      card,
      timer,
    },
    computed: {
      ...mapState(['cards', 'currentTime']), ...mapGetters(['isFinish']),
    },
    methods: {
      ...mapActions(['flipCard', 'startTimer']), ...mapMutations(['resetBoard', 'stopTimer', 'getFormattedTime']),
      quit: function () {
        this.$swal({
          title: 'Вы действительно хотите прервать игру?',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#FF9C13',
          cancelButtonColor: '#1C7CCC',
          confirmButtonText: 'Да',
          cancelButtonText: 'Нет',
        }).then((result) => {
          if (result.value) {
            console.log('Ok!')
          }
        })
      },
    },
    mounted () {
      this.startTimer()
    },

    watch: {
      isFinish: function (newVal) {
        if (newVal) {
          this.stopTimer()
          this.resetBoard()
          const curTime = util.getFormattedTime(this.currentTime)
          console.log(curTime)
          this.$swal({
              type: 'success',
              title: 'Победа',
              html: `Ваше время ${curTime}`,
              confirmButtonColor: '#FF9C13',
            },
          )
        }
      },
    },
  }

</script>

<style lang="scss" scoped>
    @import "../components/css/btn";

    #nav {
        padding-top: 20px;
        display: flex;
        /*justify-content: space-between;*/
        align-items: center;
    }

    #content {
        display: flex;
        align-items: center;
        justify-content: center;
        height: calc(100% - 66px);
    }

    #app {
        font-family: 'Roboto', sans-serif;
        text-align: center;
        font-size: 16px;
        height: 100vh;
        background: linear-gradient(to bottom, rgba(28, 125, 204, 1) 0%, rgba(9, 77, 133, 1) 100%);
    }

    .game {
        height: 638px;
        width: 638px;
        margin: 0 auto;
        perspective: 1000px;
        position: relative;
    }

    .left, .right {
        flex: 1;
    }

    .right {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .btn__app {
        margin-right: 20px;
    }

    .btn__svg {
        display: block;
    }
</style>
