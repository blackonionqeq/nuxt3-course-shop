<script setup lang="ts">
useHead({
  title: '登录',
})

definePageMeta({
  layout: 'blank',
})

const state = reactive({
  username: '',
  password: '',
})

async function handleLogin() {
  const { ok, data } = await httpPost('/api/login', {
    username: state.username,
    password: state.password,
  })
  if (ok) {
    useUser().userInfo = data
    navigateTo('/')
  }
}
</script>

<template>
  <h2 class="flex justify-between">
    返回羊村
    <nuxt-link to="/register">
      <UButton variant="link" type="primary">
        还未入村？
      </UButton>
    </nuxt-link>
  </h2>

  <UAlert title="演示账号和密码为：test" type="info" class="mb-6" />

  <UForm :state class="w-[340px]" size="large">
    <UFormGroup path="username">
      <UInput v-model="state.username" class="mt-2" clearable placeholder="用户名" />
    </UFormGroup>
    <UFormGroup path="password">
      <UInput v-model="state.password" class="mt-2" clearable placeholder="密码" type="password" />
    </UFormGroup>

    <div>
      <UButton class="w-full mt-2" type="primary" @click="handleLogin">
        登录
      </UButton>
    </div>
  </UForm>
</template>
