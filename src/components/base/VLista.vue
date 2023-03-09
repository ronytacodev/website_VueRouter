<template>
    <div>
        <ul class="lista">
            <li class="lista__item" v-for="elemento in lista" :key="elemento.id">
                {{ elemento.name }}
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