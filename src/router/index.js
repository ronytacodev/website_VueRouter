import { createRouter, createWebHistory } from 'vue-router'

import CursosPage from '@/views/cursos/CursosPage'
import DetailCursosPage from '@/views/cursos/DetailCursosPage'
import ProfesoresPage from '@/views/ProfesoresPage'
import AlumnosPage from '@/views/alumnos/AlumnosPage'
import AlumnosA from '@/views/alumnos/AlumnosA'
import AlumnosB from '@/views/alumnos/AlumnosB'
import AlumnosC from '@/views/alumnos/AlumnosC'
import AlumnosD from '@/views/alumnos/AlumnosD'
import ContactoPage from '@/views/alumnos/ContactoPage'
import Page404 from '@/views/Page404'

const routes = [
  {
    path: '/cursos',
    component: CursosPage,
    name: 'cursos'
  },
  {
    path: '/cursos/:id',
    component: DetailCursosPage,
    name: 'cursos-detalle'
  },
  {
    path: '/profesores',
    component: ProfesoresPage,
    name: 'profesores'
  },
  { 
    path: '/alumnos',
    component: AlumnosPage,
    // name: 'alumnos', this line is deleted to optimize
    children: [
      { 
        path: '',
        component: AlumnosA,
        name: 'alumnos'
      },
      { 
        path: 'alumnos-b',
        component: AlumnosB,
        name: 'alumnos-b'
      },
      { 
        path: 'alumnos-c',
        component: AlumnosC,
        name: 'alumnos-c'
      },
      { 
        path: 'alumnos-d/:codigo',
        component: AlumnosD,
        name: 'alumnos-d',
        query: null
      }
    ]
  },
  { 
    path: '/contacto',
    component: ContactoPage,
    name: 'contacto'
  },
  {
    path: '/:pathMatch(.*)*',
    component: Page404
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
