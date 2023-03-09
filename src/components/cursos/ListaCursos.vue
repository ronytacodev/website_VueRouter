<template>
    <div class="cursos">
        <v-lista :lista="lista" />
    </div>
</template>

<script>

import VLista from '../base/VLista.vue';

export default {
    name: 'ListaCursos',
    components: {
        VLista
    },
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