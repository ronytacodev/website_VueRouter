<template>
    <!-- <div class="profesores">
        <h3>{{ titulo }}</h3>
        <v-lista :lista="lista" />
    </div> -->
    <div class="content">
        <div class="content__profesores">
            <div>
                <h3 class="content__profesores__title">{{ titulo }}</h3>
            </div>
            <div class="content__profesores__list">
                <v-lista class="content__profesores__list__element" :lista="lista" />
            </div>
        </div>

        <div class="content__image">
            <img class="content__image__img" src="@/assets/teachers.jpg" alt="">
        </div>
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

<style lang="scss" scoped>
.content {
    display: flex;

    &__profesores {
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