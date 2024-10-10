<template>
  <Transition name="modal">
    <div v-if="showModal" class="modal--wrapper">
      <figure class="modal--container">
        <img :src="imageSrc" :alt="imageAlt">
        <figcaption>
          <p>{{ imageName }}</p>
          <small>{{ imageLocation }}</small>
        </figcaption>
      </figure>
      <span class="cancel" @click="$emit('close')">
        <CancelIcon />
      </span>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import CancelIcon from './icons/CancelIcon.vue';

defineProps<{
  imageSrc: string | undefined,
  imageName: string | undefined,
  showModal: boolean | undefined,
  imageAlt: string | undefined,
  imageLocation: string | undefined | null
}>()

</script>

<style scoped></style>