const url="http://localhost:5500/api"

function getUsers() {
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(err => console.error(err))
};

// GET
function getUser() {
    fetch(`${url}/1`) // foi repassado aqui o id do usuário
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name, // dados da api enviado para tag
        userCity.textContent = data.city,
        userAvatar.src = data.avatar

    })
    .catch(err => console.error(err))
}


// POST
function addUser(newUser) {
    fetch(url, {
        method: "POST", // mudando o metodo do fetch, padrão GET
        body: JSON.stringify(newUser),
        headers: {
            "Content-type":"application/json;charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertapi.textContent = data)
    .catch(err => console.error(err))

}

// PUT
function updatedUser(updatedUser) {
    fetch(`${url}/1`, {
        method: "PUT", // mudando o metodo do fetch, padrão GET
        body: JSON.stringify(updateUser), // transforma o objeto em string mantendo estrutura
        headers: {
            "Content-type":"application/json;charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertapi.textContent = data)
    .catch(err => console.error(err))
}


//DELETE
function deleteUser() {
    fetch(`${url}/${id}`, {
        method: "DELETE", // mudando o metodo do fetch, padrão GET
        headers: {
            "Content-type":"application/json;charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertapi.textContent = data)
    .catch(err => console.error(err))
}

const updateUser = {
    name: "Josberto",
    avatar: "https://picsum.photos/200/300",
    city: "Mirasbel"
}

const newUser = {
    name: "Raphael",
    avatar: "https://picsum.photos/200/300",
    city: "Mandaguari"
}

// FUNCTIONS

// addUser(newUser)
// deleteUser()
// addUser()
// getUser()
// updatedUser()

