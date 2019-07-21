const request = require("superagent")

request.get("http://localhost:3000/fruits.json")
  .end(function (err, response) {
    if(err) {
      return 
    }

    console.log(response)
    console.log(response.type)
    console.log(response.body)
  })