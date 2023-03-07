const db = require('./cseidc')
const mongoose = require('mongoose')

const addUser = (userName, email, number, designation, place) => {

  return db.Users.find().then((result) => {
    // console.log(userName, email, number, designation, place)

    if (result) {
      let newUser = new db.Users({
        userName,
        email,
        number,
        designation,
        place,

      })
      newUser.save()
      return {
        status: true,
        message: 'register success',
        statusCode: 200
      }
    } else {
      return {
        status: true,
        message: 'register success',
        statusCode: 200
      }
    }

  })
}

const getUser = () => {
  return db.Users.find().then((result) => {
   // console.log(result)
    let data=result

    if (result) {
      return {
        status: true,
        message: ('successfully fetch users'),
        statusCode: 200,
        data,
      
      }

    }
    else {
      return {
        status: false,
        message: ('Operation Denied'),
        statusCode: 404
      }
    }
  })

}

module.exports = {
  addUser,
  getUser
}