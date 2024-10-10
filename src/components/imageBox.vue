<template>
  <div class="box">
    <img :src="imageSrc" :alt="imageAlt" />
    <div>
      <p>{{ imageOwner }}</p>
      <small>{{ imageOwnerLocation }}</small>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imageOwner: string,
  imageOwnerLocation: string | null,
  imageSrc: string,
  imageAlt: string
}>()

</script>

<style scoped></style>