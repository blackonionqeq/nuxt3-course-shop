<!-- 修改资料页面 -->
<script setup lang="ts">
import type { IResult } from '~/types/IResult'

// 获取用户名
const store = useUser()
const { userInfo } = storeToRefs(store)

// const formRef = ref(null)
const form = reactive({
  avatar: '',
  nickname: '',
  sex: '',
})

watchEffect(() => {
  if (userInfo.value) {
    form.avatar = userInfo.value.avatar!
    form.nickname = userInfo.value.nickname!
    form.sex = userInfo.value.sex!
  }
})

const loading = ref(false)
async function onSubmit() {
  const { ok, data } = await httpPost<IResult>('/api/userinfo', form)

  // 刷新用户信息
  // useRefreshUserInfo()
  if (ok) {
    store.userInfo = data
    // message.info('更新成功')
  }
}

const list = [{
  label: '保密',
  value: '',
}, {
  label: '男',
  value: 'man',
}, {
  label: '女',
  value: 'woman',
}]
</script>

<template>
  <div class="p-5">
    <UForm :state="form" label-width="80" label-placement="left">
      <UFormGroup label="昵称" path="nickname">
        <UInput v-model="form.nickname" placeholder="请输入昵称" />
      </UFormGroup>
      <UFormGroup label="性别" path="sex">
        <URadioGroup v-model="form.sex" :options="list" name="sex">
          <!-- </USpace> -->
        </URadioGroup>
      </UFormGroup>
      <UFormGroup>
        <UButton class="ml-8" type="primary" :loading="loading" @click="onSubmit">
          提交修改
        </UButton>
      </UFormGroup>
    </UForm>
  </div>
</template>
