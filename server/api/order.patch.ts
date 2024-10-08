import { updateOrder } from '../database/repositories/orderRepository'

export default defineEventHandler(async (e) => {
  const body = await readBody(e)

  try {
    await updateOrder(body.id, { status: body.status })
    return { ok: true }
  }
  catch {
    return sendError(e, createError('订单状态更新失败'))
  }
})
