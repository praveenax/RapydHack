var sample = require("./sample")

// const customerList = sample.makeRequest('GET','/customers?limit=10&')
// console.log(customerList)

sample.makeRequest('GET','/v1/user/ewallet_c7d65b0307b8c46192c9b769a94e3cc2').then((data)=>{
    console.log(data)
})