<template>
    <div id="app">
        <div id="nav">
            <router-link to="/" class="btn">Меню</router-link>
        </div>
        <div id="content">
            <router-view/>
        </div>
    </div>
</template>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap&subset=cyrillic,cyrillic-ext');
    @import "../node_modules/normalize.css/normalize.css";
    @import "./components/css/btn";

    #app {
        font-family: 'Roboto', sans-serif;
        text-align: center;
        /*background-color: #094D85;*/
        font-size: 16px;
        height: 100vh;
        background: linear-gradient(to bottom, rgba(28,125,204,1) 0%, rgba(9,77,133,1) 100%);
    }

    #nav {
        padding-top: 20px;
    }

    #content {
        display: flex;
        align-items: center;
        justify-content: center;
        height: calc(100% - 66px);
    }

</style>

