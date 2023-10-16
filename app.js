var express = require('express');
var app = express();

app.get('/', function(req,res){
    var sql = require("mssql");

    var config = {
        user: "sa",
        password: "Kratos23&",
        server: "LAPTOP-SD0K1OUI",
        database: "Node",
        synchronize: true,
        trustServerCertificate: true,
        port: 1433,
        dialectOptions:{
            instanceName: "SQLEXPRESS2019"
        }
    };

    sql.connect(config, function(err){
        if (err) console.log(err);

        var request = new sql.Request();

        request.query('select * from Studentinfo', function(err, recordset){
            if (err) console.log(err)

            res.send(recordset);
        });
    });
});

var server = app.listen(5000, function() {
    console.log('Server is running..');
});