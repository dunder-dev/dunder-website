<template>
  <div class="bg-white mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto mb-10 max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Learn by doing
        </h2>
        <p class="my-2 text-lg leading-8 text-gray-600">
          Check out our in-depth courses about AI, Python, Front-end Development, etc!
        </p>
      </div>

      <div class="group flex relative border border-gray-400 mb-4 rounded-lg shadow p-4 bg-yellow-300 bg-gradient-to-t from-transparent to-white opacity-100 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-110">
        <div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
        <NuxtLink
          to="https://app.xperiencify.io/course/730141/"
          class="flex max-w-xl flex-col items-start justify-between"
        >
          <div class="flex flex-col text-xs">
            <time
              datetime="2020-03-16"
              class="text-2xl text-gray-700 ml-8"
            >Practical AI APIs for Software Developers</time>
            <div class="flex text-xs" />
          </div>
        </NuxtLink>
      </div>
    </div>

    <div class="flex text-gray-800 ml-4">
      <!-- Date of Release -->
      <div class="w-1/4 p-4 border-r overflow-y-auto">
        <h2 class="text-sm font-bold mb-4">
          COURSE CHANGELOG
        </h2>
        <div
          v-for="(item, index) in items"
          :key="index"
        >
          <div>
            <button
              class="text-left block w-full py-2 px-3"
              @click="currentSection = item.label"
            >
              <div
                :class="[
                  'w-fit rounded-lg border border-gray-900 py-1.5 px-3 font-sans text-xs font-bold uppercase opacity-100 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-110',
                  currentSection === item.label ? 'bg-gray-900 text-white' : 'text-gray-800'
                ]"
              >
                <span>{{ item.label }}</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <!-- Logs for each day -->
      <div class="w-3/4 p-4 overflow-y-auto mt-4">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="mt-8"
        >
          <div v-if="currentSection === item.label">
            <div class="mb-8">
              <div
                class="w-fit rounded-lg bg-teal-500 py-1.5 mb-2 px-3 font-sans text-xs font-bold uppercase text-white"
              >
                <span>ADDED</span>
              </div>
              <ul
                v-for="(addedLog, logIndex) in item.content.added"
                :key="logIndex"
              >
                <li>{{ addedLog }}</li>
              </ul>
            </div>
            <div class="mb-8">
              <div
                class="w-fit rounded-lg bg-indigo-500 py-1.5 mb-2 px-3 font-sans text-xs font-bold uppercase text-white"
              >
                <span>CHANGED</span>
              </div>
              <ul
                v-for="(changedLog, logIndex) in item.content.changed"
                :key="logIndex"
              >
                <li>{{ changedLog }}</li>
              </ul>
            </div>

            <div class="mb-8">
              <div
                class="w-fit rounded-lg bg-purple-500 py-1.5 mb-2 px-3 font-sans text-xs font-bold uppercase text-white"
              >
                <span>FIXED</span>
              </div>
              <ul
                v-for="(fixedLog, logIndex) in item.content.fixed"
                :key="logIndex"
              >
                <li>{{ fixedLog }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const items = ref([
	{
		label: "2024-08-30",
		content: {
			fixed: [
				"Fixed an issue with user login",
				"Corrected typos in documentation"
			],
			added: [
				"Added a new section on advanced Python",
				"New exercises for JavaScript basics"
			],
			changed: [
				"Updated the UI of the homepage",
				"Modified the terms and conditions page"
			]
		},
		slot: "changelog",
		description: "This changelog is for August 28"
	},
	{
		label: "2024-08-31",
		content: {
			fixed: [
				"Fixed a bug causing app crashes",
				"Resolved CSS issues on mobile devices"
			],
			added: [
				"Added a data validation",
				"Added more examples to the documentation"
			],
			changed: [
				"Changed the color scheme of the dashboard",
				"Refactored backend API for better performance"
			]
		},
		slot: "changelog",
		description: "This changelog is for August 29"
	},
  	{
		label: "2024-08-23",
		content: {
			fixed: [
				"Fixed several small feedback items that had to do with confusing text.",
				"Fixed a few issues with notebooks dependencies for the workshops."
			],
			added: [
				"None",
			],
			changed: [
				"Updated course direction for navigation to prevent confusion on where to find the trainings.",
				"Updated some of the styles and theming in the course, like the video thumbnails."
			]
		},
		slot: "changelog",
		description: "This changelog is for August 29"
	}
])

const currentSection = ref(items.value[0].label)
</script>

<style lang="scss" scoped>

</style>