// myModule.js

const mariadbSingleton = require('./DB-Singleton');

async function queryDatabase() {
  const connection = await mariadbSingleton.getConnection();
  // Use the connection to execute queries
  // ...
  connection.release(); // Release the connection back to the pool
}

module.exports = { queryDatabase };
