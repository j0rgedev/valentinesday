<script setup>
import router from "@/router/index.js";
</script>

<template>
  <section class="p-16 w-full h-full min-h-dvh items-center justify-center flex flex-col gap-8">
    <h1 class="text-center text-bold text-4xl">Página no encontrada</h1>
    <Button
        type="button"
        label="Volver al inicio"
        @click="router.push({name: 'home'})"
    />
  </section>
</template>

<style scoped>
section {
  background-image: url('../assets/images/mainimage.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>