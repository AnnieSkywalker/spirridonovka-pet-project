import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import Inspect from 'vite-plugin-inspect';

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), Inspect()],
    server: {
        port: 80, // Указываем порт 80
        host: 'localhost', // Опционально: указываем хост
    },
});
