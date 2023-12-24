<script setup lang="ts">
import { useColorMode } from '@vueuse/core'

import { CloudSun } from 'lucide-vue-next'
import { Moon } from 'lucide-vue-next'
import { Sun } from 'lucide-vue-next'

import { Button } from '@ui/button'

const mode = useColorMode()
</script>

<template>
  <nav class="flex items-center justify-between py-6 dark:text-white">
    <h1 class="flex items-center gap-4 text-6xl">
      <CloudSun :size="60" /> Weather app
    </h1>
    <div>
      <Button
        size="icon"
        variant="ghost"
        @click="mode = mode === 'dark' ? 'light' : 'dark'"
      >
        <Sun v-if="mode === 'dark'" />
        <Moon v-else />
      </Button>
    </div>
  </nav>
</template>
