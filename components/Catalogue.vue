<script setup lang="ts">
import type { Catalogue } from '@prisma/client'

defineProps({
  data: Array<Catalogue>,
})
</script>

<template>
  <ul class="list-none">
    <li
      v-for="(item, index) in data"
      :key="item.id"
      class="flex p-5 border-b cursor-pointer text-sm hover: ( !bg-gray-100) active:( !bg-gray-200)"
      @click="navigateTo(item.source, { external: true })"
    >
      <UBadge variant="solid" size="sm" class="mr-3">
        第{{ index + 1 }}节
      </UBadge>
      <span>{{ item.title }}</span>
    </li>
  </ul>
</template>
