<template>
    <div :class="['card__item', item]">
        <div class="card">
<!--            <img class="card__front-face" :src=>-->
            <img class="card__back-face" src="svg/js-badge.svg">
        </div>
    </div>
</template>

<script>
  export default {
    name: 'card',
    props: {
      url: String,
      item: String,
    },
  }
</script>

<style lang="scss">
    @import "css/vars";
    @import "css/card-item";

    .card {
        width: $width;
        height: $height;
        margin: 5px;
        position: relative;
        transform: scale(1);
        transform-style: preserve-3d;
        transition: transform .5s;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, .3);
        border-radius: 10px;

        &:active {
            transform: scale(0.97);
            transition: transform .2s;
        }

        &.flip {
            transform: rotateY(180deg);

            & .card__back-face {
                display: none;
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
        background: $color-main;
    }

    .front-face {
        transform: rotateY(180deg);
    }
</style>
