<template>
    <div>
        <ul>
            <li>
                <router-link :to="{ name: 'alumnos-a' }">Curso A</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'alumnos-b' }">Curso B</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'alumnos-c' }">Curso C</router-link>
            </li>
        </ul>
    </div>
</template>

