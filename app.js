var express = require('express')
var bodyParser = require('body-parser')
const router = require('./router')

const app = express()

app.engine('html', require('express-art-template'))
    // 配置 body-parser
    // 只要加入这个配置，则在 req 请求对象上会多出来一个属性：body
    // 也就是说你就可以直接通过 req.body 来获取表单 POST 请求体数据了
    // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())
app.use(router)
app.use(function(req, res) {
    res.send("404 not found")
})

app.listen(3001, () => {
    console.log("Server started at port 3001");
})