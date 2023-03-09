import { createRouter, createWebHistory } from 'vue-router'

import ListaCursos from '@/components/cursos/ListaCursos'

import ListaProfesores from '@/components/cursos/ListaProfesores'

const routes = [
  {
    path: '/cursos',
    component: ListaCursos,
    name: 'cursos'
  },
  {
    path: '/profesores',
    component: ListaProfesores,
    name: 'profesores'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
