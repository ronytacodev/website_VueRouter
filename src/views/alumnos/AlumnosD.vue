<template>
    <div>
        <h3>Alumnos del D</h3>
        <p>{{ $route.params.codigo }}</p>
        <button class="btn" @click="irUrl()">Inscríbete aquí</button>
        <button class="btn" @click="recuperarParametro()">Recuperar</button>
    </div>
</template>

<script>
export default {
    name: 'AlumnosD',
    methods: {
        irUrl: function () {
            this.$router.push({ name: 'contacto' })
        },
        recuperarParametro: function () {
            console.log(this.$route.params.codigo)
        }
    }
}
</script>

<style lang="scss" scoped>
.btn {
    padding: 7px 20px;
}
</style>
