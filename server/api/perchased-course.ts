// import { isNuxtError } from 'nuxt/app'
import { getCoursesByUser } from '../database/repositories/orderRepository'
import { getUserInfo } from '../utils/token'

export default defineEventHandler(async (e) => {
  try {
    const userInfo = (await getUserInfo(
      getCookie(e, 'token')!,
    ))!

    const courses = await getCoursesByUser(userInfo.id)

    return { ok: true, data: courses }
  }
  catch {
    return sendError(e, createError('获取数据失败'))
  }
})
