// function getMultiplerUser(){
//     fetch("https://reqres.in/api/users?page=2")
//         .then(function(res){
//             //console.log(res)//output in not in readable format
//             //console.log(res.json())//json method return promise there fore return it
//             return res.json()
//         })
//         .then(function(response){
//             //console.log(response)
//             //console.log(response) //Promise { <pending> }
//             //console.log(response.data)
//             response.data.forEach(function(el){
//                 document.write(`<h1>${el.first_name}</h1>`)
//                 document.write(`<h1>${el.last_name}</h1>`)
//                 document.write(`<h1>${el.id}</h1>`)
//                 document.write(`<h1>${el.email}</h1>`)
//                 document.write(`<img src=${el.avatar}>`)
//             })
//         })
// }
// getMultiplerUser()

// let buttn = document.querySelector('button')
// buttn.addEventListener('click',function(){
//     getMultiplerUser()
// })

///-======================================================================

// asynch ====> synch ====> to create dependency

// GetUser ===> GetId ====> ShowInfo

//GetUser ===> multiple
function getMulUser(pageNumber){
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then(function(res){
            return (res.json())
        })
        .then(function(res){
            return (res.data)
        })
}
getMulUser()

// for single user

function getSingleUser(id){
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function(res){
            return(res.json())
        })
        .then(function(res){
            return (res.data)
        })
}
getSingleUser()

//ShowInfo
function ShowInfo(el){
    document.write(`<h1>${el.first_name}</h1>`)
    document.write(`<h1>${el.last_name}</h1>`)
    document.write(`<h1>${el.id}</h1>`)
    document.write(`<h1>${el.email}</h1>`)
    document.write(`<img src=${el.avatar}>`)
}

// getMulUser(2)
// .then(function(res){
//     console.log(res)
//     getId=(res[4].id)
//     return getSingleUser(getId)
// })
// .then(function(res){
//     //console.log(res)
//     ShowInfo(res)
// })

// asynch await
async function info(){
    let dataArray = await getMulUser(1)
    let idUserInfo = await getSingleUser(dataArray[4].id)
    ShowInfo(idUserInfo)
}
info()


// node day7-AsynAwaitCallBackFunction.js