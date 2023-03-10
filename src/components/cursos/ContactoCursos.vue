<template>
    <div class="contacto">

        <h3 class="contacto__title">{{ titulo }}</h3>

        <input class="contacto__input" type="email" placeholder="Ingrese su email" v-model="email">
        <textarea class="contacto__textarea" placeholder="Ingrese su mensaje" cols="60" rows="7"
            v-model="message"></textarea>

        <button ref="boton" class="contacto__btn">Enviar</button>
    </div>
</template>

<script>
import { classMethod } from '@babel/types'

export default {
    name: 'ContactoCursos',
    data() {
        return {
            email: 'rony.taco@developer.com',
            message: ''
        }
    },
    props: {
        titulo: String
    },
    beforeCreate() {
        console.log('Función que se ejecuta antes de ser creado usando beforecreate')
        console.log(this.email)
        console.log(this.$route.params.id)
    },
    created: function () {
        console.log('%c se ha creado la instancia de vue', 'background: blue; color: white; font-size: 20px;')
        if (this.$route.params.id === 0) {
            this.email = 'servicios@ronytacodev.com'
        } else {
            this.email = 'servicios@ronytacodev.com'
        }
    },
    beforeMount() {
        console.log('%c se ejecuta antes de montar el componente en pantalla usando beforemount', 'background: green; color: white; font-size: 20px;')
    },
    mounted() {
        console.log('%c ya tenemos el componente montado en pantalla usando mounted', 'background: orange; color: white; font-size: 20px;')
        this.verificarInscripcion()
    },
    beforeUpdate() {
        console.log('%c estamos por redibujar el componente con beforeupdate', 'background: yellow; color: black; font-size: 20px;')
        this.verificarInscripcion()
    },
    updated() {
        console.log('%c estamos usando updated el componente usando updated', 'background: pink; color: white; font-size: 20px;')
    },
    beforeUnmount() {
        console.log('%c antes de eliminar con beforeunmount', 'background: green; color: white; font-size: 20px;')
    },
    unmounted() {
        console.log('%c se eliminó componente', 'background: red; color: white; font-size: 20px;')
    },
    methods: {
        verificarInscripcion: function () {
            console.log('verificando...')
            console.log('recuperando boton', this.$refs.boton)
            this.$refs.boton.style.color = 'red'
        }
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