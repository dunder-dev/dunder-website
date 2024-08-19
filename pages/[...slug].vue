<template>
  <div class="bg-svg border border-gray-900 w-full mx-auto bg-gray-500 p-8 text-gray-900">
    <div class="w-4/5 mx-auto bg-gray-400 p-12">
      <NuxtLink
        to="/blog"
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

      <main>
        <ContentDoc
          v-slot="{ doc }"
          :path="slug ? `/blog/${slug[0]}` : '/blog'"
        >
          <ContentRenderer :value="doc">
            <template #default>
              <h1>{{ doc.title }}</h1>
              <div class="relative mt-2 mb-8 flex mx-auto items-center gap-x-4">
                <img
                  :src="doc.avatar"
                  alt=""
                  class="h-10 w-10 rounded-full bg-gray-50"
                >
                <div class="text-sm leading-6">
                  <p class="font-semibold text-white-900 text-xl">
                    <a href="#">
                      <span class="absolute inset-0" />
                      {{ doc.author }}
                    </a>
                  </p>
                  <p class="text-white-600">
                    {{ doc.role }}
                  </p>
                </div>
              </div>
            </template>
            <template #empty>
              <p>No content found.</p>
            </template>
            <template #not-found>
              <h1>Document not found</h1>
            </template>
          </ContentRenderer>
          <ContentRendererMarkdown :value="doc" />
        </ContentDoc>
      </main>

      /
    </div>
  </div>
</template>

<script setup>
const { slug } = useRoute().params
</script>

