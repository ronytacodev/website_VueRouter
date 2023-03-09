<template>
    <div class="cursos">
        <ul class="cursos__lista">
            <li v-for="elemento in lista" :key="elemento.id">
                {{ elemento.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ListaCursos',
    data() {
        return {
            lista: [
                { id: 0, name: 'Curso profesional de Angular' },
                { id: 1, name: 'Curso profesional de Vue' },
                { id: 2, name: 'Curso profesional de Laravel' },
                { id: 3, name: 'Curso profesional de Testing con Jest' }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.cursos {
    border: 1px solid;
}
</style>