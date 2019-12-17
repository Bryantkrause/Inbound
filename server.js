
// use this site for example
// https://docs.microsoft.com/en-us/office/dev/add-ins/tutorials/excel-tutorial

// web reqs
// https://docs.microsoft.com/en-us/office/dev/add-ins/excel/custom-functions-web-reqs

const express = require('express')
const app = express()
const {join} =require('path')

app.use(express.static(join(_dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

require('./routes')(app)



app.listen(3000)