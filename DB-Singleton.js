// mariadbSingleton.js

const mariadb = require('mariadb');

class MariaDBSingleton {
  constructor() {
    this.pool = mariadb.createPool({
      host: 'localhost',
      user: 'username',
      password: 'password',
      database: 'myDatabase',
      connectionLimit: 10
    });
  }

  async getConnection() {
    try {
      const connection = await this.pool.getConnection();
      return connection;
    } catch (err) {
      console.error('Failed to get database connection:', err);
      throw err;
    }
  }
}

// Create and export a single instance of the MariaDBSingleton class
module.exports = new MariaDBSingleton();
