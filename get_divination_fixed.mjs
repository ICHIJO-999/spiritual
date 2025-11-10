import mysql from 'mysql2/promise';
import fs from 'fs';

const connection = await mysql.createConnection(process.env.DATABASE_URL);
const [rows] = await connection.execute('SELECT divination_text FROM training_data LIMIT 1');
if (rows.length > 0) {
  const text = rows[0].divination_text || 'No text';
  fs.writeFileSync('/home/ubuntu/divination_tool/sample_divination.txt', text);
  console.log('Saved to sample_divination.txt');
  console.log('Length:', text.length);
}
await connection.end();
