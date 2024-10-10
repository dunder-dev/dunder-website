<template>
  <div class="min-h-screen bg-gray-900">
    <nav class="bg-gray-900 inset-x-0 top-0 fixed w-full">
      <MobileMenu />

      <DesktopMenu />
    </nav>

    <main class="mt-24 mb-12">
      <NuxtPage />
    </main>

    <footer class="bg-gray-900 shadow inset-x-0 bottom-0 h-16 text-gray-400">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm sm:text-center dark:text-gray-400">2024 <a
          href=""
          class="hover:underline"
        >Dunder Dev</a>
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0 list-none">
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
    </footer>
  </div>
</template>

