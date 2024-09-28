# Nuxt3开发的商城项目

## 特点
前后端同构、docker、ORM

## 开发
遵循Nuxt的架构，前端入口是app.vue，排版页在layouts中，业务内容在pages中；后端内容放server目录下；

### 关于后端的一些补充说明
可具体分为api层（server/api目录下）、数据库ORM层（server/database）。

另外需要注意，后端的报错信息需要在终端查看，前端默认是看不到的。

### 开发流程
1. 打开docker desktop
2. 终端执行docker compose up -d
3. (可选)docker启动后，在localhost:8080通过adminer查看数据库内容
4. pnpm dev -o

### trobleshooting
遇到前端报错（例如说找不到/pages/xxx.vue），先去终端看是不是有该文件的报错（编译校验不通过，导致没往下走，就没有结果了，所以找不到）；
遇到后端报错（例如500，来自h3的报错），先去看终端的后端报错。后端编译时如果报错，很可能就没往下走了，这时接口都会报500；
