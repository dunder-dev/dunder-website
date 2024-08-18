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


      <ContentDoc :path="`/posts/${slug}`">
        <template #default="{ doc }">
          <div class="flex mt-12">
            <!-- Main Content Div taking up 75% of the space -->
            <div class="flex-3 flex flex-col w-5/6">
              <h1 class="text-5xl mx-auto">
                {{ doc.title }}
              </h1>
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
              <ContentRenderer
                class="max-w-4xl"
                :value="doc"
              />
            </div>

            <!-- Table of Contents Div taking up 25% of the space -->
            <div class="flex-1 ml-4">
              <div class="sticky top-0 bg-gray-900 rounded-lg shadow-md p-2 flex flex-col items-center prose prose-a:text-pink-600 hover:prose-a:text-blue-500 z-10 w-80">
                <div class="text-xl font-semibold text-white my-4">
                  TABLE OF CONTENTS
                </div>
                <ul class="list-disc pl-5 text-blue-800">
                  <li
                    v-for="link of doc.body.toc.links"
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
        </template>
        <template #empty>
          <p>No content found.</p>
        </template>
        <template #not-found>
          <h1>Document not found</h1>
        </template>
      </ContentDoc>
    </div>
  </div>
</template>

<script setup>
const { slug } = useRoute().params

</script>

