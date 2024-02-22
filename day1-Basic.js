// AJAX =====> Asynchronous javascript

// synchronous js
// execute line by line

// program 1
function add1(){
    console.log("function one")
}
function add2(){
    console.log("function two")
}
add2()
add1()
// function two
// function one

//=======> It will execute as per call====> means how we are calling the function

// we use to convert  synch =====> async

// Program 2
//set Timeout

// function add3(){
//     setTimeout(function(){
//         console.log("I set with timer")
//     },3000)
// }
// function add4(){
//     console.log("Without Timer")
// }
// add3()
// add4()
//without Timer
//3 sec
//I set timer
//=====> Here we set the timer, also we called timer function first but bcoz of setTime it execute after the normal function

console.log("-----------")

//=====================================================
//api ===> multiple user info =====> single user =====> show info =====> dependent

// synch ======> asynch ======> synch
// for multiple user

function User(){
    setTimeout(function(){
        console.log("Timer 4 sec")
    },4000)
    setTimeout(function(){
        console.log("Timer 3 sec")
    },3000)
    setTimeout(function(){
        console.log("Timer 1 sec")
    },1000)
}
User()
//1 sec
//Timer 1 sec
//3 sec
//Timer 3 sec
//4 sec
//Timer 4 sec
//=========> Here function is executing according to timer

// synch =====> asynch =====> synch
// call back hell
// promises
// ES6 ===> 2015
