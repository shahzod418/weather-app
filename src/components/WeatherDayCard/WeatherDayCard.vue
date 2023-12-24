<script setup lang="ts">
import { defineProps } from 'vue'

import { ThermometerSun } from 'lucide-vue-next'
import { ThermometerSnowflake } from 'lucide-vue-next'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@ui/card'

import type { WeatherDayData } from '@typings/weather'

const { data } = defineProps<{ data: WeatherDayData }>()
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ data.country }} / {{ data.region }}</CardTitle>
      <CardDescription>{{ data.text }}</CardDescription>
    </CardHeader>
    <CardContent class="flex flex-col px-20">
      <div class="flex justify-center text-7xl">
        <div v-if="Number(data.temp_c) > 0">
          <ThermometerSun :size="100" />
        </div>
        <div v-else>
          <ThermometerSnowflake :size="100" />
        </div>
        <div>{{ data.temp_c }}°C</div>
      </div>
      <div class="mt-3 self-end">Feels like: {{ data.feelslike_c }}°C</div>
    </CardContent>
  </Card>
</template>
