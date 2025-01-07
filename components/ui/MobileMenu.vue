<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <div class="md:hidden w-full flex flex-wrap items-center justify-between mx-auto py-4 px-4 text-white">
    <NuxtLink
      to="/"
      class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
      @click="isOpen = false"
    >
      <img
        src="/images/logo.png"
        width="200"
        alt="Dunder Dev Logo"
        class="relative z-50"
      />
    </NuxtLink>
    <font-awesome
      v-if="!isOpen"
      icon="bars"
      class="text-3xl z-1"
      @click="isOpen = !isOpen"
    />
    <font-awesome
      v-if="isOpen"
      icon="xmark"
      class="relative text-3xl z-50"
      @click="isOpen = false"
    />
    <transition
      enter-active-class="duration-300 ease-out"
      enter-from-class="transform opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="transform opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-gray-900 z-0"
      >
        <div class="mt-28 text-3xl text-center">
          <!-- <NuxtLink
            to="/blog-page"
            class="block py-2 hover:pb-0 text-gray-300 hover:border-b-2"
            @click="isOpen = false"
          >
            Blog
          </NuxtLink> -->
          <NuxtLink
            to="https://courses.dunder.dev"
            target="_blank"
            class="block py-2 hover:pb-0 text-gray-300 hover:border-b-2"
            @click="isOpen = false"
          >
            Courses
          </NuxtLink>
          <!-- <NuxtLink
          to="/guides"
          class="block py-2 hover:pb-0 text-gray-300 hover:border-b-2"
          @click="isOpen = false"
        >
          Free Guides
        </NuxtLink> -->
          <NuxtLink
            to="https://courses.dunder.dev/login/"
            target="_blank"
            class="block py-2 hover:pb-0 text-gray-300 hover:border-b-2"
            @click="isOpen = false"
          >
            Course Login
          </NuxtLink>
        </div>
      </div>
    </transition>
  </div>
</template>
