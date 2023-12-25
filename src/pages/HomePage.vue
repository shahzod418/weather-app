<script setup lang="ts">
import { ref } from 'vue'

import { useGeolocation, watchOnce } from '@vueuse/core'

import { useFetchWeatherForecast } from '@lib/weather'

import { Skeleton } from '@ui/skeleton'
import { ScrollArea, ScrollBar } from '@ui/scroll-area'

import { WeatherSearchInput } from '@components/WeatherSearchInput'
import { WeatherDayCard } from '@components/WeatherDayCard'
import { WeatherHourCard } from '@components/WeatherHourCard'

const latitude = ref(Infinity)
const longitude = ref(Infinity)

const { coords } = useGeolocation()

const { data, isFetching, execute } = useFetchWeatherForecast(
  latitude,
  longitude
)

const handleSearch = (searchData: { latitude: number; longitude: number }) => {
  latitude.value = searchData.latitude
  longitude.value = searchData.longitude

  data.value = null
  execute()
}

watchOnce(coords, () => {
  if (
    coords.value.latitude !== Infinity &&
    coords.value.longitude !== Infinity
  ) {
    latitude.value = coords.value.latitude
    longitude.value = coords.value.longitude

    execute()
  }
})
</script>

<template>
  <WeatherSearchInput
    class="absolute w-full bg-white md:w-1/3 dark:bg-slate-950"
    @update="handleSearch"
  />
  <div class="mt-24 flex justify-center">
    <Skeleton v-if="isFetching" class="h-64 w-96" />
    <WeatherDayCard v-if="data" :data="data.day" />
  </div>
  <ScrollArea class="mt-10 md:mx-auto md:w-3/5 md:p-3">
    <div v-if="isFetching" class="flex gap-10">
      <Skeleton v-for="index in 6" :key="index" class="h-40 w-36" />
    </div>
    <div class="flex gap-10">
      <WeatherHourCard
        v-for="hour in data?.hours"
        :key="hour.time"
        :data="hour"
      />
    </div>
    <ScrollBar orientation="horizontal" />
  </ScrollArea>
</template>
