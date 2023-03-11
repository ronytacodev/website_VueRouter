
<template>
    <div class="content">
        <h3 class="content__title">Somos los alumnos del D</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem porro suscipit facilis ea necessitatibus
            culpa, delectus nostrum ut natus quam veritatis adipisci sed voluptatibus in eaque ab quisquam beatae ipsam!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta accusantium voluptate, ullam quaerat quibusdam
            eos cumque consectetur, officiis eveniet nulla neque facere distinctio a excepturi illum voluptatibus facilis,
            accusamus minima?</p>

        <img class="content__img" src="@/assets/alumnos-b.jpg" alt="">

        <div class="content__button">
            <button class="content__button__btn" @click="irUrl()">Inscríbete aquí</button>
        </div>


        <!-- <p>{{ $route.params.codigo }}</p> -->
        <!-- <button class="btn" @click="irUrl()">Inscríbete aquí</button> -->

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
            console.log(this.$route.query.texto)
        }
    }
}
</script>

<style lang="scss" scoped>
.content {

    padding: 2em;

    &__title {
        font-size: 20px;
        text-align: center;
    }

    &__img {
        width: 600px;
        height: 400px;
        padding: 40px;
        border-radius: 60px;
        margin-left: 5em;
    }

    &__button {
        margin-left: 20em;

        &__btn {
            padding: 10px 15px;
            background-color: blueviolet;
            color: white;
            border-radius: 15px;
        }
    }
}
</style>

