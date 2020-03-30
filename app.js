const express = require('express')
const request = require('request')
var app = express()

app.use("/static", express.static(__dirname + "/static"))
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
   // res.render('index')
    request('https://api.covid19india.org/data.json', function (error, response, body) {
        var stateData = JSON.parse(body)
        var global = stateData.statewise[0]
        var statedata = stateData.statewise
        res.render('index',{data:{global:global,state:statedata}})
    });
})

app.listen(process.env.PORT || 3000, console.log("Listening on 3000"))