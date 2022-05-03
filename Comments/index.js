const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'database-1.cgrwnjzfomw8.us-east-1.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'mew12345',
    database: 'my_db',
});

db.connect((err) => {
    if(err){
        console.log(err.message);
        return;
    }
    console.log("database connected");
});