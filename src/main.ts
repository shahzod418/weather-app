import { createApp } from 'vue'
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

import HomePage from './pages/HomePage.vue'

import App from './App.vue'

import './style.css'

const routes: RouteRecordRaw[] = [{ path: '/', component: HomePage }]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
