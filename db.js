const sql = require('mssql');

const config = {
  user: 'your_sql_username',
  password: 'your_sql_password',
  server: 'your_sql_server.database.windows.net',
  database: 'your_database_name',
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
