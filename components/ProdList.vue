<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: '标题',
  },
  data: {
    type: Array<any>,
    required: true,
  },
  type: {
    type: String,
    default: 'course',
  },
})
</script>

<template>
  <div>
    <div class="flex mb-3">
      <span>{{ title }}</span>
      <UButton variant="link" class="ml-auto">
        查看更多
      </UButton>
    </div>
    <div class="mb-6 grid grid-cols-4 gap-x-3">
      <div v-for="item in data" :key="item.id">
        <Prod :data="item" :type="type" />
      </div>
    </div>
  </div>
</template>
