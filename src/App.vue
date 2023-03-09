<template>
  <div class="header">
    <h3 class="header__title">Edutech Cursos</h3>

    <ul class="header__list">
      <li class="header__list__item">
        <a @click="mostrarComponente('lista-cursos', 'Lista de Cursos')" class="header__list__link" href="#">Cursos</a>
      </li>

      <li class="header__list__item">
        <a @click="mostrarComponente('lista-profesores', 'Lista de Profesores')" class="header__list__link"
          href="#">Profesores</a>
      </li>

      <li class="header__list__item">
        <a @click="mostrarComponente('contacto-cursos', 'Formulario de Contacto')" class="header__list__link"
          href="#">Contacto</a>
      </li>
    </ul>
  </div>

  <keep-alive>
    <component :is="componentSelect" :titulo="propComponent"></component>
  </keep-alive>
</template>

<script>

import ListaCursos from './components/cursos/ListaCursos.vue';
import ListaProfesores from './components/cursos/ListaProfesores.vue';
import ContactoCursos from './components/cursos/ContactoCursos.vue';

export default {
  name: 'App',
  data() {
    return {
      componentSelect: null,
      propComponent: ''
    }
  },
  components: {
    ListaCursos,
    ListaProfesores,
    ContactoCursos
  },
  methods: {
    mostrarComponente: function (componente, propiedad) {
      this.componentSelect = componente,
        this.propComponent = propiedad
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}

.header {
  padding: 1em;
  border: 1px solid;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__list {
    display: flex;
    list-style: none;
    padding: 0px;
    margin: 0px;

    &__item {
      padding: 1em;
    }
  }
}
</style>
