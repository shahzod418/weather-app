<script setup lang="ts">
import { AppHeader } from '@components/Header'
import { AppFooter } from '@components/Footer'
</script>

<template>
  <div class="flex min-h-dvh w-dvw flex-col px-6 dark:bg-slate-950">
    <AppHeader />
    <div class="relative grow overflow-x-scroll">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
