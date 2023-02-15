const express = require('express')
const cors = require('cors')

const app = express()

app.listen(5500, () => console.log('Running on port 5500'))

app.use(cors())

app.use(express.json())

let users = [{
  id: 1,
  name: "Raphael Barros",
  avatar: "https://picsum.photos/200/300",
  city: "Mandaguari"
}]

// ROUTE
app.route('/api').get((req, res) => res.json({
  users
}))

//ROUTE USER ID
app.route('/api/:id').get((req, res) => {
  const userId = req.params.id

  const user = users.find(user => Number(user.id) === Number(userId))

  if (!user) {
    return res.json('User nor found!')
  }

  res.json(user)
})

// POST
app.route('/api').post((req, res) => {
  const lastId = users[users.length - 1].id
  users.push({
    id: lastId + 1,
    name: req.body.name,
    avatar: req.body.avatar,
    city: req.body.city
  })
  res.json('Saved user')
})

// FIND USER ID
app.route('/api/:id').put((req, res) => {
  const userId = req.params.id

  const user = users.find(user => Number(user.id) === Number(userId))

  if (!user) {
    return res.json('User nor found!')
  }

  const updatedUser = {
    ...user,
    name: req.body.name,
    avatar: req.body.avatar,
    city: req.body.city
  }

  users = users.map(user => {
    if (Number(user.id) === Number(userId)) {
      user = updatedUser
    }
    return user
  })

  res.json("Updated user")
})

// DELETE
app.route('/api/:id').delete((req, res) => {
  const userId = req.params.id

  users = users.filter(user => Number(user.id) !== Number(userId))

  res.json('Deleted User')
})