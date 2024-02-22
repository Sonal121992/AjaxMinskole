// // Ajax ===> asynch

// // Program 1/////////////////////////////////////////////////////////////////////
// // synch code

// function add1(){
//     console.log("Hello")
// }
// function add2(){
//     console.log("Bye")
// }
// add2()
// add1()
// //It is working as we are calling
// console.log("=========")

// // Program 2////////////////////////////////////////////////////////////////////////
// // With setTimeOut ====> synch to asynch

// function a(){
//     setTimeout(function(){
//         console.log("I have Timer")
//     },3000)
// }
// function b(){
//     console.log("Without Timer")
// }
// a()
// b()
// // Without Timer
// // After 3 sec
// // I have Timer

// // Here even though we have called with timer first, but it will take 3 sec to execute
// // Meanwhile other don't have timer to hold execution
// // therefore 2nd one will execute first 

// // Program 3 /////////////////////////////////////////////////////////////////////////
// // I am Fist ====> I am Second ====> I am Third

// function execute(){
//     setTimeout(function(){
//         console.log("I am First")
//     },6000)
//     setTimeout(function(){
//         console.log("I am second")
//     },3000)
//     setTimeout(function(){
//         console.log("I am Third")
//     },2000)
// }
// execute()
// // After 2 sec
// // I am Third
// // After 3 sec
// // I am second
// // After 6 sec
// // I am First

// // //Here the execution is asynch way
// // //Executing while holding time

// // Call Back Hell ===> asynch to synch /=================================
// // Program 4 //////////////////////////////////////////////////

// function callBack(){
//     setTimeout(function(){
//         console.log("I am First")
//         setTimeout(function(){
//             console.log("I am second")
//             setTimeout(function(){
//                 console.log("I am third")
//             },4000)
//         },3000)
//     },6000)
// }
// callBack()
// //  hold 6 sec
// // I am First
// //  hold 3 sec
// // I am second
// //  hold 4 sec
// // I am third

// // Here we have timer then also it is executing one after as per the program call, with this they are even holding time
// // Drwaback ===> readability issue and tightly couples
// // Here program is holding time as well executing the way we have written the program....
// // It executime systematic with holding time

// //Promises / =========================================================
// // Program 5 ////////////////////////////////////////////////////////

// // resolve, reject, pending
// // // Hamesha new Promise lena and usse varaible me store karna
// // // promise ka 1st character hamesha caps rahega

// let program1 = new Promise(function(res, rej){ //======> we can pass any parameter a, b etc /// By default 1st para ==> resolve and 2nd para ===> reject
//     let a = 450
//     let b = 200
//     if(a == b){
//         res("We are equal")
//     }else{
//         rej("Not equal")
//     }
// })
// // program1.then(function(result){ //===> here also we can pass any para as the place of result
// //     console.log(result) ////======> This 1st is for resolve always
// // }, function(result){
// //     console.log(result) ////======> This 2nd is for reject always
// // })

//  // promise ko hamesha consume karate hai call nai karate

// // Below program is with .catch

// program1.then(function(result){
//     console.log(result)
// }).catch(function(result){
//     console.log(result)
// })

// // Program 6 ///////////////////////////////////////////
// // Promise with array

// let arr = new Promise(function(x, y){
//     let a = 56
//     let b = 56
//     if(a == b){
//         x([12,56,78,62])
//     }else(
//         y([-45,-53,-42,-12])
//     )
// }) 
// arr.then(function(result){ //===> It is for resolve
//     console.log(result[2])
// })
// .catch(function(result){ //=====> It is for reject
//     console.log(result[1])
// })
// //78

// let arr1 = new Promise(function(x, y){
//     let a = 56
//     let b = 68
//     if(a == b){
//         x([12,56,78,62])
//     }else(
//         y([-45,-53,-42,-12])
//     )
// }) 
// arr1.then(function(result){
//     console.log(result[2])
// })
// .catch(function(result){
//     console.log(result[1])
// })
// //-56

// // Program 7 /////////////////////////////////////////////////
// // Use of finally

// let str = new Promise(function(a, b){
//     let x = 100
//     let y = 500
//     if(x == y){
//         a("Equal Numbers")
//     }else{
//         b("Unequal")
//     }
// })
// str.then(function(str){
//     console.log(str) //====> for resolve
// })
// .catch(function(str){
//     console.log(str) // =====> for reject
// })
// .finally(function(){
//     console.log("I will always execute") //=====> always execute
// })
// //Unequal
// //I will always execute

// // Program 8/////////////////////////////////////////////////////
// // With consume we want now return with some additional text

let ret = new Promise(function(resolve,reject){
    let a = 100
    let b = 100
    if(a == b){
        console.log("Good Morning")
    }else{
        console.log("Good Night")
    }
})
ret.then(function(str){
    console.log(str)
    return str + "Sonal"
})
.then(function(str){
    console.log(str)
    return "Hello Sonal"
})
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})

// if a not equal to b then we will get =====> Good Night