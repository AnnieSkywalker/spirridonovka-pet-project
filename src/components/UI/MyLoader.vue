<template>
    <div class="loader__wrapper">
        <div class="loader"></div>
    </div>
</template>

<script>
    export default {
        name: 'my-loader',
    };
</script>

<style lang="css" scoped>
    .loader__wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
    .loader {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        position: relative;
        animation: rotate 1s linear infinite;
    }

    .loader::before,
    .loader::after {
        content: '';
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 5px solid var(--primary);
        animation: prixClipFix 2s linear infinite;
    }

    .loader::after {
        border-color: var(--hover);
        animation:
            prixClipFix 2s linear infinite,
            rotate 0.5s linear infinite reverse;
        inset: 6px;
    }

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes prixClipFix {
        0% {
            clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
        }
        25% {
            clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
        }
        50% {
            clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
        }
        75% {
            clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
        }
        100% {
            clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
        }
    }
</style>
