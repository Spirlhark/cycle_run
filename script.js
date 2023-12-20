import fetch from "node-fetch";


const pricParm = process.argv.slice(2)
let cycleKey = "SCI_R4444"

if ( pricParm[0] != undefined ){
    // console.log(pricParm[0])
    cycleKey = pricParm[0].split('=')[1]
}


console.log("=================")
console.log("====         ====")
console.log("=               =")
console.log("=               =")
console.log(`~~~ ${cycleKey} ~~~`)
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
