const mysql = require("mysql2");

const connection = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: '0241',
      database: 'roster_db'
    }
);

connection.connect(function (err){
    if(err) throw error;
})

module.exports = connection;