import mysql from "mysql2/promise";

// Establish a connection to MySQL database
const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@12344321mysql",
  database: "mysql_db",
});
console.log("✅ Connected to MySQL database");

/*
==========================
   🔧 DATABASE QUERIES
==========================

📌 1. Create a new database (if needed):
    await db.execute(`CREATE DATABASE mysql_db`);

📌 2. Show all available databases:
    const [databases] = await db.execute('SHOW DATABASES');
    console.log(databases);

==========================
   🧱 TABLE QUERIES
==========================

📌 3. Create a new table (if not exists):
    await db.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255)
      )
    `);

📌 4. Show all tables in the database:
    const [tables] = await db.execute('SHOW TABLES');
    console.log(tables);

==========================
   ➕ INSERT QUERIES
==========================

📌 5. Insert a single record (direct query):
    await db.execute(
      `INSERT INTO users (name, email) VALUES ('John Doe', 'john@gmail.com')`
    );

📌 6. Insert a single record (prepared statement):
    await db.execute(
      `INSERT INTO users (name, email) VALUES (?, ?)`,
      ["noni", "noni@gmail.com"]
    );

📌 7. Insert multiple records:
    const users = [
      ["John Doe", "john@gmail.com"],
      ["Jane Doe", "doe@gmail.com"],
      ["John Smith", "johnsmith@gmail.com"]
    ];
    await db.query(`INSERT INTO users (name, email) VALUES ?`, [users]);

==========================
   📋 SELECT QUERIES
==========================

📌 8. Select all records from the table:
    const [rows] = await db.execute('SELECT * FROM users');
    console.log(rows);

📌 9. Select records with a condition:
    const [rows] = await db.execute('SELECT * FROM users WHERE name = "John Doe"');
    console.log(rows);

==========================
   ✏️ UPDATE QUERIES
==========================

📌 10. Update a user's name using their ID:
    try {
      const [result] = await db.execute(
        `UPDATE users SET name = ? WHERE id = ?`,
        ["lakshay", 1]
      );
      const [updatedRows] = await db.execute('SELECT * FROM users');
      console.log(updatedRows);
    } catch (error) {
      console.error(error);
    }

==========================
   ❌ DELETE QUERIES
==========================

📌 11. Delete a user using their ID:
    try {
      const [result] = await db.execute(
        `DELETE FROM users WHERE id = ?`,
        [2]
      );
      const [remainingRows] = await db.execute('SELECT * FROM users');
      console.log(remainingRows);
    } catch (error) {
      console.error(error);
    }

==========================
   ✅ CURRENT DATA DISPLAY
==========================

📌 12. Show current records in the users table:
*/

// await db.execute("DELETE FROM users");

// const [rows] = await db.execute("SELECT * FROM users");
// console.log(rows);
