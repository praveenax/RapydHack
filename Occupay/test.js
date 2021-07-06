const makeRequest = require('./sample').makeRequest;

async function main() {
  try {
    const result = await makeRequest('GET', '/v1/data/countries');

    console.log(result);
  } catch (error) {
      console.log('error')
    // console.error('Error completing request', error);
  }
}

main()