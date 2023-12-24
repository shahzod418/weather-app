<script setup lang="ts">
import { defineProps } from 'vue'

import dayjs from 'dayjs'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@ui/card'

import type { WeatherHourData } from '@typings/weather'

const { data } = defineProps<{ data: WeatherHourData }>()
</script>

<template>
  <Card class="w-36">
    <CardHeader>
      <CardTitle>{{
        dayjs(data.time, 'YYYY-MM-DD').format('HH:mm')
      }}</CardTitle>
      <CardDescription class="h-10">{{ data.text }}</CardDescription>
    </CardHeader>
    <CardContent>{{ data.temp_c }}°C</CardContent>
  </Card>
</template>
