<!-- 课程列表页 -->
<script setup lang="ts">
import type { IResult } from '~/types/IResult'

const route = useRoute()
const type = route.params.type as string
const title = type === 'course' ? '课程' : '专栏'
useHead({ title })

const url = type === 'course' ? '/api/course' : '/api/column'
const page = ref(1)
// const size = ref(8)
const {
  data,
} = await useFetch<IResult>(() => `${url}?page=${page.value - 1}`, {
  watch: [page],
})

// function onPageChange(pageNum: number) {
//   page.value = pageNum
// }

const links = [
  { label: '首页', to: '/' },
  { label: title },
]
</script>

<template>
  <div>
    <UBreadcrumb class="mb-5" :links divider="/" />
    <!-- 课程渲染 -->
    <div class="grid grid-cols-4 gap-x-5">
      <div v-for="item in data?.data.list" :key="item.id">
        <Prod :data="item" :type="type" />
      </div>
    </div>
    <!-- 分页组件 -->
    <div class="flex justify-center items-center mt-5 mb-10">
      <UPagination
        v-model="page" size="lg" :total="data?.data.total" :page-count="8"
      />
    </div>
  </div>
</template>
