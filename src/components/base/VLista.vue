<template>
    <div>
        <ul class="lista">
            <li class="lista__item" v-for="elemento in lista" :key="elemento.id">
                <router-link :to="{ name: 'cursos-detalle', params: { id: elemento.id } }">
                    {{ elemento.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'VLista',
    props: {
        lista: Array
    }
}
</script>

<style lang="scss" scoped></style>