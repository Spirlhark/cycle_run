import fetch from "node-fetch";


const pricParm = process.argv.slice(2)
let cycleKey = "SSS-1111,SSS-2222"

if ( pricParm[0] != undefined ){
    // console.log(pricParm[0])
    cycleKey = pricParm[0].split('=')[1]
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
