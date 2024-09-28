<script setup lang="ts">
useHead({ title: '购买记录' })

const { data, pending } = useFetch('/api/perchased-course')
</script>

<template>
  <div class="p-3">
    <p v-if="pending">
      loading...
    </p>
    <template v-else>
      <UCard
        v-for="item in data!.data"
        :key="item.id"
        class="cursor-pointer mb-5 shadow-md !border-0"
        footer-style="padding:0;"
      >
        <div class="flex">
          <img
            :src="`${item.cover}`"
            class="h-[150px]"
          >
          <div class="ml-4">
            <h3 class="pt-2">
              <span class="font-bold w-full truncate font-semibold">
                {{ item.title }}
              </span>
            </h3>
            <div class="mt-2 flex">
              <UButton @click="navigateTo(`/course/detail/${item.id}`)">
                继续学习
              </UButton>
            </div>
          </div>
        </div>
      </UCard>
    </template>
  </div>
</template>
