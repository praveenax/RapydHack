var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://sandboxapi.rapyd.net/v1/data/countries',
  headers: { 
    'Content-Type': 'application/json', 
    'access_key': 'CB763071E2DFA7432B3C', 
    'salt': '9b7983b56e5cbe13a8d646d0', 
    'timestamp': '1625514691', 
    'signature': 'YTNmYWY5YTcwZmM2NmMwMTQxODRhMjZlMTdhYzUyNGM0YWViYjAwMzA5NjlhOGE2N2EzZWUxMTdiNjk0NmY2Mg=='
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
    console.log('error')
//   console.log(error);
});
