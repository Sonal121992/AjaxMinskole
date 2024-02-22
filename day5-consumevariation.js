// //Program 1

// let a = new Promise(function(resolve, reject){
//     let firstName = "Sonal"
//     if(firstName.startsWith("s")){
//         resolve("True")
//     }else{
//         reject("False")
//     }
// })

///consume ======> way 1

// a.then(function(result){
//     console.log(result)
// },function(result){
//     console.log(result)
// })
////False

// // consume ======> way 2

// a.then(function(result){
//     console.log(result)
// })
// .catch(function(result){
//     console.log(result)
// })
// // False

// // consume =======> way 3

// a.then(function(result){
//     console.log(result)
// })
// .catch(function(result){
//     console.log(result)
// })
// .finally(function(){
//     console.log("I will always execute")
// })
// //False
// //I will always execute

// // Program 2

// let b = new Promise(function(resolve, reject){
//     let x = 10
//     let y = 10
//     if(x == y){
//         resolve("equal")
//     }else{
//         reject("Not equal")
//     }
// })
// b.then(function(str){
//     console.log(str)
//     return "x & y is " + str
// })
// .then(function(str){
//     console.log(str)
//     return "x is " + str + " y"
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// // Agar return nai likhnate to first me ans aayega lekin baad wale  2 undefined aayega
// // worng raha to unequal aayega
// // agar return likha to first ka ans 2nd me aayega and 2nd ka ans 3rd me aayega

// // CallBack Hell

// // 1st to execute ===> 2nd to execute ===> 3rd to execute

// function execute(){
//     setTimeout(function(){
//         console.log("1st to execute")
//         setTimeout(function(){
//             console.log("2nd to execute")
//             setTimeout(function(){
//                 console.log("3rd to execute")
//             },1000)
//         },3000)
//     },6000)
// }
// execute()
// //   hold 6 sec
// // 1st to execute
// //   hold 3 sec
// // 2nd to execute
// //   hold 1 sec
// // 3rd to execute

//=======================================================

function FirstExecute(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("Execute 1st")
        },6000)
    })
}
function SecExecute(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("Execute 2nd")
        },4000)
    })
}
function ThirExecute(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("Execute Third")
        },2000)
    })
}
FirstExecute()
.then(function(result){
    console.log(result)
    return SecExecute()
})
.then(function(result){
    console.log(result)
    return ThirExecute()
})
.then(function(result){
    console.log(result)
})
.catch(function(){
    console.log("No execution")
})
.finally(function(){
    console.log("I will always execute")
})
//   hold 6 sec
// Execute 1st
//   hold 4 sec
// Execute 2nd
//   hold 2 sec
// Execute Third
// I will always execute


// node day5-consumevariation.js