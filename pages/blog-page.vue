<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0 border-b border-gray-400">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        From the BeeByteBlog
      </h2>
      <p class="my-2 text-lg leading-8 text-gray-600">
        Read the musings from a team of developers who happen to be friends.
      </p>
    </div>
    <client-only>
      <AllPosts />
    </client-only>
  </div>
</template>

<script setup>
import AllPosts from "../components/AllPosts.vue"
</script>

