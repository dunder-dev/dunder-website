<template>
  <main>
    <ContentList
      v-slot="{ list }"
      path="/blog"
      :query="{
        draft: false,
        sort: [
          {
            date: -1,
          },
        ],
      }"
    >
      <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        <div
          v-for="post in paginate(list)"
          :key="post._path"
          class="border border-gray-400 rounded-lg shadow p-4 bg-yellow-300 bg-gradient-to-t from-transparent to-white opacity-100 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-110"
        >
          <NuxtLink
            :to="post.slug"
            class="flex max-w-xl flex-col items-start justify-between"
          >
            <div class="flex flex-col text-xs">
              <time
                :datetime="post.date"
                class="text-gray-500 mb-2"
              >{{ post.date }}</time>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                {{ post.title }}
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                {{ post.description }}
              </p>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
              <img
                :src="post.avatar"
                alt=""
                class="h-10 w-10 rounded-full bg-gray-50"
              >
              <div class="text-sm leading-6">
                <p class="font-semibold text-gray-900">
                  {{ post.author }}
                </p>
                <p class="text-gray-600">
                  {{ post.role }}
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
      <UPagination
        v-model="page"
        class="my-4"
        :ui="{ wrapper: 'justify-center'}"
        size="md"
        :page-count="pageCount"
        :total="list.length"
      />
    </ContentList>
  </main>
</template>

<script setup>
import { ref } from "vue"

const pageCount = 6
const page = ref(1)

function paginate(list) {
	return list.slice((page.value - 1) * pageCount, page.value * pageCount)
}
</script>
