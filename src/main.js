import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Quote from './components/Quote.vue'

const routes = [
	{ path: '/', component: Home },
	{ name: 'quote', path: '/:keyword', component: Quote, props: true },
];

const router = createRouter({
	history: createWebHashHistory(),
	routes, 
});

const app = createApp(App);

app.use(router);

app.mount('#app');
