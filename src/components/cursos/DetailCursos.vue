<template>
    <div>
        <button class="btn" @click="showInscription = true">Inscribir</button>
    </div>
    <div v-if="showInscription" class="inscription">
        <contacto-cursos />

        <button @click="showInscription = false">Cancelar</button>
    </div>
</template>

<script>

import ContactoCursos from '@/components/cursos/ContactoCursos.vue';

export default {
    name: 'DetailCursos',
    data() {
        return {
            showInscription: false
        }
    },
    components: {
        ContactoCursos
    }
}
</script>

<style lang="scss" scoped></style>