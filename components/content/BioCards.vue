<script setup lang="ts">
import { ref } from 'vue'

const cards = [
	{
		name: 'Gwendolyn Faraday',
		description: 'Gwendolyn is a professional software developer with 9 years of experience. She has worked as an ML engineer and is now an AI engineer specializing at the intersection of AI, architecture, and software.',
		image: '/images/gwen_profile.jpg'
	},
	{
		name: 'Daniel Lomelino',
		description: 'Daniel was a highly-rated lead instructor for Python at a coding school for several years. With over 20 years of experience in software development, he brings a wealth of knowledge and teaching expertise to the table.',
		image: '/images/daniel_profile.jpg'
	},
	{
		name: 'Piero Madar',
		description: 'Piero has decades of experience working in tech and served as a director of a coding school. He developed coding curricula and is an excellent teacher. Currently, he is heavily involved in the AI space.',
		image: '/images/piero_profile.jpg'
	},
	{
		name: 'Rodney Blevins',
		description: 'Rodney is a software developer who thrives in fast-paced environments. He has a decade of experience working in Python and other languages, adding a lot of fun and flavor to our group.',
		image: '/images/rodney_profile.jpg'
	},
	{
		name: 'Shahlo Seidmedova',
		description: 'Shay hails from Turkmenistan and has 3 years of experience as a professional developer. She is very passionate about learning and coding, and is currently building language learning tools using AI.',
		image: '/images/shahlo_profile.jpg'
	}
]
</script>

<template>
  <div class="grid grid-cols-1 lg:flex flex-wrap gap-y-4 justify-around pt-4 px-6 lg:mx-16 lg:max-w-none lg:gap-x-8">
    <div
      v-for="card in cards"
      :key="card.name"
      class="w-full max-w-md mx-auto mb-4 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl lg:w-6/12 lg:max-w-xl"
    >
      <div class="md:flex lg:flex-col xl:flex-row xl:h-full">
        <div class="md:shrink-0 lg:w-full xl:w-48">
          <NuxtImg
            class="h-96 w-full object-cover md:h-full md:w-48 lg:w-full"
            :src="card.image"
            :alt="card.name"
          />
        </div>
        <div class="p-8 bg-gradient-to-br from-orange-600 to-amber-400">
          <div class="uppercase tracking-wide text-xl text-white font-semibold">
            {{ card.name }}
          </div>
          <a
            href="#"
            class="block mt-1 text-lg leading-tight text-black hover:underline"
          >{{ card.description }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
