<template>
    <div>
        <ul>
            <li>
                <router-link :to="{ name: '' }">Curso A</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'alumnos-b' }">Curso B</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'alumnos-c' }">Curso C</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'alumnos-d', params: { 'codigo': 30 }, query: { texto: [1, 2, 3, 4] } }">
                    Curso D
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.router-link-exact-active {
    color: red;
}
</style>
