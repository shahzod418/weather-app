<script setup lang="ts">
import { useRouter } from 'vue-router'

import { useColorMode } from '@vueuse/core'
import { useWindowSize } from '@vueuse/core'

import { CloudSun } from 'lucide-vue-next'
import { Menu } from 'lucide-vue-next'
import { Moon } from 'lucide-vue-next'
import { Sun } from 'lucide-vue-next'

import { Sheet, SheetTrigger, SheetContent } from '@ui/sheet'
import { Button } from '@ui/button'

const router = useRouter()

const { width } = useWindowSize()

const mode = useColorMode()
</script>

<template>
  <nav class="flex items-center gap-4 py-6 dark:text-white">
    <h1
      class="flex cursor-pointer items-center gap-4 text-3xl md:text-6xl"
      @click="router.push('/')"
    >
      <CloudSun :size="60" /> Weather app
    </h1>
    <div v-if="width >= 768" class="ml-auto">
      <Button variant="link" @click="router.push('/cities')">
        Saved cities
      </Button>
    </div>
    <div class="ml-auto md:ml-0">
      <Sheet v-if="width < 768">
        <SheetTrigger as-child>
          <Button size="icon" variant="ghost">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent class="flex flex-col gap-4">
          <Button class="mt-10" @click="router.push('/cities')">
            Saved cities
          </Button>
          <Button
            class="mt-auto flex items-center gap-4"
            variant="secondary"
            @click="mode = mode === 'dark' ? 'light' : 'dark'"
          >
            <span v-if="mode === 'dark'">Light mode</span>
            <span v-else>Dark mode</span>
            <Sun v-if="mode === 'dark'" />
            <Moon v-else />
          </Button>
        </SheetContent>
      </Sheet>
      <Button
        v-else
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
