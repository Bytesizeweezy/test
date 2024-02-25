<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  sendMailButtonText: {
    type: String,
    default: 'Per E-mail kontaktieren'
  },
  fields: {
    type: Object as PropType<{email: String}>,
    default: () => { '' }
  }
})
</script>

<template>
    <div class="text">
    E-mail: {{ fields.email }}
    </div>
    <div>
    <Button>
      <a :href="'mailto:' + fields.email">{{ sendMailButtonText }}</a>
    </Button>
    </div>
</template>

<style scoped lang="ts">
css({
  '.text': {
    marginTop: '{space.8}',
    marginBottom: '{space.2}',
    fontSize: '{text.xl.fontSize}',
    lineHeight: '{text.xl.lineHeight}',
  }
})
</style>
