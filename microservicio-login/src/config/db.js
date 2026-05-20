const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'rootpassword',
  database: 'hospital' 
});

connection.connect((err) => {
  if (err) console.error('Error MySQL:', err);
  else console.log('Conectado a MySQL (Monolito) ');
});
module.exports = connection;