console.log("URAAAAA")

import fetch from "node-fetch";


// const pricParm = process.argv.slice(2)
let str1 = 'iterations'
// let str1 = 'durations'
let vus = 1
let number = 5

// console.log(pricParm)
// console.log(pricParm[0])

if ( str1 == 'durations' ){
    number = `'${number}s'`
}


let content = `

export const options = {
    vus: ${vus},
    ${str1}: ${number},
  };`

console.log(content)




// if ( pricParm[1] != undefined ){
//     envKey = pricParm[1].split('=')[1]
// }

// let cycleKeys = cycleKey.split(",")
// let text = ""
// for (let i in cycleKeys){
//     text = text + `${cycleKeys[i]}\n`
// }

// console.log("=================")
// console.log("====         ====")
// console.log("=               =")
// console.log("=               =")
// console.log(" ")
// console.log(`${text}`)
// console.log(`${envKey}`)
// console.log("=               =")
// console.log("=               =")
// console.log("====         ====")
// console.log("=================")

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
