var core = require("../core")

// const customerList = sample.makeRequest('GET','/customers?limit=10&')
// console.log(customerList)

function getWalletDetails(walletId){
    core.makeRequest('GET',`/v1/user/${walletId}`).then((response)=>{
        // console.log(JSON.stringify(response.body.data))
        console.log(JSON.stringify(response.body.data))
    })
}
//ewallet_c7d65b0307b8c46192c9b769a94e3cc2
getWalletDetails('ewallet_c7d65b0307b8c46192c9b769a94e3cc2')
