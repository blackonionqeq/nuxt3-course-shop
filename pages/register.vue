<script lang="ts" setup>
import { httpPost } from '~/composables/request'
import { useUser } from '~/stores/user'

useHead({
  title: '注册',
})

definePageMeta({
  layout: 'blank',
})

const state = ref({
  username: '',
  password: '',
  confirmPass: '',
})

async function handleRegister() {
  // console.log('before fetch')
  // const res = await $fetch('/api/register', {
  //   method: 'POST',
  //   body: {
  //     username: state.value.username,
  //     password: state.value.password,
  //   },
  // }).catch(err => console.error(err))
  // console.log(res)
  const { ok, data } = await httpPost('/api/register', {
    username: state.value.username,
    password: state.value.password,
  })
  if (ok) {
    useUser().userInfo = data
    navigateTo('/')
  }
}
</script>

<template>
  <h2>注册</h2>
  <UForm :state="state" class="w-[340px]" size="large">
    <UFormGroup class="mt-2" name="username">
      <UInput v-model="state.username" clearable placeholder="用户名" />
    </UFormGroup>
    <UFormGroup class="mt-2" name="password">
      <UInput v-model="state.password" clearable placeholder="密码" type="password" />
    </UFormGroup>
    <UFormGroup class="mt-2" name="confirmPass">
      <UInput v-model="state.confirmPass" clearable placeholder="确认密码" type="password" />
    </UFormGroup>

    <div>
      <UButton class="w-full mt-2 flex items-center" type="primary" @click="handleRegister">
        登录
      </UButton>
    </div>
    <div class="flex justify-center items-center w-full text-xs mt-5 text-gray-600">
      注册即同意
      <UButton variant="link" type="primary">
        《服务协议》
      </UButton>
      和
      <UButton variant="link" type="primary">
        《隐私政策》
      </UButton>
    </div>
  </UForm>
</template>
