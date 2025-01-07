<template>
  <div
    id="navbar-default"
    class="hidden w-full md:flex flex-wrap items-center justify-between mx-auto py-4 px-8 text-white"
  >
    <NuxtLink
      to="/"
      class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
      @click="isOpen = false"
    >
      <img
        src="/images/logo.png"
        width="300"
        alt="Dunder Dev Logo"
      />
    </NuxtLink>
    <div class="font-medium flex flex-col gap-8 p-4 md:p-0 mt-4 md:flex-row rtl:space-x-reverse md:mt-0 md:border-0 text-white">
      <NuxtLink
        to="https://courses.dunder.dev"
        target="_blank"
        class="block py-2 hover:pb-0 hover:bg-gray-100 md:hover:bg-transparent md:border-0 text-gray-300 md:hover:text-white hover:border-b-2 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      >
        Courses
      </NuxtLink>
      <!-- <NuxtLink
        to="/blog-page"
        class="block py-2 hover:pb-0 hover:bg-gray-100 md:hover:bg-transparent md:border-0 text-gray-300 md:hover:text-white hover:border-b-2 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      >
        Blog
      </NuxtLink> -->
      <NuxtLink
        to="https://courses.dunder.dev/login/"
        target="_blank"
        class="block py-2 hover:pb-0 hover:bg-gray-100 md:hover:bg-transparent md:border-0 text-gray-300 md:hover:text-white hover:border-b-2 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      >
        Course Login
      </NuxtLink>
    </div>
  </div>
</template>