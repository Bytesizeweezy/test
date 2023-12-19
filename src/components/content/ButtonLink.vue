<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  },
  external: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <span class="not-prose" ref="test1">
    <NuxtLink :to="href" :external="external" class="inline-flex items-center gap-1 text-white bg-gray-800 dark:bg-gray-200 dark:text-gray-950 px-3 py-1 rounded no-underline"  ref="test2">
      <Icon v-if="icon" :name="icon" class="w-4 h-4" />
      <ContentSlot :use="$slots.default" unwrap="p" />
    </NuxtLink>
  </span>
</template>
