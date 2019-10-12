<template>
    <div class="rating">
        <div class="rating__title">Рейтинг игроков</div>
        <ul class="rating__list">
            <li :key="index" :class="[curPosition === index ? 'rating__active':'', 'rating__item']"
                v-for="(item, index) in rating">
                <span class="rating__element rating__index">{{index+1}}</span>
                <span class="rating__element rating__name">{{ item.nameUser }}</span>
                <span class="rating__element rating__time">{{ formattedTime(item.timeUser)}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
  import * as util from '../helpers/util'

  export default {
    name: 'rating',
    computed: {
      ...mapState(['rating', 'curPosition']),
    },
    methods: {
      formattedTime: function (num) {
        return util.getFormattedTime(num)
      },
    },

  }
</script>

<style lang="scss" scoped>
    @import "css/vars";

    .rating__list {
        color: white;
        font-size: 18px;
        list-style-type: none;
        padding: 0 20px;
    }

    .rating__title {
        font-size: 22px;
        color: white;
        font-weight: 700;
    }

    .rating__item {
        width: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 5px;
    }

    .rating__element {
        padding-left: 10px;
        width: 33.3%;
        font-weight: 400;
    }

    .rating__active .rating__element {
        color: $color-two;
        font-weight: 700;
    }
</style>
