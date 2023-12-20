import fetch from "node-fetch";


const pricParm = process.argv.slice(2)
let cycleKey = "SSS-1111,SSS-2222"

const token = process.env.ACCESS_TOKEN
const testVar = process.env.TEST_VAR
console.log(testVar)

if ( pricParm[0] != undefined ){
    // console.log(pricParm[0])
    cycleKey = pricParm[0].split('=')[1]
}

console.log(cycleKey)
console.log(typeof(cycleKey))

let cycleKeys = cycleKey.replace(/ /g,'')
cycleKeys = cycleKeys.split(",")
console.log(cycleKeys)

for (let i in cycleKeys){

    let data = {
        "ref":"master", 
        "inputs": 
            {
                "cycle_key": `${cycleKeys[i]}`
            }
    }
    async function executionData() {
        const response = await fetch(`https://api.github.com/repos/Spirlhark/cycle_run/actions/workflows/79980694/dispatches`, {
            method: "POST",
            headers: {
                Authorization: `token ${token}`,
                Accept: "application/vnd.github.v3+json"
            },
            body: JSON.stringify(data)
            });
            
        console.log("++++++++")
        console.log(response.status);
        console.log("++++++++")
    
    }
    
    executionData()
}
