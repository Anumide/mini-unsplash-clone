<template>
  <main class="grid--container">
    <template v-if="loading">
      <loaderSkeleton v-for="i in 8" :key="i" :class="`box-${i}`" />
    </template>
    <template v-else>
      <ImageBox v-for="(photo, index) in photos" :key="photo.id" :class="[`box-${index + 1}`, `delay-${index + 1}`]"
        :imageOwner="photo.image_owner" :image-src="photo.image_src" :image-owner-location="photo.image_owner_location"
        :image-alt="photo?.alt_description" @click="showImage(photo)" />
    </template>
  </main>
  <Teleport to="body">
    <imageModal :image-name="photo?.image_owner" :image-src="photo?.image_src" :image-alt="photo?.alt_description"
      :image-location="photo?.image_owner_location" :show-modal="showModal" @close="showModal = false" />
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import ImageBox from '@/components/imageBox.vue';
import imageModal from './imageModal.vue';
import loaderSkeleton from './loaderSkeleton.vue';
import { useStore, type Photo } from '@/stores/index'

const showModal = ref(false)
const imageStore = useStore()
const loading = computed(() => imageStore.loading)
const photos = computed(() => imageStore.photos)
const photo = ref<Photo>()

const showImage = (value: Photo) => {
  photo.value = value
  showModal.value = true
}
imageStore.getphotos()
</script>

<style scoped></style>