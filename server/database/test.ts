import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
	await prisma.user.create({
    data: {
      name: '我觉得不行',
      email: '牛逼@qq.com',
      posts: {
        create: {
          title: '10分钟速通下一代ORM解决方案：Prisma',
        },
      },
    },
  })

  // 查询所有用户
  const allUsers = await prisma.user.findMany({
		include: { posts: true, }
	})
  // eslint-disable-next-line no-console
  console.dir(allUsers, { depth: null })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
