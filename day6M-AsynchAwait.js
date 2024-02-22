// // Asynch ====> synch

// // Call Back hell

// //Execute 1st ======> Execute 2nd ======> Execute 3rd

// function Execute(){
//     setTimeout(function(){
//         console.log("Execute 1st")
//         setTimeout(function(){
//             console.log("Execute 2nd")
//             setTimeout(function(){
//                 console.log("Execute 3rd")
//             },2000)
//         },4000)
//     },6000)
// }
// Execute()
// //     Hold 6 sec
// // Execute 1st
// //     Hold 4 sec
// // Execute 2nd
// //     Hold 2 sec
// // Execute 3rd

//With the use of Promise

function FirstExecute() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Execute First")
        }, 6000)
    })
}
function SecExecute() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Execute Second")
        }, 4000)
    })
}
function ThirdExecute() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Execute Third")
        }, 2000)
    })
}
// FirstExecute()
// .then(function(str){
//     console.log(str)
//     return SecExecute()
// })
// .then(function(str){
//     console.log(str)
//     return ThirdExecute()
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(){
//     console.log("Not Executed")
// })
// .finally(function(){
//     console.log("I will always execute")
// })

// 6 sec
// Execute First
// 4 sec
// Execute Second
// 2 sec
// Execute Third
// I will always execute

//------------------------------------------------------------

// result by asynch await way ---------

async function executionResult() {
    let a1 = await FirstExecute()
    console.log(a1)
    let a2 = await SecExecute()
    console.log(a2)
    let a3 = await ThirdExecute()
    console.log(a3)
}
executionResult()

// 6 sec
// Execute First
// 4 sec
// Execute Second
// 2 sec
// Execute Third

////===========================================================

let users = { 
    "page": 1, 
    "per_page": 6, 
    "total": 12, 
    "total_pages": 2, 
    "data": [
        { 
            "id": 1, 
            "email": "george.bluth@reqres.in", 
            "first_name": "George", 
            "last_name": "Bluth", 
            "avatar": "https://reqres.in/img/faces/1-image.jpg" 
        }, 
        { 
            "id": 2, 
            "email": "janet.weaver@reqres.in", 
            "first_name": "Janet", 
            "last_name": "Weaver", 
            "avatar": "https://reqres.in/img/faces/2-image.jpg" 
        }, 
        { 
            "id": 3, 
            "email": "emma.wong@reqres.in", 
            "first_name": "Emma", 
            "last_name": "Wong", 
            "avatar": "https://reqres.in/img/faces/3-image.jpg" 
        }, 
        { 
            "id": 4, 
            "email": "eve.holt@reqres.in", 
            "first_name": "Eve", 
            "last_name": "Holt", 
            "avatar": "https://reqres.in/img/faces/4-image.jpg" 
        }, 
        { 
            "id": 5, 
            "email": "charles.morris@reqres.in", 
            "first_name": "Charles", 
            "last_name": "Morris", 
            "avatar": "https://reqres.in/img/faces/5-image.jpg" 
        }, 
        { 
            "id": 6, 
            "email": "tracey.ramos@reqres.in", 
            "first_name": "Tracey", 
            "last_name": "Ramos", 
            "avatar": "https://reqres.in/img/faces/6-image.jpg" 
        }
    ], 
    "support": { 
        "url": "https://reqres.in/#support-heading", 
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!" 
    } 
}

//users.data.forEach(function(el){
    // //console.log(el)

    // document.write(`<h1>${el.first_name}</h1>`)
    // document.write(`<h1>${el.last_name}</h1>`)
    // document.write(`<h1>${el.id}</h1>`)
    // document.write(`<h1>${el.email}</h1>`)
    // document.write(`<img src=${el.avatar}>`)
//})

let button = document.querySelector('button')
button.addEventListener('click',function(){
    users.data.forEach(function(el){
        console.log(el)

    document.write(`<h1>${el.first_name}</h1>`)
    document.write(`<h1>${el.last_name}</h1>`)
    document.write(`<h1>${el.id}</h1>`)
    document.write(`<h1>${el.email}</h1>`)
    document.write(`<img src=${el.avatar}>`)
    })
})





//node day6M-AsynchAwait.js