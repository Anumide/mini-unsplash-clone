import { ref } from 'vue'
import { defineStore } from 'pinia'
import axiosInstance from '../utils/axiosInstance'

export interface Photo {
  alt_description: string
  id: string
  image_src: string
  image_owner: string
  image_owner_location: string
}

export const useStore = defineStore('store', () => {
  const photos = ref<Photo[]>()
  const loading = ref(true)

  const getphotos = async (searchParam: string = 'african') => {
    try {
      loading.value = true
      const data = await axiosInstance.get('search/photos', {
        params: {
          query: searchParam,
          per_page: 8
        }
      })
      photos.value = data.data.results.map((photo: any) => {
        return {
          alt_description: photo.alt_description,
          id: photo.id,
          image_src: photo.urls?.regular,
          image_owner: photo?.user?.name,
          image_owner_location: photo?.user?.location
        }
      })
      loading.value = false
    } catch (err) {
      console.error(err)
      loading.value = false
    }
  }
  return {
    photos,
    loading,
    getphotos
  }
})
