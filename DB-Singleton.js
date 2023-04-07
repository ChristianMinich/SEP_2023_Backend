// mariadbSingleton.js

const mariadb = require('mariadb');

class MariaDBSingleton {
  constructor() {
    this.pool = mariadb.createPool({
      host: '127.0.0.1',
      user: 'root',
      password: 'admin',
      database: 'server',
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
