<script setup lang="ts">
defineProps({
	placeholder: {
		type: String,
		required: false,
		default: '',
	},
})

const value = defineModel({
	prop: 'value',
	event: 'input',
	type: String,
})
</script>

<template>
  <input
    v-model="value"
    type="text"
    class="border-2 border-gray-300 p-2 rounded-md h-full max-h-12"
    :placeholder="placeholder"
  >
</template>
