// import type { JwtPayload } from 'jsonwebtoken'
import jwt from 'jsonwebtoken'
import { getUserByUsername } from '../database/repositories/userRepository'

export async function getUserInfo(token: string) {
  // let info

  // const token = getCookie(e, 'token')

  // 令牌不存在
  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: 'token不存在!',
    })
  }
  else {
    // 解析token
    // eslint-disable-next-line node/prefer-global/process
    const info = jwt.verify(token, process.env.JSON_SECRET!) as jwt.JwtPayload
    const currentTime = Date.now() / 1000

    if (info.exp! < currentTime) {
      throw createError({
        statusCode: 401,
        statusMessage: 'token过期!',
      })
    }

    const user = await getUserByUsername(info.username)

    return user
  }
}
