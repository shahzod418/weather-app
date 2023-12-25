<script setup lang="ts">
import { ref, watch } from 'vue'

import { Loader2 } from 'lucide-vue-next'

import { Input } from '@ui/input'
import { Button } from '@ui/button'

import { useFetchWeatherSearch } from '@lib/weather'

const emit = defineEmits<{
  (event: 'update', value: { latitude: number; longitude: number }): void
}>()

const searchInput = ref('')

const { data, isFetching, abort, execute } = useFetchWeatherSearch(searchInput)

const handleClick = (data: { latitude: number; longitude: number }) => {
  emit('update', data)
  searchInput.value = ''
}

watch(searchInput, () => {
  data.value = []
  abort()

  if (searchInput.value) {
    execute()
  }
})
</script>

<template>
  <div>
    <div class="p-1">
      <Input
        v-model="searchInput"
        class="dark:text-white"
        type="text"
        placeholder="Search"
      />
    </div>
    <div class="flex flex-col items-start gap-4">
      <Button v-if="isFetching" variant="link">
        <Loader2 class="animate-spin" />
      </Button>
      <Button
        v-for="item in data"
        :key="item.id"
        variant="link"
        @click="handleClick({ latitude: item.lat, longitude: item.lon })"
      >
        {{ item.country }} / {{ item.region }}
      </Button>
    </div>
  </div>
</template>
