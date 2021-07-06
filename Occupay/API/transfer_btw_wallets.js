///account/transfer

var core = require("../core")

// const customerList = sample.makeRequest('GET','/customers?limit=10&')
// console.log(customerList)

function transfer(fromWalletId,toWalletId,amount,currency){
    var stringData = {
        "source_ewallet":fromWalletId,
        "amount": amount,
        "currency": currency,
        "destination_ewallet": toWalletId,
        "metadata":
           {
               "merchant_defined": true
           }
      }
    //   console.log(stringData)
    core.makeRequest('POST',`/v1/account/transfer`,stringData).then((response)=>{
        // console.log(response)
        console.log(JSON.stringify(response.body.data))
        // console.log(JSON.stringify(response.body.data.email))
    })
}
//ewallet_c7d65b0307b8c46192c9b769a94e3cc2
transfer('ewallet_c7d65b0307b8c46192c9b769a94e3cc2','ewallet_a0be39addcab6acc827fcbf6c3440b1b',1,"USD")
