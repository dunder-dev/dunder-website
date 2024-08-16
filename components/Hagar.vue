<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          From the BeeByteBlog
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">
          Read the musings from a team of developers who happen to be friends.
        </p>
      </div>
      <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        <article class="flex max-w-xl flex-col items-start justify-between">
          <div class="flex items-center gap-x-4 text-xs">
            <time
              datetime="2020-03-16"
              class="text-gray-500"
            >Mar 16, 2020</time>
            <a
              href="#"
              class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >Marketing</a>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <a href="#">
                <span class="absolute inset-0" />
                Boost your conversion rate
              </a>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
            </p>
          </div>
          <div class="relative mt-8 flex items-center gap-x-4">
            <img
              src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              class="h-10 w-10 rounded-full bg-gray-50"
            >
            <div class="text-sm leading-6">
              <p class="font-semibold text-gray-900">
                <a href="#">
                  <span class="absolute inset-0" />
                  Michael Foster
                </a>
              </p>
              <p class="text-gray-600">
                Co-Founder / CTO
              </p>
            </div>
          </div>
        </article>

        <article class="flex max-w-xl flex-col items-start justify-between">
          <div class="flex items-center gap-x-4 text-xs">
            <time
              datetime="2020-03-16"
              class="text-gray-500"
            >Mar 16, 2020</time>
            <a
              href="#"
              class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >Marketing</a>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <a href="#">
                <span class="absolute inset-0" />
                Learn Nuxt framework
              </a>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
            </p>
          </div>
          <div class="relative mt-8 flex items-center gap-x-4">
            <img
              src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              class="h-10 w-10 rounded-full bg-gray-50"
            >
            <div class="text-sm leading-6">
              <p class="font-semibold text-gray-900">
                <a href="#">
                  <span class="absolute inset-0" />
                  Michael Foster
                </a>
              </p>
              <p class="text-gray-600">
                Co-Founder / CTO
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const blogs = ref([
	{
		id: 1,
		name: 'Exploring the Nuxt Framework',
		summary: 'A comprehensive guide to get started with Nuxt.js.',
		date: '2024-07-15',
		tags: ['Nuxt', 'JavaScript', 'Vue']
	},
	{
		id: 2,
		name: 'Understanding Vue 3 Composition API',
		summary: 'Learn the new features and benefits of Vue 3 Composition API.',
		date: '2024-07-10',
		tags: ['Vue 3', 'JavaScript', 'Frontend']
	}
	// Add more blogs here
])

const formatDate = (date) => {
	const options = { year: 'numeric', month: 'long', day: 'numeric' }
	return new Date(date).toLocaleDateString(undefined, options)
}
</script>

<style scoped>
.bg-purple-50 {
  background-color: #f3e8ff;
}
.text-purple-700 {
  color: #6b46c1;
}
.text-purple-800 {
  color: #553c9a;
}
.bg-purple-200 {
  background-color: #d6bcfa;
}
.text-purple-700 {
  color: #6b46c1;
}
.border-purple-300 {
  border-color: rgba(139, 92, 246, 0.5);
}
</style>
