var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'db_ptm'
});

function executeQuery(query) {
    console.log("chamando query: " + query);
    
    return new Promise((resolve, reject) => {
        connection.query(query, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
};

module.exports = {
    executeQuery
}