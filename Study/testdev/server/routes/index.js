const express = require('express')
const os = require('os')
const  router = express.Router()

router.get('/api/getUsername', function(req,res,next) {
  res.send({username: os.userInfo().username});
});

module.exports = router;