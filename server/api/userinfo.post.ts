// import { isNuxtError } from 'nuxt/app'
import { updateUser } from '../database/repositories/userRepository'
import { getUserInfo } from '../utils/token'
// import { getTokenInfo } from '../database/service/token'

export default defineEventHandler(async (e) => {
  // 验证权限

  try {
    let user = (await getUserInfo(
      getCookie(e, 'token')!,
    ))!
    // 获取更新数据
    const body = await readBody(e)

    if (!body || body.username || body.password) {
      let statusMessage
      if (!body)
        statusMessage = '参数不存在'
      else if (body.username)
        statusMessage = '用户名不能修改'
      else
        statusMessage = '请使用修改密码接口'
      return sendError(e, createError({
        statusCode: 400,
        statusMessage,
      }))
    }

    user = await updateUser(user.id, body)
    return { ok: true, data: user }
  }
  catch (error) {
    console.error(error)
    return sendError(e, createError('更新用户信息失败!'))
  }
})
