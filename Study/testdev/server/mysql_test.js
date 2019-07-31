var mysql = require('mysql')
var conn = mysql.createConnection({
  host : '127.0.0.1',
  user : 'rucy',
  password : 'rucy',
  database : 'RUCY'
})

conn.connect()

conn.query('SELECT 1+1 AS solution', function (err, res, fields) {
  if(err) throw err
  console.log('The solution is : ', res[0].solution)
})

conn.end()