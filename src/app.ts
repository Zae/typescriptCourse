import * as Koa from 'koa'
import * as Router from 'koa-router'

const app = new Koa()
const router = new Router()

router.get('/hello', async (ctx, next) => {
  ctx.body = 'Hello World!'
  ctx.status = 200
  return next
})

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(8080)
