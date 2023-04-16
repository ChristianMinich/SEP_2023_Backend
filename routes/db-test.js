const db = require('../DB-Singleton');

exports.test = function(req, res) {

    var mysql      = require('mysql');
    var fs         = require('fs');
    var connection = mysql.createConnection({
    host     : '127.0.0.1',
    database : 'lingenliefert',
    port     : '3306',
    user     : 'root',
    password : 'admin',
    ssl      : {
    ca : fs.readFileSync('C:/certs/myCA.pem')
    }
    });
    connection.connect();
    connection.query('SELECT * FROM city', function(err, rows, fields) {
    if (err) throw err;
    console.log(rows);
    });
     
    connection.end();

}