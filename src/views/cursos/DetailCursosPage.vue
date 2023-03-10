<template>
    <div>
        <h3>Detalle del curso</h3>
        <detail-curso />
    </div>
</template>

<script>

import DetailCurso from '@/components/cursos/DetailCursos.vue'

export default {
    name: 'DetailCursosPage',
    components: {
        DetailCurso
    }
}
</script>

<style lang="scss" scoped></style>