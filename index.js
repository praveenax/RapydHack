const express = require('express')
const fs = require('fs')
var core = require('./Occupay/core')
// var core = require("../core")
const app = express()
// const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.sendFile('./public/index.html')
})

app.get('/video', function(req, res) {
    //from the videoId - path -> AWS S3
    //PROBLEM WITH REMOTE HOSTING

    //for the videoId -> get the path from database
    //path

    // const path = './sample/sample.mp4'
    // const path = './sample/react.mp4'
    const path = './sample/plating.mp4'
    // const path = "https://kotk-app.s3.ap-south-1.amazonaws.com/sample.mp4"
    const stat = fs.statSync(path)
    const fileSize = stat.size
    const range = req.headers.range
    if (range) {
      const parts = range.replace(/bytes=/, "").split("-")
      const start = parseInt(parts[0], 10)
      const end = parts[1] 
        ? parseInt(parts[1], 10)
        : fileSize-1
      const chunksize = (end-start)+1
      const file = fs.createReadStream(path, {start, end})
      const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4',
      }
      res.writeHead(206, head);
      file.pipe(res);
    } else {
      const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
      }
      res.writeHead(200, head)
      fs.createReadStream(path).pipe(res)
    }
  });

//getWalletData

app.get('/getWalletDetails', (req, res) => {
 
  //will get walletId
  var wallet_id = req.query.u;

// const customerList = sample.makeRequest('GET','/customers?limit=10&')
// console.log(customerList)

function getWalletDetails(walletId){
  return new Promise((resolve,reject)=>{
    core.makeRequest('GET',`/v1/user/${walletId}`).then((response)=>{
      // console.log(JSON.stringify(response.body.data))
      // console.log(JSON.stringify(response.body.data))
      resolve(response.body)
  })
  })
   
}
//ewallet_c7d65b0307b8c46192c9b769a94e3cc2
// getWalletDetails('ewallet_a0be39addcab6acc827fcbf6c3440b1b').then((data)=>{
  getWalletDetails(wallet_id).then((data)=>{
  console.log(data)
  res.send(data)
})

 
})

// app.get('/acceptMoney', (req, res) => {
//   function acceptPayment(transactionId){
//     return new Promise((resolve,reject)=>{
//     const body = {
//         id: transactionId,
//         status: 'accept'
//       };
//     core.makeRequest('POST','/v1/account/transfer/response', body).then((response)=>{
//         // console.log(response)
//         console.log(JSON.stringify(response.body.data))
//         // console.log(JSON.stringify(response.body.data.email))
//         resolve(response.body)
//     })
//   })
// }
// //ewallet_c7d65b0307b8c46192c9b769a94e3cc2
// acceptPayment('1ed284d3-df1d-11eb-b38b-02240218ee6d').then((data)=>{
//   res.send(data)
// })
// });


app.get('/transferMoney', (req, res) => {
  var amount = req.query.amount;
  //will get walletId

// const customerList = sample.makeRequest('GET','/customers?limit=10&')
// console.log(customerList)
function acceptPayment(transactionId){
  return new Promise((resolve,reject)=>{
  const body = {
      id: transactionId,
      status: 'accept'
    };
  core.makeRequest('POST','/v1/account/transfer/response', body).then((response)=>{
      // console.log(response)
      console.log(JSON.stringify(response.body.data))
      // console.log(JSON.stringify(response.body.data.email))
      resolve(response.body)
  })
})
}

function transfer(fromWalletId,toWalletId,amount,currency){
  return new Promise((resolve,reject)=>{
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
      resolve(response.body)
  })
})
}
//ewallet_c7d65b0307b8c46192c9b769a94e3cc2
//ewallet_a0be39addcab6acc827fcbf6c3440b1b
transfer('ewallet_c7d65b0307b8c46192c9b769a94e3cc2','ewallet_a0be39addcab6acc827fcbf6c3440b1b',amount,"USD").then((data)=>{
  // res.send(data)
  acceptPayment(data.data.id).then((data2)=>{
    res.send(data2)
  })
})

 
})

// app.get('*', function(req, res){
//   // res.sendFile('./public/index.html')
//   res.status(301).redirect('')
// });

//getTranfer from one to another


// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on localhost:' + PORT));


//4dcdfb54-df1a-11eb-b38b-02240218ee6d