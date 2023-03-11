<template>
    <div class="content">
        <div class="content__cursos">
            <div>
                <h3 class="content__cursos__title">{{ titulo }}</h3>
            </div>
            <div class="content__cursos__list">
                <v-lista class="content__cursos__list__element" :lista="lista" />
            </div>
        </div>

        <div class="content__image">
            <img class="content__image__img" src="@/assets/languages.png" alt="">
        </div>
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
.content {
    display: flex;

    &__cursos {
        // border: 1px solid;
        width: 40%;

        &__title {
            font-size: 20px;
            margin-left: 2em;
            border-bottom: 3px solid blueviolet;
            width: 200px;
        }

        &__list {
            list-style: none;

            &__element {
                color: black;
            }
        }
    }

    &__image {
        width: 60%;
        // border: 1px solid black;

        &__img {
            width: 600px;
            height: 400px;
            padding: 40px;
            border-radius: 60px;
        }
    }

}
</style>