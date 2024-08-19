<template>
  <div
    v-if="$props.filename"
    class="bg-slate-200 font-mono text-sm border
           border-slate-300 py-2 px-3 text-black
             m-8 rounded-t-md mb-0"
  >
    {{ $props.filename }}
    copy
  </div>
  <pre
    :class="{
      [$props.class as string]: true,
      'mt-0 rounded-t-none': $props.filename,
    }"
    class="bg-gray-900 p-4 m-8 rounded-md overflow-x-auto"
  ><slot /></pre>
</template>

<script setup lang="ts">
defineProps({
	code: {
		type: String,
		default: ''
	},
	language: {
		type: String,
		default: null
	},
	filename: {
		type: String,
		default: null
	},
	highlights: {
		type: Array,
		default: () => []
	},
	meta: {
		type: String,
		default: null
	},
	class: {
		type: String,
		default: null
	}
})
</script>

<style>
pre code .line {
  display: block;
}
</style>