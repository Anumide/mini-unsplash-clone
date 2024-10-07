<script setup lang="ts">
import { ref } from 'vue'
import SearchBar from '@/components/SearchBar.vue'

const searhValue = ref()
const loading = ref(false)
const searchText = ref("")
function search(value: string) {
  console.log(value)
}
</script>

<template>
  <div class="">
    <div class="header">
      <div class="container">
        <SearchBar
          v-if="!loading"
          v-model="searhValue" 
          @change.prevent="search(searhValue)" 
        />
        <div v-else class="search--states">
          <p>Search Results for <span>"Fun"</span></p>
        </div>
      </div>
    </div>
  </div>

  <RouterView />
</template>
