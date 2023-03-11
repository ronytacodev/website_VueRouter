<template>
    <div>
        <h3 class="title">Lista de Alumnos / Curso</h3>

        <ul>
            <li>
                <router-link :to="{ name: '' }">Curso Profesional de Django y DRF</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'alumnos-b' }">Curso de Vue y Vuex</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'alumnos-c' }">Curso de Vídeo juegos con Javascript</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'alumnos-d', params: { 'codigo': 30 }, query: { texto: [1, 2, 3, 4] } }">
                    Programación desde cero
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.router-link-exact-active {
    color: red;
}

.title {
    font-size: 20px;
    margin-left: 2em;
    border-bottom: 3px solid blueviolet;
    width: 250px;
}
</style>
