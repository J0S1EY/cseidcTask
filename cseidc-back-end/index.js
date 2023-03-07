const express = require('express')
const cors = require('cors')
const { request, response } = require('express');
const dataService = require('./dataService')


const cseidc = express()
cseidc.use(express.json())


cseidc.listen(3000, () => {
    console.log('cseidc server running port 3000')

})

cseidc.use(cors({ origin: 'http://localhost:4200' }))

// Add user
cseidc.post('/addUser', (request, response) => {
    //console.log(request.body.userName, request.body.email,
        //request.body.number, request.body.designation, request.body.place)

    dataService.addUser(request.body.userName, request.body.email,
        request.body.number, request.body.designation, request.body.place).then((result) => {
            response.status(result.statusCode).json(result)
        })
})

cseidc.get('/getUser',(request,response)=>{
    dataService.getUser().then((result)=>{
        response.status(result.statusCode).json(result)
    })

})


