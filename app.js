const express = require('express')
const request = require('request')
var app = express()

app.use("/static", express.static(__dirname + "/static"))
app.set('view engine', 'ejs')
const PORT = process.env.PORT || 3000;


  
app.get('/', (req, res) => {
   // res.render('index')
        var districtData = ""
    request('https://api.covid19india.org/state_district_wise.json',(err,res,body)=>{
        districtData = JSON.parse(body)
    
    })

    request('https://api.covid19india.org/data.json', function (error, response, body) {
        var stateData = JSON.parse(body)
        var global = stateData.statewise[0]
        var statedata = stateData.statewise
        res.render('index',{data:{global:global,state:statedata,district:districtData}})
    });
})

app.get('/policy',(req,res)=>{
    res.render('policy')
})

app.get('/questions',(req,res)=>{
    res.render('questions')
})

app.all('*', function(req, res) {
    res.redirect('/');
  });

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`))
