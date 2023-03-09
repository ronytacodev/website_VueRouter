<template>
    <div class="profesores">
        <h3>{{ titulo }}</h3>
        <v-lista :lista="lista" />
    </div>
</template>

<script>

import VLista from '../base/VLista.vue';

export default {
    name: 'ListaProfesores',
    props: {
        titulo: String
    },
    components: {
        VLista
    },
    data() {
        return {
            lista: [
                { id: 0, name: 'Marcus Spencer' },
                { id: 1, name: 'Mary Sullivan' },
                { id: 2, name: 'Joe Rodrich' },
                { id: 3, name: 'Tim Laurent' }
            ]
        }
    },

}
</script>

<style lang="scss" scoped></style>