import bcrypt from 'bcryptjs'
// import { isNuxtError } from 'nuxt/app'
import { updateUser } from '../database/repositories/userRepository'
import { getUserInfo } from '../utils/token'
// import { getTokenInfo } from '../database/service/token'

export default defineEventHandler(async (e) => {
  const user = (await getUserInfo(
    getCookie(e, 'token')!,
  ))!

  // if (isNuxtError(user)) {
  //   return sendError(e, createError({
  //     statusCode: 401,
  //     statusMessage: '请先登录!',
  //   }))
  // }

  try {
    // 获取更新数据
    const body = await readBody(e)

    if (!body || !body.oldPwd || !body.newPwd) {
      return sendError(e, createError({
        statusCode: 400,
        statusMessage: '参数错误',
      }))
    }

    // 验证原密码
    // const user = await getUserByUsername(user.username)

    // 校验密码
    const result = await bcrypt.compare(body.oldPwd, user!.password)

    if (!result) {
      return sendError(e, createError({
        statusCode: 400,
        statusMessage: '原密码错误!',
      }))
    }

    // 加密
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(body.newPwd, salt)

    await updateUser(user.id, { password: hash })
    return { ok: true }
  }
  catch (error) {
    console.error(error)
    return sendError(e, createError('更新密码失败!'))
  }
})
