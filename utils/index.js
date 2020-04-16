const moment = require('moment')

// 随机值
const random = function(baseNum, randomRnageMin,randomRnageMax) {
    let base = baseNum || 0
    let min = randomRnageMin || 1 // 默认1-5随机
    let max = randomRnageMax || 5
    return Math.floor(Math.random()*baseNum+1)
}

// 获取当前天 前某天、后某一天
const getCurrentDayNum = function(numDay, pattern) {
    let num = numDay || 0
    pattern = pattern || 'YYYY-MM-DD HH:mm:ss'
    return moment().locale('zh-cn').day(num).format(pattern);
}

module.exports = {
  random,
  getCurrentDayNum
}