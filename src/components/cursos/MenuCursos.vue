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
                <router-link :to="{ name: 'alumnos-d', params: { 'codigo': 30 } }">Curso D</router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.router-link-exact-active {
    color: red;
}
</style>
