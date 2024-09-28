import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  await prisma.column.create({
    data: {
      title: '非常牛逼的课程1',
      cover: 'column-nuxt.png',
      desc: '如题，这个课程非常非常牛逼啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
      content: `这里是内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容`,
    },
  })
  await prisma.column.create({
    data: {
      title: '非常牛逼的课程1',
      cover: 'column-nuxt.png',
      desc: '如题，这个课程非常非常牛逼啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
      content: `这里是内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容`,
    },
  })
  await prisma.column.create({
    data: {
      title: '非常牛逼的课程1',
      cover: 'column-nuxt.png',
      desc: '如题，这个课程非常非常牛逼啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
      content: `这里是内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容`,
    },
  })
  await prisma.column.create({
    data: {
      title: '非常牛逼的课程1',
      cover: 'column-nuxt.png',
      desc: '如题，这个课程非常非常牛逼啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
      content: `这里是内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容`,
    },
  })

  await prisma.course.create({
    data: {
      title: '语文',
      cover: 'course-yuwen.png',
      desc: '这门课我会全面讲解语文',
      oPrice: 129,
      price: 99,
      detail: `这里有很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多字`,
      Catalogue: {
        createMany: {
          data: [
            { title: '01开篇：课程介绍和安排', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '02上层框架最佳选择', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '03五种渲染模式', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '04快速创建首个nuxt项目', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '05文件路由和布局', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '06使用静态资源', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '07自动导入特性', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '08API路由', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '09数据获取', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '10状态管理', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '11错误处理', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '12常用配置和优化', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
          ],
        },
      },
    },
  })

  await prisma.course.create({
    data: {
      title: '语文',
      cover: 'course-yuwen.png',
      desc: '这门课我会全面讲解语文',
      oPrice: 129,
      price: 99,
      detail: `这里有很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多字`,
      Catalogue: {
        createMany: {
          data: [
            { title: '01开篇：课程介绍和安排', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '02上层框架最佳选择', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '03五种渲染模式', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '04快速创建首个nuxt项目', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '05文件路由和布局', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '06使用静态资源', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '07自动导入特性', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '08API路由', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '09数据获取', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '10状态管理', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '11错误处理', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '12常用配置和优化', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
          ],
        },
      },
    },
  })
  await prisma.course.create({
    data: {
      title: '语文',
      cover: 'course-yuwen.png',
      desc: '这门课我会全面讲解语文',
      oPrice: 129,
      price: 99,
      detail: `这里有很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多字`,
      Catalogue: {
        createMany: {
          data: [
            { title: '01开篇：课程介绍和安排', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '02上层框架最佳选择', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '03五种渲染模式', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '04快速创建首个nuxt项目', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '05文件路由和布局', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '06使用静态资源', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '07自动导入特性', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '08API路由', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '09数据获取', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '10状态管理', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '11错误处理', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '12常用配置和优化', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
          ],
        },
      },
    },
  })
  await prisma.course.create({
    data: {
      title: '语文',
      cover: 'course-yuwen.png',
      desc: '这门课我会全面讲解语文',
      oPrice: 129,
      price: 99,
      detail: `这里有很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多字`,
      Catalogue: {
        createMany: {
          data: [
            { title: '01开篇：课程介绍和安排', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '02上层框架最佳选择', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '03五种渲染模式', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '04快速创建首个nuxt项目', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '05文件路由和布局', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '06使用静态资源', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '07自动导入特性', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '08API路由', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '09数据获取', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '10状态管理', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '11错误处理', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '12常用配置和优化', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
          ],
        },
      },
    },
  })
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
