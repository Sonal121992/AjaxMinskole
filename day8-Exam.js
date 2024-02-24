// Asynch ===> synch

// multipleUser ===> singleUser ====> showUser

function getMultiplerUser (pageNo){
    return fetch(`https://reqres.in/api/users?page=${pageNo}`)
    .then(function(res){
        //console.log(res)
        //console.log(res.json())
        return res.json()
    })
    .then(function(res){
        return res.data
    })
}
getMultiplerUser()

function singleUser(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        return (res.data)
    })
}
singleUser()