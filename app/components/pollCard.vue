<template>
    <div class="card mt-10">
        <div class="content">
            <h2>{{ props.url }}</h2>
            <p v-if="showError" :style="errorclass">Erros: {{ props.errors }}</p>
            <p v-else>Erros: {{ props.errors }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
    url: String,
    errors: String,
})
const showError = computed(() => props.errors !== "0")
let errorclass = { color: 'red' }

</script>
