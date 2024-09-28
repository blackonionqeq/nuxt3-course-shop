import type { User } from '@prisma/client'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { createUser, getUserByUsername } from '../database/repositories/userRepository'

export default defineEventHandler(async (event) => {
  try {
    // 读取用户的参数
    const data = await readBody<User>(event)
    const { username, password } = data

    // 判断是否存在同名用户
    const user = await getUserByUsername(username)
    if (user) {
      return sendError(event, createError({
        statusCode: 400,
        statusMessage: '已存在同名用户！',
      }))
    }

    // 加密
    const salt = await bcryptjs.genSalt(10)
    const hash = await bcryptjs.hash(password, salt)
    // 替换原有密码
    data.password = hash

    // 入库
    const result = await createUser(data)

    // eslint-disable-next-line node/prefer-global/process
    const secret = process.env.JSON_SECRET!
    const token = jwt.sign({ username: result.username }, secret, { expiresIn: '24h' })
    setCookie(event, 'token', token, { maxAge: 24 * 60 * 60 })

    return { ok: true, data: result }
  }
  catch (err) {
    console.error(err)
    return sendError(event, createError('注册失败！'))
  }
})
