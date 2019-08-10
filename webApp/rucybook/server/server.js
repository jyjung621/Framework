const express = require('express');
const morgan = require('morgan');
const path = require('path');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname,'..','public/')));
app.use(morgan('combined'));

app.get('/api/getUsername', function(req,res,next) {
  console.log(`node : {os.userInfo().username}\t` + os.userInfo().username);
  res.send({ username: os.userInfo().username});
});

app.listen(PORT, () => {
  console.log(`Check out the app at http://localhost:${PORT}`);
});
