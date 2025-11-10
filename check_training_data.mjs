import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

const connection = await mysql.createConnection(process.env.DATABASE_URL);
const db = drizzle(connection);

const [rows] = await connection.execute('SELECT * FROM training_data LIMIT 1');

if (rows.length > 0) {
  console.log("=== チャット履歴（最初の500文字） ===");
  console.log(rows[0].chat_history.substring(0, 500));
  console.log("\n=== 鑑定文（最初の2000文字） ===");
  console.log(rows[0].divination_text.substring(0, 2000));
  console.log("\n=== 文字数 ===");
  console.log(rows[0].divination_text.length);
}

await connection.end();
