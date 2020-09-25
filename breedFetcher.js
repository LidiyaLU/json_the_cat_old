const request = require('request');
const arg = process.argv;
let link = 'https://api.thecatapi.com/v1/breeds/search?q=' + arg[2];


request(link, (error, responce, body) => {
  
  const data = JSON.parse(body);
  console.log(data[0].description);
  
});