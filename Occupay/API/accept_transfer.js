///account/transfer

var core = require("../core")

// const customerList = sample.makeRequest('GET','/customers?limit=10&')
// console.log(customerList)

function acceptPayment(transactionId){
    const body = {
        id: transactionId,
        status: 'accept'
      };
    core.makeRequest('POST','/v1/account/transfer/response', body).then((response)=>{
        // console.log(response)
        console.log(JSON.stringify(response.body.data))
        // console.log(JSON.stringify(response.body.data.email))
    })
}
//ewallet_c7d65b0307b8c46192c9b769a94e3cc2
acceptPayment('7628e21b-de90-11eb-b38b-02240218ee6d')
