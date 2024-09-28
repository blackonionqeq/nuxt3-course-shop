<script setup lang="ts">
useHead({
  title: '课程学堂',
})

const { data, error } = await useFetch('/api/indexdata')
const slides = [
  { label: '1', bgColor: 'cadetblue' },
  { label: '2', bgColor: 'cornflowerblue' },
  { label: '3', bgColor: 'blueviolet' },
  { label: '4', bgColor: 'brown' },
]
if (import.meta.server && error.value)
  showError('获取数据失败！')
</script>

<template>
  <UCarousel v-slot="{ item }" :items="slides" class="mb-6">
    <div
      :key="item.label"
      class="text-white w-full h-[400px] rounded cursor-pointer text-center leading-[400px]"
      :style="{ backgroundColor: item.bgColor }"
    >
      {{ item.label }}
    </div>
  </UCarousel>
  <ProdList
    :data="data?.data.courses!"
    title="最新课程"
  />
  <ProdList
    :data="data?.data.columns!"
    title="最新专栏"
    type="column"
  />
</template>
