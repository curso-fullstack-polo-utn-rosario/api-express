const mysql  = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'curso'
});
const nombreLibro = 'Sobre Heroes y Tumbas';
const autor = 'Ernesto Sabato';
const cantidad = 100;
 // ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
 /* connection.query(`insert into libros (titulo,autor,editorial,precio,cantidad)
  values ('${nombreLibro}','${autor}','Planeta',350.50,${cantidad});`, function (error, results, fields) {
    if (error) throw error;
    console.table(results);
    console.log(results)
  }); */
connection.query('SELECT codigo, titulo from libros', function (error, results, fields) {
  if (error) throw error;
  console.table(results);
  console.log(fields);
}); 
 
connection.end();