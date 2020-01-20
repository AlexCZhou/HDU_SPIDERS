var mysql = require("mysql");
var http = require("http");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: 'SPIDERS'
});

let sql = "select * from hdu;";
var jsonResult;
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result) {
        if (err) throw err;
        jsonResult = JSON.stringify(result);//把results对象转为字符串，去掉RowDataPacket
        //console.log(jsonResult);
        //jsonResult = JSON.parse(jsonResult);//把results字符串转为json对象
    });
});
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-origin': 'http://127.0.0.1:5500'
    });
    res.write(jsonResult);
    res.end();
}).listen(8080);