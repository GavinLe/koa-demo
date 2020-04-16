const router = require('koa-router')()
const utils = require('../utils')
const moment = require('moment')

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

var DATAINIT = {
  operat: {
    baseTotalNum: 1085117, // 用户总数基数
    todayAddNum: 150, //今日新增
    todayActiveNum: 14623 // 今日活跃数
  },
  operatListInit: false,
  operatList: [
    {x: utils.getCurrentDayNum(-5, 'MM月DD号'), y: 2700, z: 1400},
    {x: utils.getCurrentDayNum(-4, 'MM月DD号'), y: 5830, z: 1230},
    {x: utils.getCurrentDayNum(-3, 'MM月DD号'), y: 4970, z: 1100},
    {x: utils.getCurrentDayNum(-2, 'MM月DD号'), y: 4020, z: 1080},
    {x: utils.getCurrentDayNum(-1, 'MM月DD号'), y: 4300, z: 1030}
  ],
  todayMoneyInit: false,
  backend:{
    todayMoney: 202040,
    historyMoeny: 384030,
    historyOrder: 978309002
  },
  backendList: [
    {"x": utils.getCurrentDayNum(-7, 'MM月DD号'), "y": 39807},
    {"x": utils.getCurrentDayNum(-6, 'MM月DD号'), "y": 33103},
    {"x": utils.getCurrentDayNum(-5, 'MM月DD号'), "y": 34721},
    {"x": utils.getCurrentDayNum(-4, 'MM月DD号'), "y": 37280},
    {"x": utils.getCurrentDayNum(-3, 'MM月DD号'), "y": 30321},
    {"x": utils.getCurrentDayNum(-2, 'MM月DD号'), "y": 38403},
    {"x": utils.getCurrentDayNum(-1, 'MM月DD号'), "y": 22040}
  ],
  platformCarType: [
    {y: 375, s: 1, x: utils.getCurrentDayNum(-7, 'MM月DD号')},{y: 49, s: 2, x: utils.getCurrentDayNum(-7, 'MM月DD号')},
    {y: 312, s: 1, x: utils.getCurrentDayNum(-6, 'MM月DD号')},{y: 23, s: 2, x: utils.getCurrentDayNum(-6, 'MM月DD号')},
    {y: 347, s: 1, x: utils.getCurrentDayNum(-5, 'MM月DD号')},{y: 43, s: 2, x: utils.getCurrentDayNum(-5, 'MM月DD号')},
    {y: 475, s: 1, x: utils.getCurrentDayNum(-4, 'MM月DD号')},{y: 32, s: 2, x: utils.getCurrentDayNum(-4, 'MM月DD号')},
    {y: 321, s: 1, x: utils.getCurrentDayNum(-3, 'MM月DD号')},{y: 57, s: 2, x: utils.getCurrentDayNum(-3, 'MM月DD号')},
    {y: 373, s: 1, x: utils.getCurrentDayNum(-2, 'MM月DD号')},{y: 24, s: 2, x: utils.getCurrentDayNum(-2, 'MM月DD号')},
    {y: 393, s: 1, x: utils.getCurrentDayNum(-1, 'MM月DD号')},{y: 13, s: 2, x: utils.getCurrentDayNum(-1, 'MM月DD号')}
  ],
  platformPay: [
    {"name": "微信", "value": 54},
    {"name": "支付宝", "value": 32},
    {"name": "现金", "value": 14}
  ],
  platformTime: [
    {"name": "30分钟内", "value": 23},
    {"name": "30分钟~60分钟", "value": 32},
    {"name": "1~2小时", "value": 28},
    {"name": "2~4小时", "value": 10},
    {"name": "4小时以上", "value": 0}
  ],
  parkingTraffic: [
    {"x": "0-4时", "y": 1900, "s": "系列1", "hour": 4},
    {"x": "0-4时", "y": 3000, "s": "系列2", "hour": 4},
    {"x": "4-8时", "y": 8800, "s": "系列1", "hour": 8},
    {"x": "4-8时", "y": 1280, "s": "系列2", "hour": 8},
    {"x": "8-12时", "y": 4370, "s": "系列1", "hour": 12},
    {"x": "8-12时", "y": 5960, "s": "系列2", "hour": 12},
    {"x": "12-16时", "y": 4960, "s": "系列1", "hour": 16},
    {"x": "12-16时", "y": 3250, "s": "系列2", "hour": 16},
    {"x": "16-20时", "y": 6870, "s": "系列1", "hour": 20},
    {"x": "16-20时", "y": 7380, "s": "系列2", "hour": 20},
    {"x": "20-24时", "y": 5900, "s": "系列1", "hour": 24},
    {"x": "20-24时", "y": 4620, "s": "系列2", "hour": 24}
  ],
  equipmentList: [
    {"area": "文一西路停车场", "pv": "浙A3***5欠费10元", "attribute": "2020/04/10"},
    {"area": "万达停车场", "pv": "高位相机失去连接", "attribute": "2020/04/05"},
    {"area": "协和路停车场", "pv": "浙A3***5反向停车", "attribute": "2020/04/04"},
    {"area": "微软大楼", "pv": "地磁电量不足", "attribute": "2020/04/02"},
    {"area": "微软大楼", "pv": "地感松动", "attribute": "2019/09/23"},
    {"area": "苏州富泽苑", "pv": "杆子断了，有监控", "attribute": "2019/09/05"},
    {"area": "荪湖开发办", "pv": "客户需要将语音播报取消", "attribute": "2019/09/04"},
    {"area": "文二西路停车场", "pv": "浙A6***1未缴费离场", "attribute": "2019/09/04"},
  ],
  efficiency: [
    { "x": "宁波微软大厦停车场", "y": "375",  "s": "系列1"},
    { "x": "万达停车场", "y": "180",  "s": "系列2"},
    { "x": "龙湖天街停车场", "y": "100",  "s": "系列3"},
    { "x": "明乐佳苑停车场", "y": "200",  "s": "系列4"},
    { "x": "华星科技大厦", "y": "100",  "s": "系列5"},
  ]
}

