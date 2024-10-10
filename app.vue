<script setup>
import { useHead } from '@vueuse/head'

// pages/my-cool-page.vue or app.vue
useHead({
	bodyAttrs: {
		class: 'bg-gray-900'
	}
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>