const express = require('express')
const axios = require('axios')
const app = express()

app.listen('3000')

app.route('/').get((req, res) => {
    axios.get('https://api.github.com/users/raphaph')
      .then(response => res.send(`<img src="${response.data.avatar_url}"/>`)) // se der tudo certo, executa then
      .catch(error => console.log(error)) // se algo der errado, executa catch
})

console.log('Ok..running')
