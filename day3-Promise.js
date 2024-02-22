// // program 1

// function a(){
//     console.log("Hello")
// }
// function b(){
//     console.log("Bye")
// }
// b() 
// a()
// //Bye
// //Hello
// // It is working as we are calling
// console.log("=========")

// //program 2
// // with setTimeout
// function c(){
//     setTimeout(function(){
//         console.log("With Timer")
//     },3000)
// }
// function d(){
//     console.log("Without Timer")
// }
// c()
// d()
// console.log("--------")
// //WIthout Timer
// // 3sec hold
// //With Timer
// // Here even though we have called with timer first, but it will take 3 sec to execute
// // Meanwhile other don't have timer to hold execution
// // therefore 2nd one will execute first 


// // Timer 6 sec=====> Timer 3 sec=====> Timer 1 sec
// // with setTimeout ======> synch to asynch
// function Timer(){
//     setTimeout(function(){
//         console.log("Timer 6 sec")
//     },6000)
//     setTimeout(function(){
//         console.log("Timer 3 sec")
//     },3000)
//     setTimeout(function(){
//         console.log("Timer 1 sec")
//     },1000)
// }
// Timer()
// // 1 sec
// //Timer 1 sec
// // 3 sec
// //Timer 3 sec
// // 6 sec
// //Timer 6 sec

// //Here the execution is asynch way
// //Executing while holding time

// // Call back hell ======> asynch to synch

// function callBack(){
//     setTimeout(function(){
//         console.log("Timer 6 sec")
//         setTimeout(function(){
//             console.log("Timer 3 sec")
//             setTimeout(function(){
//                 console.log("Timer 1 sec")
//             },1000)
//         },3000)
//     },6000)
// }
// callBack()
// //6sec Hold
// // Timer 6 sec
// //3sec Hold
// // Timer 3 sec
// //1sec Hold
// // Timer 1 sec

// // Here we have timer then also it is executing one after as per the program call, with this they are even holding time
// // Drwaback ===> readability issue and tightly couples

// // promises

// // Hamesha new Promise lena and usse varaible me store karna
// // promise ka 1st character hamesha caps rahega
// let pro = new Promise(function(resolve, reject){ //======> we can pass any parameter a, b etc /// By default 1st para ==> resolve and 2nd para ===> reject
//     let a = 452
//     let b = 263
//     if(a == b){
//         console.log("Both are equal")
//     }else{
//         console.log("Unequal")
//     }
// })
// pro.then(function(result){ //====> here also we can pass any para as the place of result
//     console.log(result) ////======> This 1st is for resolve always
// }),(function(result){
//     console.log(result) ////======> This 2nd is for reject always
// })
// // Unequal

// // promise ko hamesha consume karate hai call nai karate

// // promise as a array
// let a = new Promise(function(x, y){
//     let array1 = 100
//     let arary2 = 200
//     if(array1 == arary2){
//         x([11,22,33])
//     }else{
//         y([-11,-22,-33,-44])
//     }
// })
// a.then(function(result){
//     console.log(result[2])
// },function(result){
//     console.log(result[2])
// })
// //-33 since the aaray 1 is not equal to array 2

// // Promise with .then and .catch consume
// let b = new Promise(function(p, q){
//     let arr1 = 100
//     let arr2 = 150
//     if(arr1 == arr2){
//         p("Hello")
//     }else{
//         q("Bye")
//     }
// })
// b.then(function(result){ //===> It is for resolve
//     console.log(result)
// })
// .catch(function(result){//=====> It is for reject
//     console.log(result)
// })
// // Bye

// // promise with, the, .then catch and .finally
let c = new Promise(function(a, b){
    let num1 = 100
    let num2 = 100
    if(num1 == num2){
        a("num is equal")
    }else{
        b("num is unequal")
    }
})
c.then(function(ans){ //====> for resolve
    console.log(ans)
})
.catch(function(ans){ // =====> for reject
    console.log(ans)
})
.finally(function(){//=====> always execute
    console.log("I will always execute")
})