var DATA = JSON.parse(JSON.stringify(DATAINIT))

// 随机新增 用户总数
router.get('/operating-total', async (ctx, next) => {
  DATA.operat.baseTotalNum += utils.random(5)
  const data = {value: DATA.operat.baseTotalNum}
  ctx.body = data
})
// 随机新增 今日新增
router.get('/operating-add', async (ctx, next) => {
  DATA.operat.todayAddNum += utils.random(5)
  const data = {value: DATA.operat.todayAddNum}
  ctx.body = data
})
// 随机新增 今日活跃
router.get('/operating-active', async (ctx, next) => {
  DATA.operat.todayActiveNum += utils.random(5)
  const data = {value: DATA.operat.todayActiveNum}
  ctx.body = data
})

router.get('/operating', async (ctx, next) => {
  let data = []
  DATA.operatList.forEach((item, index) => {
    if (DATA.operatListInit) {
      item.y += utils.random(5)
      item.z += utils.random(5)
    }
    let time = {"x": utils.getCurrentDayNum((0 - DATA.operatList.length), 'MM月DD号')}
    data.push(Object.assign({},time, item))
  })
  DATA.operatListInit = true
  ctx.body = data
})


// 今日营销总额
router.get('/backend-today-money', async (ctx, next) => {
  if (DATA.todayMoneyInit) {
    DATA.backend.todayMoney += utils.random(5)
  }
  const data = {value: DATA.backend.todayMoney}
  DATA.todayMoneyInit = true
  ctx.body = data
})

// 历史营销总额
router.get('/backend-history-money', async (ctx, next) => {
  const data = {value: DATA.backend.historyMoeny}
  ctx.body = data
})

// 历史营销总额
router.get('/backend-history-order', async (ctx, next) => {
  const data = {value: DATA.backend.historyOrder}
  ctx.body = data
})

// 后台数据
router.get('/backend', async (ctx, next) => {
  const data = DATA.backendList
  ctx.body = data
})

router.get('/platform-car-type', async (ctx, next) => {
  let data = DATA.platformCarType
  ctx.body = data
})

// 平台数据
router.get('/platform-pay', async (ctx, next) => {
  ctx.body = DATA.platformPay
})

// 平台
router.get('/platform-time', async (ctx, next) => {
  ctx.body = DATA.platformTime
})

// 停车流量
router.get('/platform-parking-traffic', async (ctx, next) => {
  let currentHour = moment().locale('zh-cn').format('HH')
  console.log(currentHour)
  let currentList = DATA.parkingTraffic.filter(item => {
    return item.s === '系列2' && Number(item.hour) <= Number(currentHour)
  })
  let preList = DATA.parkingTraffic.filter(item => item.s === '系列1')
  ctx.body =[].concat(preList, currentList)
})

// 异常设备
router.get('/equipment-list', async (ctx, next) => {
  ctx.body = DATA.equipmentList
})

// 车位利用率top5
router.get('/platform-efficiency', async (ctx, next) => {
  ctx.body = DATA.efficiency
})

// 获取当前值
router.get('/config', async (ctx, next) => {
  ctx.body = DATA
})

router.get('/reset', async (ctx, next) => {
  DATA = JSON.parse(JSON.stringify(DATAINIT))
  ctx.response.body = 'reset success。'
})

router.post('/config', async (ctx, next) => {
  const rb = ctx.request.body
  let keysList = Object.keys(rb);
  if (keysList && keysList.length > 0) {
    keysList.forEach(item => {
      DATA[item] = rb[item]
    })
  }
  ctx.response.body = 'set config success'
})




module.exports = router
