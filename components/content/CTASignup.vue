<script setup>
import { ref, watch } from 'vue'

const email = ref('')

watch(email, (newVal) => {
	console.log(newVal)
})
</script>

<template>
  <div class="flex flex-col justify-center align-middle uppercase py-2 bg-gradient-to-br from-orange-600 to-amber-400 md:flex-row md:max-h-32 md:gap-x-8 lg:gap-x-16">
    <div class="flex flex-col w-full justify-center align-middle text-center text-gray-100 text-2xl md:max-w-fit">
      Stay informed
    </div>
    <div class="w-full text-center md:max-w-fit">
      <Input
        v-model="email"
        placeholder="Enter your email"
        class="mr-3"
      />
      <Button
        label="Sign Up"
      />
    </div>
  </div>
</template>
