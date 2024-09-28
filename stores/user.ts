import type { User } from '@prisma/client'

export const useUser = defineStore('user', {
  state: () => ({
    userInfo: null as null | User,
  }),
})
