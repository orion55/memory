<template>
    <transition name="fade"
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut" mode="out-in">
        <div :class="['card__item', card.item]" v-if="card.isShow" @click="onClick(card.id)">
            <div :class="['card', card.isFlip ? 'flip' : '' ]">
                <img class="card__front-face" :src=card.url>
                <img class="card__back-face" src="svg/js-badge.svg">
            </div>
        </div>
    </transition>
</template>

<script>
  export default {
    name: 'card',
    props: {
      card: {
        type: Object,
      },
      onClick: {
        type: Function,
      },
    },
  }
</script>

<style lang="scss">
    @import "css/vars";
    @import "css/card-item";
    @import "css/animated";

    .card {
        width: $width;
        height: $height;
        margin: 5px;
        position: relative;
        transform: scale(1);
        transform-style: preserve-3d;
        transition: transform .5s;
        border-radius: 10px;
        cursor: pointer;

        &:active {
            transform: scale(0.97);
            transition: transform .2s;
        }

        &.flip {
            transform: rotateY(180deg);

            & .card__back-face {
                display: none;
            }

            & .card__front-face {
                transform: rotateY(180deg);
            }
        }

    }

    .card__front-face,
    .card__back-face {
        top: 0;
        left: 0;
        width: calc(100% - 20px);
        height: calc(100% - 20px);
        padding: 10px;
        position: absolute;
        border-radius: 10px;
        background: $gradient;
        border: white solid 1px;
    }

</style>
