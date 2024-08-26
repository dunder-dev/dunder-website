<template>
  <!-- component -->
  <div class="mx-auto container py-20 px-6">
    <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->

    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div
        v-for="(term, index) in terms.moduleOne"
        :key="term"
        :class="[
          'rounded w-full h-64 flex flex-col justify-between border mb-6 py-5 px-4 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105',
          term.backgroundColor,
          term.borderColor,
          term.textColor
        ]"
      >
        <div
          v-if="flippedTermIndex !== index"
          class="grid justify-items-center content-center h-full"
          @click="flipCard(index)"
        >
          <h3 class="uppercase leading-7 font-semibold w-11/12">
            {{ term.front }}
          </h3>
        </div>
        <div
          v-else
          class="grid justify-items-center content-center h-full"
          @click="flipCard(null)"
        >
          <h3 class="leading-7 font-semibold h-full w-11/12">
            {{ term.back }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import terms from "../static/terms.js"

const flippedTermIndex = ref(null)

function flipCard(index) {
	if (flippedTermIndex.value === index) {
		flippedTermIndex.value = null
	} else {
		flippedTermIndex.value = index
	}
}
</script>

<style scoped>

</style>