console.log("URAAAAA")

// import fetch from "node-fetch";

const res = [
    {
        id: 'a'
    }, 
    {
        id: 'b'
    },
    {
        id: 'c'
    }, 
    {
        id:'d'
    }]
// console.log(abc)

let cycle_key = ''
for ( let i=0; res.length > i; i++ ){
    console.log(res[i].id)
    if ( i < res.length-1){
        cycle_key = cycle_key + res[i].id+','
    }else{
        cycle_key = cycle_key + res[i].id
    }
}
console.log(cycle_key)

// const pricParm = process.argv.slice(2)
// let cycleKey = "SSS-1111,SSS-2222"
// let envKey = "Test_Env"

// // console.log(pricParm)
// // console.log(pricParm[0])
// let envKey2 = process.env.ENV_KEY
// let znacH = process.env.ZNACH
// let vus = process.env.VUS
// let dur = process.env.DURATION
// let iter = process.env.ITERATIONS

// // console.log("----------")
// // console.log(envKey2)
// // console.log(typeof(envKey2))
// // console.log("----------")
// // console.log(znacH)
// // console.log(typeof(znacH))
// console.log("----------")
// console.log("VUS: " + vus)
// console.log("Duration: " + dur)
// console.log("iterations: " + iter)
// console.log("----------")

// if ( pricParm[0] != undefined ){
//     cycleKey = pricParm[0].split('=')[1]
// }

// if ( pricParm[1] != undefined ){
//     envKey = pricParm[1].split('=')[1]
// }

// let cycleKeys = cycleKey.split(",")
// let text = ""
// for (let i in cycleKeys){
//     text = text + `${cycleKeys[i]}\n`
// }

console.log("=================")
console.log("====         ====")
console.log("=               =")
console.log("=               =")
console.log(" ")
// console.log(`${text}`)
// console.log(`${envKey}`)
console.log("=               =")
console.log("=               =")
console.log("====         ====")
console.log("=================")

// async function executionData() {
//     const response = await fetch(`https://restful-booker.herokuapp.com/ping`, {
//         method: "GET",
//         headers: {},
//         });
        
//     console.log("++++++++")
//     console.log(response.status);
//     console.log("++++++++")

// }

// executionData()
