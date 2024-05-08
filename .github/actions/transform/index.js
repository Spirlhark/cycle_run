// const core = require("@actions/core");
import core from "@actions/core";
import fetch from "node-fetch";

async function executionData() {

  let currentDate = new Date();
  console.log("---===***===---")
  console.log(currentDate)
  console.log("---===***===---")

  const response = await fetch(`https://dimacyclebuket.s3.amazonaws.com/CycleList.json`, {
        method: "GET", // or 'PUT' or 'POST'
        headers: {},
        });
    
  const res = await response.json();
  console.log("++++++++")
  console.log(res.key);
  console.log("++++++++")

  let cycleKeys=res.key

  try {
    const cycle_key = cycleKeys.toUpperCase()
    console.log(cycle_key)
  // // `nodeversion` input defined in action metadata file with default value "10,16"
  //   const nodeVersion = core.getInput("nodeversion", { required: true });
  core.info(
      `Inputs to transform ${JSON.stringify({
          cycle_key
      })}`
    );
  // create arrays by splitting input on ','
    const cycle_keyArray = cycle_key.split(",");
    console.log("=======")
    console.log(cycle_keyArray)
    console.log("=======")
  // Reduce array to string with single quotation mark
    const cycle_keyInputStringified = cycle_keyArray.map(_cycle_key => `'${_cycle_key}'`).toString();
    core.setOutput("cycle_key", `[${cycle_keyInputStringified}]`);
    console.log("-------")
    console.log(cycle_keyInputStringified)
    console.log("-------")
  } catch (error) {
    core.setFailed(
      `Action failed to transform input with error: ${error.message}`
    );
  }

}

executionData()