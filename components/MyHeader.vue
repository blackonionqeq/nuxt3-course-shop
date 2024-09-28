<script setup>
import { logout } from '~/utils/auth'
import Menu from './Menu.vue'

const { userInfo } = storeToRefs(useUser())

// import { UHorizontalNavigation } from '#build/components'

const route = useRoute()
const menus = ref([
  { path: '/', label: '首页' },
  { path: '/list/column', label: '专栏' },
  { path: '/list/course', label: '课程' },
])

const options = [[{
  label: '用户中心',
  key: 'center',
  click: () => navigateTo('/usercenter'),
}], [{
  label: '退出',
  key: 'logout',
  click: logout,
}]]
</script>

<template>
  <div class="bg-white fixed top-0 left-0 right-0 shadow-sm z-1000">
    <div class="container m-auto flex items-center h-[60px] px-4">
      <UButton text strong class="text-xl" @click="navigateTo('/')">
        课程商店
      </UButton>

      <div class="flex-1 flex items-center px-4">
        <Menu
          v-for="menu in menus"
          :key="menu.path"
          :active="route.path === menu.path"
          @click="navigateTo(menu.path)"
        >
          {{ menu.label }}
        </Menu>
      </div>

      <NuxtLink v-if="!userInfo" to="/login">
        <UButton secondary strong>
          登录
        </UButton>
      </NuxtLink>
      <UDropdown v-else :items="options" mode="click">
        <UAvatar src="/favicon.ico" />
      </UDropdown>
    </div>
  </div>
</template>
