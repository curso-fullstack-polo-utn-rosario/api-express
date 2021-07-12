Use fullstack_bd
===================
create table usuarios (
  nombre varchar(30),
  clave varchar(10)
 );
===================
insert into usuarios (nombre, clave)
  values ('Marcelo','Boca');
 insert into usuarios (nombre, clave)
  values ('JuanPerez','Juancito');
 insert into usuarios (nombre, clave)
  values ('Susana','River');
 insert into usuarios (nombre, clave)
  values ('Luis','River');
===================
select *from usuarios;
===================
select *from usuarios
  where nombre='Susana';
===================
select *from usuarios
  where nombre='Leonardo';
===================
select *from usuarios
  where nombre in ('Susana','Luis');
===================
select *from usuarios
  where nombre in ('Susana','Luis','Leonardo');
===================
select nombre from usuarios
  where clave='River';
===================
===================
select * from libros
  where autor <> 'Borges';
===================
select * from libros
  where autor='Borges';
===================
select titulo,precio
  from libros
  where precio>20;
===================
select titulo,precio
  from libros
  where precio<20;
==================
select count(*)
  from libros;
================
EJERCICIO 1: Contar Libros con precio menor o igual a 12.5
================
select sum(cantidad)
  from libros;
================
EJERCICIO 2: Calcular la cantidad de ejemplares  con precio mayor o igual a 12.5
================
select count(*),sum(cantidad)
  from libros;
================
select count(*) cantidad_libros, sum(cantidad) cantidad_ejemplares, avg(precio) precio_promedio
  from libros;
==============
select sum(cantidad * precio)
  from libros;
==============
select sum(cantidad * precio) as Valor_Inventario_Total
  from libros;
==============
insert into libros (titulo,autor, editorial,precio,cantidad)
  values ('Harry Potter y la piedra filosofal','J. K. Rowling','Planeta',50,20);
insert into libros (titulo,autor, editorial,precio,cantidad)
  values ('Harry Potter y la cámara secreta','J. K. Rowling','Planeta',60,35);
insert into libros (titulo,autor, editorial,precio,cantidad)
  values ('Harry Potter y el caliz de fuego','J. K. Rowling','Planeta',65,70);
insert into libros (titulo,autor,editorial,precio,cantidad)
  values ('Matematica de 5to grado','Paenza','Siglo XXI',32,250);
insert into libros (titulo,autor,editorial,precio,cantidad)
  values ('Matematica de 4to grado','Paenza','Siglo XXI',38,350);
==============
select * from libros
  where titulo like 'Matematica%';
==============
select * from libros
  where titulo like 'Matematica%grado';
=============
EJERCICIO 3: Listar los lirbos de Harry Potter
=============
EJERCICIO 4: Calcular la valor de Inventario para los libros de Harry Potter
==============
select * from libros
order by titulo ;
=============
select * from libros
order by editorial ;
=============
select * from libros
order by autor,titulo ;
=============
select * from libros
order by 3,2 ;
=============
select  editorial,count(*) cant_libros,sum(cantidad) cant_ejemplares, sum(cantidad * precio) valor_inventario
  from libros
  group by editorial
  order by editorial asc
 ;
==============
select  editorial,autor,count(*) cant_libros,sum(cantidad) cant_ejemplares, sum(cantidad * precio) valor_inventario
  from libros
  group by editorial,autor
  order by editorial,autor 
 ;
==============
select  editorial,count(*) cant_libros,sum(cantidad) cant_ejemplares, sum(cantidad * precio) valor_inventario
  from libros
  group by editorial
      having  cant_libros >1
  order by editorial asc
 ;
==============
select  editorial,count(*) cant_libros,sum(cantidad) cant_ejemplares, sum(cantidad * precio) valor_inventario
  from libros
      where precio < 65
  group by editorial
      having  cant_libros >1
  order by editorial asc




  Crear BD fullstack_bd
===================
use fullstack_bd;
create table libros(
  codigo int AUTO_INCREMENT PRIMARY KEY,
  titulo varchar(40) not null,
  autor varchar(30),
  editorial varchar(15),
  precio float,
  cantidad integer
 );
=================================
Select * from libros;
=================================
insert into libros (titulo,autor, editorial,precio,cantidad)
  values ('Uno','Richard Bach','Planeta',12.50,70);
insert into libros (titulo,autor,editorial,precio,cantidad)
  values ('El aleph','Borges','Emece',25.50,100);
 insert into libros (titulo,autor,editorial,precio,cantidad)
  values ('Alicia en el pais de las maravillas','Lewis Carroll','Atlantida',10,200);
 insert into libros (titulo,autor,editorial,precio,cantidad)
  values ('Matematica estas ahi','Paenza','Siglo XXI',18.8,200);
===========================================
insert into libros (titulo,autor, editorial,precio,cantidad)
  values ('XXX','Richard Bach','Planeta',12.50,70);
-----
DELETE FROM libros WHERE (codigo = 5);
==========================================
insert into libros (autor,editorial)
  values ('Lewis Carroll','Planeta');
ERROR: Field 'titulo' doesn't have a default value
=======================================================
=======================================================