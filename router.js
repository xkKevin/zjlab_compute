const express = require('express')
var request = require('request')

const router = express.Router()

router.get('/', function(req, res) {
    res.render('index.html')
})

router.get('/CommunityDetect', function(req, res) {
    //res.send(JSON.stringify(req.body))
    // request 默认是 get 请求
    request('http://127.0.0.1:3000/communityDetect', function(error, response, body) {
        //console.log('error:', error); // Print the error if one occurred
        //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //console.log('body:', body); // Print the HTML for the Google homepage.
        res.send(body)
    })
})

router.get('/PageRank', function(req, res) {
    //res.send(JSON.stringify(req.body))
    request('http://127.0.0.1:3000/pageRank', function(error, response, body) {
        //console.log('error:', error); // Print the error if one occurred
        //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //console.log('body:', body); // Print the HTML for the Google homepage.
        res.send(body)
    })
})

router.post('/ShortestPath', function(req, res) {
    //res.send(JSON.stringify(req.body))
    console.log(JSON.stringify(req.body))
    console.log(req.body, req.body.source, req.body.target)
    var url = 'http://127.0.0.1:3000/shortestPath'
    request.post({
            url: url,
            form: {
                start: req.body.source,
                end: req.body.target
            }
        }, function(error, response, body) {
            res.send(body)
        })
        /*
    request({
        //url: 'http://127.0.0.1:3000/shortestPath',
        method: "POST",
        json: true,
        body: {
            start: 2,
            end: 5
        }
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send("200: " + body)
        }
        res.send(body)
    })
    */
})

router.post('/test', function(req, res) {
    //res.send(JSON.stringify(req.body))
    console.log("test", req.body);
    var start = parseFloat(req.body.start)
    var end = parseFloat(req.body.end)
    res.send((start + end).toString())
})

module.exports = router