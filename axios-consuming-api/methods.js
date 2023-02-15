const url = "http://localhost:5500/api"
userid = 3

// GET USERS
function getUsers() {
    axios.get(url)
    .then(response => {
        console.log(response.data.users[1].name)
        apiResult.textContent = `Bem vindo(a), ${response.data.users[userid-1].name}` 
        // aqui poderiamos brincar com a posição com um for in / for each / while, depende
    })
    .catch(error => console.error(error))
}

getUsers();

// ADD NEW USER
function addUsers() {
    axios.post(url, {
        name: "Raphael Barros",
        avatar: "https://picsum.photos/200/300",
        city: "Mandapá",
    })
    .then(response => {
        console.log(response)
    })
}

// addUsers();


// GET com Parametros
function getUser() {
    axios.get(`${url}/${userid}` )
    .then(response => {
        data = response.data
        userId.textContent = data.id,
        userName.textContent = data.name,
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(err => console.error(err))
}

getUser()


// PUT - UPDATE USER
function updateUser() {
    axios.put(`${url}/${userid}`, //userid do usuário que será alterado
    {
        name : "Jorge Farelo",
        city : "Jandaia",
        avatar : "https://picsum.photos/200/300"

    }) 
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

// updateUser()


//DELETE - UPDATE

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

deleteUser(3)