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
          <article>
            <h1>{{ doc.title }}</h1>
            <ContentRenderer :value="doc" />
          </article>
        </ContentDoc>
      </main>
    </div>
  </div>
</template>

<script setup>
const { slug } = useRoute().params
</script>

