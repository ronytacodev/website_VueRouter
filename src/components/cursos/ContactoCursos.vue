<template>
    <div class="contacto">

        <h3 class="contacto__title">{{ titulo }}</h3>

        <input class="contacto__input" type="email" placeholder="Ingrese su email">
        <textarea class="contacto__textarea" placeholder="Ingrese su mensaje" cols="30" rows="10"></textarea>

        <button class="contacto__btn">Enviar</button>
    </div>
</template>

<script>
export default {
    name: 'ContactoCursos',
    props: {
        titulo: String
    }
}
</script>

<style lang="scss" scoped>
.contacto {
    border: 1px solid;
    display: block;

    &__title {
        font-size: 15px;
        font-weight: bold;
    }

    &__input {
        display: block;
        height: 35px;
        margin: 10px;
    }

    &__textarea {
        display: block;
        margin: 10px;
    }

    &__btn {
        margin: 10px;
        padding: 7px 16px 7px 16px;
    }
}
</style>