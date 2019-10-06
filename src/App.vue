<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Меню</router-link>
            |
            <router-link to="/about">About</router-link>
        </div>
            <router-view/>
    </div>
</template>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap&subset=cyrillic,cyrillic-ext');
    @import "../node_modules/normalize.css/normalize.css";

    #app {
        font-family: 'Roboto', sans-serif;
        text-align: center;
        background-color: white;
        height: 100vh;
    }

    #nav {
        padding: 10px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

</style>

