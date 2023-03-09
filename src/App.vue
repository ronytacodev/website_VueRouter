<template>
  <div class="header">
    <h3 class="header__title">Edutech Cursos</h3>

    <ul class="header__list">
      <li class="header__list__item">
        <a class="header__list__link" href="#">Opción 1</a>
      </li>

      <li class="header__list__item">
        <a class="header__list__link" href="#">Opción 2</a>
      </li>

      <li class="header__list__item">
        <a class="header__list__link" href="#">Opción 3</a>
      </li>
    </ul>
  </div>

  <div>
    <lista-cursos />
  </div>
</template>

<script>

import ListaCursos from './components/cursos/ListaCursos.vue';

export default {
  name: 'App',
  components: {
    ListaCursos
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
