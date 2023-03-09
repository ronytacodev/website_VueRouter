<template>
  <div class="header">
    <h3 class="header__title">Edutech Cursos</h3>

    <ul class="header__list">
      <li class="header__list__item">
        <a class="header__list__link" href="#">Cursos</a>
      </li>

      <li class="header__list__item">
        <a class="header__list__link" href="#">Profesores</a>
      </li>

      <li class="header__list__item">
        <a class="header__list__link" href="#">Contacto</a>
      </li>
    </ul>
  </div>

  <div>
    <lista-cursos titulo="Lista de cursos" />
    <lista-profesores titulo="Lista de profesores" />
    <contacto-cursos titulo="Formulario de Contacto" />
  </div>
</template>

<script>

import ListaCursos from './components/cursos/ListaCursos.vue';
import ListaProfesores from './components/cursos/ListaProfesores.vue';
import ContactoCursos from './components/cursos/ContactoCursos.vue';

export default {
  name: 'App',
  components: {
    ListaCursos,
    ListaProfesores,
    ContactoCursos
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
