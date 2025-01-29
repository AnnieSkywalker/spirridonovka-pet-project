<template>
    <div class="main-container">
        <app-header></app-header>
        <main
            id="main"
            class="content"
        >
            <div class="app">
                <RouterView></RouterView>
            </div>
        </main>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import AppFooter from './components/Footer.vue';
    import AppHeader from './components/Header.vue';
    import { RouterView } from 'vue-router';

    export default {
        components: {
            AppFooter,
            AppHeader,
        },
    };
</script>

<!-- <script setup lang="ts"></script>

<template>
    <div>
        <a
            href="https://vite.dev"
            target="_blank"
        >
            <img
                src="/vite.svg"
                class="logo"
                alt="Vite logo"
            />
        </a>
        <a
            href="https://vuejs.org/"
            target="_blank"
        >
            <img
                src="./assets/vue.svg"
                class="logo vue"
                alt="Vue logo"
            />
        </a>
    </div>
</template>

<style scoped>
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
    }
    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.vue:hover {
        filter: drop-shadow(0 0 2em #42b883aa);
    }
</style> -->
