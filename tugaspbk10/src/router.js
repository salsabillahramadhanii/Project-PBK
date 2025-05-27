import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login.vue'
import Diagnosis from './components/Diagnosis.vue'
import Obat from './components/Obat.vue'
import Resep from './components/Resep.vue'

const Empty = { template: '<div></div>' }

const routes = [
  { path: '/', name: 'Empty', component: Empty }, 
  { path: '/login', name: 'Login', component: Login },
  { path: '/diagnosis', name: 'Diagnosis', component: Diagnosis },
  { path: '/obat', name: 'Obat', component: Obat },
  { path: '/resep', name: 'Resep', component: Resep },
  { path: '/:catchAll(.*)', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
