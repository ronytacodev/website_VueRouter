<template>
    <div>
        <lista-profesores titulo="Lista de Profesores" />
    </div>
</template>

<script>

import ListaProfesores from '@/components/cursos/ListaProfesores.vue';

export default {
    name: 'ProfesoresPage',
    components: {
        ListaProfesores
    }
}
</script>

<style lang="scss" scoped></style>