const mysql = require("mysql2");

const connection = mysql
  .createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "all_tasks0",
  })
  .promise();

module.exports = connection;
