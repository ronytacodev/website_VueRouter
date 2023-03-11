<template>
  <div class="header">
    <div class="header__title">
      <img class="header__title__img" src="@/assets/logoEdu.png" alt="">
    </div>

    <div>
      <router-link :to="{ name: 'cursos' }" class="header__link">Cursos</router-link>
      <router-link :to="{ name: 'profesores' }" class="header__link">Profesores</router-link>
      <router-link :to="{ name: 'alumnos' }" class="header__link">Alumnos</router-link>
    </div>

  </div>

  <div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&family=Roboto+Mono:wght@500&family=Roboto:wght@700&display=swap');

.header {
  display: flex;
  background-color: blueviolet;
  color: white;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto Mono', monospace;

  &__title {
    margin-left: 1em;

  }

  &__link {
    padding: 1em;
    color: white;
    text-decoration: none;
    font-size: 18px;
    font-family: 'Raleway', sans-serif;
  }
}
</style>


