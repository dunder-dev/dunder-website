<template>
  <NuxtLink
    :href="href"
    :target="target"
    class="custom-link"
  >
    <slot />
  </NuxtLink>
</template>

<script setup>

defineProps({
	href: {
		type: String,
		default: ''
	},
	target: {
		type: String,
		default: '_blank',
		required: false
	}
})
</script>

<style scoped>
.custom-link {
  color: #3b82f6;
  text-decoration: underline;
}
</style>