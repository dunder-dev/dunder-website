<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
	label: {
		type: String,
		required: false,
		default: '',
	},
	variant: {
		type: String,
		default: 'primary',
		validator: (value) => {
			return ['primary', 'secondary'].includes(value)
		}
	},
	size: {
		type: String,
		default: 'md',
		validator: (value) => {
			return ['sm', 'md', 'lg'].includes(value)
		}
	}
})

const buttonClass = computed(() => {
	const buttonClass = ['text-white', 'rounded-md', 'h-full']

	if (props.size === 'sm') {
		buttonClass.push('px-2 py-1 text-sm max-h-8')
	} else if (props.size === 'lg') {
		buttonClass.push('px-6 py-3 text-lg max-h-16')
	} else {
		buttonClass.push('px-4 py-2 max-h-12')
	}
	if (props.variant === 'primary') {
		buttonClass.push('bg-blue-500 text-white')
	} else {
		buttonClass.push('bg-green-500 text-white')
	}
	return buttonClass
})
</script>

<template>
  <button
    :class="buttonClass"
  >
    {{ label }}
  </button>
</template>
