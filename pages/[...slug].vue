<template>
  <div class="bg-svg border border-gray-900 w-full mx-auto bg-gray-500 p-8 text-gray-900">
    <div class="w-4/5 mx-auto  p-12">
      <NuxtLink
        to="/blog-page"
        class="flex mb-2 text-xl leading-8 text-gray-600 no-underline hover:underline"
      >
        <svg
          class="w-6 h-6 text-gray dark:text-gray mr-2 mt-1"
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
        <div class="text-gray">
          Back To Blog
        </div>
      </NuxtLink>

      <div class="flex mt-12">
        <div class="flex-3 flex flex-col w-4/6">
          <ContentRenderer
            v-if="post"
            :value="post"
          >
            <h1 class="mx-auto">
              {{ post?.title }}
            </h1>
            <ContentRendererMarkdown :value="post" />
            <template #not-found>
              <h1>Document not found</h1>
            </template>
          </ContentRenderer>
          <div class="text-gray-500 mt-16 flex justify-between">
            © Dunder Dev 2024
            <div class="flex">
              <span class="[&>svg]:h-5 [&>svg]:w-5 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                  />
                </svg>
              </span>
              <span class="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div class="flex-1 ml-4">
          <div class="sticky top-0 bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center prose prose-a:text-gray-200 z-10 w-80">
            <div class="text-xl font-semibold text-white">
              TABLE OF CONTENTS
            </div>
            <ul class="list-disc pl-5 text-blue-800">
              <li
                v-for="link of post?.body?.toc?.links"
                :key="link.id"
                class="no-underline"
              >
                <a
                  :href="`#${link.id}`"
                  class="no-underline"
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

