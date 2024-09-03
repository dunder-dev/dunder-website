<template>
  <div class="bg-svg border border-gray-900 w-full mx-auto bg-gray-500 p-8 text-gray-900">
    <div class="w-4/5 mx-auto  p-12">
      <NuxtLink
        to="/blog-page"
        class="flex mb-2 text-xl leading-8 text-gray-600 no-underline hover:underline"
      >
        <svg
          class="w-6 h-6 text-white dark:text-gray mr-2 mt-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 5H1m0 0 4 4M1 5l4-4"
          />
        </svg>
        <div class="text-white">
          Back To Blog
        </div>
      </NuxtLink>

      <div class="flex mt-12">
        <div class="flex-3 flex flex-col w-4/6">
          <ContentRenderer
            v-if="post"
            :value="post"
          >
            <h1>{{ post?.title }}</h1>
            <ContentRendererMarkdown :value="post" />
            <template #not-found>
              <h1>Document not found</h1>
            </template>
          </ContentRenderer>
        </div>

        <div class="flex-1 ml-4">
          <div class="sticky top-0 bg-gray-900 rounded-lg shadow-md p-2 flex flex-col items-center prose prose-a:text-pink-600 hover:prose-a:text-blue-500 z-10 w-80">
            <div class="text-xl font-semibold text-white my-4">
              TABLE OF CONTENTS
            </div>
            <ul class="list-disc pl-5 text-blue-800">
              <li
                v-for="link of post?.body?.toc?.links"
                :key="link.id"
                class="no-underline hover:underline"
              >
                <a
                  :href="`#${link.id}`"
                  class="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  {{ link.text }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
const { slug } = useRoute().params
const post = ref()

onMounted(async() => {
	const result = await queryContent('blog').where({ slug: slug[0] }).findOne()
	post.value = result
	if (Array.isArray(result)) {
		post.value = result.find(e => e.slug === slug[0]) || null
	}
})
</script>

