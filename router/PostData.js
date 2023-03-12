const mysql = require("mysql2");

function connect(key) {
}
const PostData =  ( (req, res) => {
    try {
        console.log(req.body)
        let query = req.body.data + ";";
        console.log(query)
        let conf = {host:'localhost',user: 'root',database: req.body.dataBaseName,password: req.body.password}
        const connection =  mysql.createConnection(conf);
        console.log(connection)
        connection.query(query,
            function(err, results, fields) {

                if(err) {console.log(err.sqlMessage + " - ошибка"); res.send(err.message)};
                if(results){ console.log(results+ " - результат"); res.send(results)}// results contains rows returned by server

            }
        );
        connection.end();
    }
catch (err) {
    console.log("Ошибка")
}
})
module.exports = PostData