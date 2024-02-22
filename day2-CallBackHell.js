// // AJAX

// // synch ====> asynch

// // Program 1 ===> synch code

// function one(){//========================> function declaration
//     console.log("I am 1st function")
// }
// let two = function(){// ====================> function ecpression
//     console.log("I am 2nd function")
// }
// two()
// one()
// // I am 2nd function
// // I am 1st function

// console.log("----------")

// ///=====. We are receiving output in synchronus way

// // setTimeOut()

// //Program2 =====> asynch
// function add1(){
//     setTimeout(function(){
//         console.log("With Timer")
//     },4000)
// }
// function add2(){
//     console.log("Without Timer")
// }
// add1()
// add2()
// //Without Timer
// // hold 4 sec
// //With Timer
// //============> Even though we have written in synch way but because of timer we are getting output with hold
// // ====> without timer is executing first while with timer as per time
// //===============================================

// console.log("========")

// // program 3
// //User create=====> get ID ======> get Info

// function User(){
//     setTimeout(function(){
//         console.log("Timere 6 Sec")
//     },6000)
//     setTimeout(function(){
//         console.log("Timer 3 sec")
//     },3000)
//     setTimeout(function(){
//         console.log("Timer 1 sec")
//     },1000)
// }
// User()
// //hold 1 sec
// //Timer 1 sec
// //hold 3 sec
// //Timer 3 sec
// // hold 6 sec
// //Timere 6 Sec

// console.log("===================")

// ///===============================================================
// // synch ===> asynch ====> synch

// // Call Back hell
// //Program 4
// // asynch =====> synch

function userInfo(){
    setTimeout(function(){
        console.log("111111")
        setTimeout(function(){
            console.log("22222222")
            setTimeout(function(){
                console.log("3333333")
            },1000)
        },3000)
    },4000)
}
userInfo()
// hold 1 sec
// 111111
// hold 3 sec
// 22222222
// hold 4 sec
// 3333333



// readability issue
// tightly couple

print("---------")
///==============================================

//Call back hell =====> asynch to synch

// promise ====> resolve, reject, pending

let pro = new promise(function(resolve, reject){
    let a = 456
    let b = 123
    if(a==b){
        resolve("Both Equal")
    }else{
        reject("Unequal")
    }
})
//consuming the promise
pro.then(function(str){
    console.log(str)//====> this one is for resolve
}),(function(str){
    console.log(str)//-=====> this one is for reject
})