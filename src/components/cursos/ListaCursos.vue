<template>
    <div class="cursos">
        <h3>{{ titulo }}</h3>
        <v-lista :lista="lista" />
    </div>
</template>

<script>

import axios from 'axios'
import VLista from '../base/VLista.vue';

export default {
    name: 'ListaCursos',
    props: {
        titulo: String
    },
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
    methods: {
        cargarDatos: function () {
            axios.get('https://servicios.neunapp.com/api/cursos/').then(
                (response) => {
                    // console.log(response)
                    this.lista = response.data.results
                }
            )
        }
    },
    beforeMount: function () {
        this.cargarDatos()
    }

}
</script>

<style lang="scss" scoped>
.cursos {
    border: 1px solid;
}
</style>