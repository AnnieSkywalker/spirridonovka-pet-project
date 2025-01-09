import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

createApp(App).mount('#app');

function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(1, 2));
console.log(sum(1, 2));
