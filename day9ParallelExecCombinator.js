// AJAX ====> synch to asynch =====> taki execution hold na kare

// To create dependency =====> asynch to synch 

// if there is no dependency =====> then it is ====> parallel execution/ combinator

//1. Promise.all()
//2. Promise.race()
//3. Promise.any()
//4. Promise.allsettle()


// 1. Promise.all() =======> shortcircuit at first reject state

async function promiseAll(){
    let a = await Promise.all([
        Promise.resolve("Hello"),
        Promise.resolve("Hello1"),
        Promise.reject("Bye1"),
        Promise.reject("Bye2"),
        Promise.resolve("Hello")
    ])
    console.log(a)
}
promiseAll()

async function promise1(){
    try{
        let b =  await Promise.all([
            Promise.resolve("Hello1"),
            Promise.resolve("Hello2"),
            Promise.reject("Bye1"),
            Promise.reject("Bye2")
        ])
        console.log(b)
    }
    catch{ //Agar hume uncaught wala error dikhana nai hai to catch use karke statement dete hai
        console.log("Something is wrong") 
    }
}
promise1()

//===================================================================

// 2. Promise Race

function one(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("Hello1")
        },2000)
    })
}
function two(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("Hello2")
        },1000)
    })
}
async function promiseRace(){
    let c = await Promise.race([
        one(),
        two()
    ])
    console.log(c)
}
promiseRace()

// =================================================================

// 3. promise.allsettle()

async function promiseAllSettled(){
    let d =  await Promise.allSettled([
        Promise.resolve("Hi1"),
        Promise.reject("Bye1"),
        Promise.resolve("Hi2")
    ])
    console.log(d)
}
promiseAllSettled() // We receive the object of whole ...all while settle

// ====================================================================

// 4. promise.Any() ===> resolve first correct shortcircuit

async function promiseAny(){
    let e = await Promise.any([
        Promise.reject("Wrong"),
        Promise.resolve("Right"),
        Promise.reject("Wrong"),
        Promise.resolve("Right1")
    ])
    console.log(e)
}
promiseAny()

