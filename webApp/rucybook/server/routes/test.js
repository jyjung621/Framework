const express = require('express')
const os = require('os')
const router = express.Router()


router.get('/', function(req,res,next) {
  console.log('[DEBUG] /api => os.userInfo : ',os.userInfo());
  res.send({
    username: os.userInfo().username,
    test: 'test_A'
  });
});

module.exports = router;