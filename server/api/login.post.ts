import type { User } from '@prisma/client'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { getUserByUsername } from '../database/repositories/userRepository'

export default defineEventHandler(async (event) => {
  const { username, password } = await readBody<User>(event)
  try {
    const user = await getUserByUsername(username)
    if (!user) {
      return sendError(event, createError({
        statusCode: 401,
        statusMessage: '不存在该用户名',
      }))
    }

    const result = await bcrypt.compare(password, user.password)
    if (!result) {
      return sendError(event, createError({
        statusCode: 401,
        statusMessage: '密码错误',
      }))
    }

    // eslint-disable-next-line node/prefer-global/process
    const secret = process.env.JSON_SECRET!
    const token = jwt.sign({ username: user.username }, secret, { expiresIn: '24h' })
    setCookie(event, 'token', token, { maxAge: 24 * 60 * 60 })
    return {
      ok: true,
      data: user,
    }
  }
  catch (err) {
    console.error(err)
    return sendError(event, createError('登录失败！'))
  }
})
