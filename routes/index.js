const router = require('koa-router')()
// const { query } = require('../utils/query')
// const {
//   CREATE_TABLE,
//   INSERT_TABLE,
//   UPDATE_TABLE,
//   DELETE_TABLE
// } = require('../utils/sql')

// 初始化数据库，创建表
// query(CREATE_TABLE)

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

// 运营数据
const operat = {
  
}
router.get('/operating', async (ctx, next) => {
  const data = [
    {"x": "04/05", "y": 500,"z": 22},
    {"x": "04/06", "y": 200,"z": 59},
    {"x": "04/07", "y": 85,"z": 51},
    {"x": "04/08","y": 190,"z": 18},
    {"x": "04/09", "y": 70,"z": 100},
    {"x": "04/10", "y": 500,"z": 22},
    {"x": "04/11", "y": 200,"z": 59},
    {"x": "04/12", "y": 85,"z": 51},
    {"x": "04/13","y": 190,"z": 18},
    {"x": "04/14", "y": 70,"z": 100}
  ]
  ctx.body = data
})

// 后台数据
router.get('/backend', async (ctx, next) => {
  const data = [
    {"x": "周一", "y": 100},
    {"x": "周二", "y": 75},
    {"x": "周三", "y": 30},
    {"x": "周四", "y": 65},
    {"x": "周五", "y": 50},
    {"x": "周六", "y": 70},
    {"x": "周日", "y": 40}
  ]
  ctx.body = data
})


// 平台数据
router.get('/platform', async (ctx, next) => {
  const data = [
    {"name": "微信", "value": 50},
    {"name": "支付宝", "value": 45},
    {"name": "现金", "value": 10}
  ]
  ctx.body = data
})

// 平台
router.get('/platform-time', async (ctx, next) => {
  const data = [
    {"name": "0.5小时内", "value": 50},
    {"name": "0.5~2小时", "value": 45},
    {"name": "2~4小时", "value": 10}
  ]
  ctx.body = data
})

// 车位利用率top5
router.get('/efficiency', async (ctx, next) => {
  const data = [
    { "x": "宁波微软大厦停车场1", "y": "375",  "s": "系列1"},
    { "x": "宁波微软大厦停车场2", "y": "180",  "s": "系列2"},
    { "x": "宁波微软大厦停车场3", "y": "100",  "s": "系列3"},
    { "x": "宁波微软大厦停车场4", "y": "200",  "s": "系列4"},
    { "x": "宁波微软大厦停车场5", "y": "100",  "s": "系列5"},
  ]
  ctx.body = data
})



module.exports = router
