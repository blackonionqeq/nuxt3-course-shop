<script setup lang="ts">
// import type { FormInst } from 'naive-ui'
import type { IResult } from '~/types/IResult'

useHead({ title: '修改密码' })

// const formRef = ref<FormInst>()
const form = reactive({
  oldPwd: '',
  newPwd: '',
  repassword: '',
})

// const rules = {
//   oldPwd: [{
//     required: true,
//     message: '原密码必填',
//   }],
//   newPwd: [{
//     required: true,
//     message: '密码必填',
//   }],
//   repassword: [{
//     required: true,
//     message: '确认密码必填',
//   }, {
//     validator(rule, value) {
//       return value === form.newPwd
//     },
//     message: '两次密码输入不一致',
//     trigger: ['input', 'blur'],
//   }],
// }

const loading = ref(false)
async function onSubmit() {
  // formRef.value!.validate(async (errors) => {
  // if (errors)
  //   return

  // const {
  //   ok,
  // } =
  await httpPost<IResult>('/api/change-password', form)

  // if (ok)
  //   message.success('修改密码成功！')
  // })
}
</script>

<template>
  <div class="p-5">
    <UForm :state="form" label-width="80">
      <UFormGroup label="原密码" path="oldPwd">
        <UInput v-model="form.oldPwd" placeholder="原密码" type="password" />
      </UFormGroup>
      <UFormGroup label="新密码" path="newPwd">
        <UInput v-model="form.newPwd" placeholder="新密码" type="password" />
      </UFormGroup>
      <UFormGroup label="确认密码" path="repassword">
        <UInput
          v-model="form.repassword" placeholder="确认密码" type="password"
          :disabled="!form.newPwd"
        />
      </UFormGroup>
      <div class="flex justify-end">
        <UButton type="primary" :loading="loading" @click="onSubmit">
          密码修改
        </UButton>
      </div>
    </UForm>
  </div>
</template>
