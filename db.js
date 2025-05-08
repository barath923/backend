const sql = require('mssql');

const config = {
  user: 'sqladmin',
  password: 'pa$$w0rd',
  server: 'sql-primary-database-ramnewdb.database.windows.net',
  database: 'db',
  options: {
    encrypt: true,
    enableArithAbort: true
  }
};

async function connect() {
  try {
    await sql.connect(config);
    console.log('Connected to Azure SQL');
  } catch (err) {
    console.error('SQL connection error:', err);
  }
}

module.exports = {
  sql,
  connect
};
