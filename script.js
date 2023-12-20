import fetch from "node-fetch";


const pricParm = process.argv.slice(2)
let cycleKey = "SSS-1111,SSS-2222"

if ( pricParm[0] != undefined ){
    // console.log(pricParm[0])
    cycleKey = pricParm[0].split('=')[1]
}

let cycleKeys = cycleKey.split(",")
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
                Authorization: "token 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",
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
