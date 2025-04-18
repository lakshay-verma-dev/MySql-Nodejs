import mysql from "mysql2/promise"

const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@12344321mysql",
  database: "mysql_db",
});
console.log("Connected to MySQL database");
//Query
    // create database 
        // await db.execute(`create database mysql_db`)
        
    //show databases
        // console.log(await db.execute('show databases'))
        
    // create table
        // await db.execute(`create table if not exists users (id int auto_increment primary key, name varchar(255), email varchar(255))`)
        
    // show tables
        // console.log(await db.execute('show tables'));
        
    // insert data
        // await db.execute(`insert into users (name, email) values ('John Doe', 'john@gmail.com')`)
        
    // read tables data
        // console.log(await db.execute('select * from users'));
        


