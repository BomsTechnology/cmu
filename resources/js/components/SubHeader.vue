<script setup>
const props = defineProps({
  title: String
})
</script>

<template>
<div class="w-full bg-gray-100 p-8 text-center">
    <h1 class="md:text-4xl text-2xl font-extralight">{{ title}}</h1>
</div>
</template>