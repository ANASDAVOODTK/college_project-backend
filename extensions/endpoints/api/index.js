const axios = require('axios');
var request = require('request');


module.exports = function text(router) {
	router.get('/', (req, res) => res.send('Hello, World!'));
	router.get("/postDat",(req, res )=> createStudent())
  router.get("/postwaste",(req, res) => sendwastedata());
};


const sendwastedata = async (req, res) =>
{
  var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://spector.padippist.tech/items/wastebin',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "house_name": res.body.house_name,
    "house_owner": res.body.house_owner,
    "wastbin_status":  res.body.wastbin_status,
    "wastbin_persentage": res.body.wastbin_persentage,
    "phone": res.body.phone,
    "address":res.body.address
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

}


const createStudent = async (req, res,) => {
    
var options = {
  'method': 'POST',
  'url': 'https://onesignal.com/api/v1/notifications',
  'headers': {
    'Authorization': 'Basic ZmNkYTYxZTAtNTg4OC00NGEyLWJmZDYtY2IxYTc1ZGIxYmI4',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "app_id": "334257a3-cea1-483e-94b9-038c0c218aa1",
    "included_segments": [
      "Subscribed Users"
    ],
    "contents": {
      "en": "Done"
    }
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(error);
});
};
