<script setup lang="ts">
import { Github } from 'lucide-vue-next'

import { Button } from '@ui/button'
</script>

<template>
  <div class="flex items-center justify-end gap-4 py-6">
    <p class="dark:text-white">Shahzod Davlatov</p>
    <Button size="icon" variant="link" as-child>
      <a href="https://github.com/shahzod418" target="_blank">
        <Github />
      </a>
    </Button>
  </div>
</template>
