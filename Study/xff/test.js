var http = require('http');
var requestIp = require('request-ip');
 
http.createServer(function(req,res){ 
    //const ip = req.headers['x-forwarded-for'] ||  req.connection.remoteAddress
    console.log('\nIP : ' + requestIp.getClientIp(req))
    console.log('remoteAddress : ' + req.connection.remoteAddress)
    console.log('XFF : ' + req.headers['x-forwarded-for'])
    // console.log('protocol : ' + req.)
    // console.log(req.connection)
    // console.log(req.headers)
    
res.end('test');
}).listen(3000,function(){
console.log('server');
});