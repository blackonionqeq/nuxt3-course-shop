import type { Order } from '@prisma/client'
import { OrderStatus } from '@prisma/client'
import { httpGet } from '~/composables/request'
// import { isNuxtError } from 'nuxt/app'
import { createOrder } from '../database/repositories/orderRepository'
// import { getTokenInfo } from '../database/service/token'
import jwt from 'jsonwebtoken'
import { getUserByUsername } from '../database/repositories/userRepository'

export default defineEventHandler(async (e) => {
  const { courseId } = await readBody(e)

  // const result = getTokenInfo(e)
  // if (isNuxtError(result))
  //   return sendError(e, result)
  const token = getCookie(e, 'token')!
  // eslint-disable-next-line node/prefer-global/process
  const userInfo = jwt.verify(token, process.env.JSON_SECRET!) as jwt.JwtPayload
  // console.log(ok, data)
  console.log(userInfo)
  const order = {
    courseId: +courseId,
    userId: (await getUserByUsername(userInfo.username as string))?.id,
    createdAt: new Date(),
    status: OrderStatus.WAIT_CONFIRM,
  } as Order

  const o = await createOrder(order)

  return { ok: true, data: { orderId: o.id } }
})
