<template>
  <div>
    <a href="#" class="link">Cursos</a>
    <a href="#" class="link">Profesores</a>
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
.link {
  padding: 1em;
}
</style>
