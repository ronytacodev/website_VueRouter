<template>
    <div class="alumnos">
        <div class="alumnos__left">
            aqui va un menu
        </div>
        <div class="alumnos__right">
            aqui van las opciones del menu
        </div>
    </div>
</template>

<script>
export default {
    name: 'AlumnosPage'
}
</script>

<style lang="scss" scoped>
.alumnos {
    display: flex;

    &__left {
        width: 30%;
        border: 1px solid;
    }

    &__right {
        width: 70%;
        border: 1px solid;
    }
}
</style>