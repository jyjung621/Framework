const express = require('express')
const os = require('os')
const  router = express.Router()


router.get('/', function(req,res,next) {
  res.send({
    user: os.userInfo().username,
    test: 'test_A'
  });
});

module.exports = router;