<template>
  <div class="search--input">
    <SearchIcon />
    <input 
      v-model="model" 
      class="search-input" 
      type="search"
      placeholder="Search for photo"
    >
  </div>
</template>

<script setup lang="ts">
import { defineModel } from 'vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'

const model = defineModel()
</script>
