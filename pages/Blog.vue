<template>
  <div class="bg-white py-24 sm:py-32 bg-svg">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0 border-b border-gray-400">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          From the BeeByteBlog
        </h2>
        <p class="my-2 text-lg leading-8 text-gray-600">
          Read the musings from a team of developers who happen to be friends.
        </p>
      </div>

      <ContentList
        v-slot="{ list }"
        path="/posts"
        :query="{
          draft: false,
          sort: [
            {
              date: -1,
            },
          ],
        }"
      >
        <UPagination
          v-model="page"
          :ui="{ wrapper: 'justify-center'}"
          size="md"
          :page-count="pageCount"
          :total="list.length"
        />

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
                  datetime="2020-03-16"
                  class="text-gray-500 mb-2"
                >{{ post.date }}</time>
                <!-- <div class="flex text-xs">
                      <div v-for="tag in post.tags" :key="tag">
                        <a href="#" class="relative z-10 mr-2 rounded-full px-3 py-1.5 font-medium border border-gray-300 shadow bg-yellow-100">{{ tag }}</a>
                      </div>
                    </div> -->
              </div>
              <div class="group relative">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span class="absolute inset-0" />
                    {{ post.title }}
                  </a>
                </h3>
                <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {{ post.description }}
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
            </NuxtLink>
          </div>
        </div>
      </ContentList>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
const pageCount = 6
const page = ref(1)

function paginate(list) {
	return list.slice((page.value - 1) * pageCount, page.value * pageCount)
}

</script>

