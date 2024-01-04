console.log("URAAAAA")

import fetch from "node-fetch";


const pricParm = process.argv.slice(2)
let cycleKey = "SSS-1111,SSS-2222"
let envKey = "Test_Env"

// console.log(pricParm)
// console.log(pricParm[0])


if ( pricParm[0] != undefined ){
    cycleKey = pricParm[0].split('=')[1]
}

if ( pricParm[1] != undefined ){
    envKey = pricParm[1].split('=')[1]
}

let cycleKeys = cycleKey.split(",")
let text = ""
for (let i in cycleKeys){
    text = text + `${cycleKeys[i]}\n`
}

console.log("=================")
console.log("====         ====")
console.log("=               =")
console.log("=               =")
console.log(" ")
console.log(`${text}`)
console.log(`${envKey}`)
console.log("=               =")
console.log("=               =")
console.log("====         ====")
console.log("=================")

async function executionData() {
    const response = await fetch(`https://restful-booker.herokuapp.com/ping`, {
        method: "GET",
        headers: {},
        });
        
    console.log("++++++++")
    console.log(response.status);
    console.log("++++++++")

}

executionData()
