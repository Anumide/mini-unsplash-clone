<script setup lang="ts">
import { computed, ref } from 'vue'
import SearchBar from '@/components/searchBar.vue'
import ImageGrid from '@/components/imageGrid.vue'
import { useStore } from '@/stores/index'
import CancelIcon from './components/icons/CancelIcon.vue'


const imageStore = useStore()

const isSearch = ref(false)
const loading = computed(() => imageStore.loading)
const searhValue = ref('')
const searchText = computed(() => {
  return loading.value ? 'Searching' : 'Search Results'
})

function search(value: string) {
  if (!value) value = 'african'
  imageStore.getphotos(value)
  isSearch.value = true
}
const clearSearch = () => {
  isSearch.value = false
  searhValue.value = ''
}
</script>

<template>
  <div class="">
    <div class="header">
      <div class="container">
        <SearchBar v-if="!loading && !isSearch" v-model="searhValue" @change.prevent="search(searhValue)" />
        <div v-else class="search--states">
          <p>{{ searchText }} for <span>"{{ searhValue }}"</span></p>
          <CancelIcon v-if="isSearch && !loading" @click="clearSearch" />
        </div>
      </div>
    </div>
    <ImageGrid />
  </div>

  <RouterView />
</template>
