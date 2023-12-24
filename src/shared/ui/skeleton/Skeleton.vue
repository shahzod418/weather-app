<script setup lang="ts">
import { cn } from '@lib/shadcn'

interface SkeletonProps {
  class?: string
}

const props = defineProps<SkeletonProps>()
</script>

<template>
  <div
    :class="
      cn('animate-pulse rounded-md bg-slate-100 dark:bg-slate-800', props.class)
    "
  />
</template>
