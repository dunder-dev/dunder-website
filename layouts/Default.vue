<template>
  <div class="min-h-screen bg-gray-900">
    <nav class="bg-gray-900 inset-x-0 top-0 fixed w-full">
      <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> -->
      <MobileMenu />

      <DesktopMenu />
    </nav>
    <main class="mt-24">
      <NuxtPage />
    </main>

    <!-- <footer class="bg-white rounded-lg shadow dark:bg-gray-800 inset-x-0 bottom-0 h-16">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">2024 <a
            href=""
            class="hover:underline"
          >Dunder Dev</a>
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                href="https://www.linkedin.com/company/developer-underground"
                class="hover:underline me-4 md:me-6"
              >LinkedIn</a>
            </li>
            <li>
              <a
                href="https://x.com/dunder_dev"
                class="hover:underline me-4 md:me-6"
              >Twitter</a>
            </li>
          </ul>
        </div>
      </footer> -->
  </div>
</template>

