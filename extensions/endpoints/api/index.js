const axios = require('axios');
var request = require('request');


module.exports = function text(router) {
	router.get('/', (req, res) => res.send('Hello, World!'));
	router.get("/postDat",(req, res )=> createStudent())
};



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
	console.log(Done);
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(error);
});
};
