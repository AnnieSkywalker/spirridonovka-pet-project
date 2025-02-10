import About from '../pages/About.vue';
import Map from '../pages/Map.vue';
import Login from '../pages/Login.vue';
import PostPage from '../pages/PostPage.vue';
import PostsPage from '../pages/PostsPage.vue';
import VkPage from '../pages/VkPage.vue';
import { createRouter, createMemoryHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: PostsPage,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/posts',
        component: PostsPage,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/map',
        component: Map,
    },
    {
        path: '/posts/:id',
        component: PostPage,
    },
    {
        path: '/page-vk',
        component: VkPage,
    },
];

const router = createRouter({
    routes,
    history: createMemoryHistory(),
});

export default router;
