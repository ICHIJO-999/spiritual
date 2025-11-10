import { drizzle } from 'drizzle-orm/mysql2';
import { trainingData } from './drizzle/schema.ts';
import mysql from 'mysql2/promise';
import fs from 'fs';

const connection = await mysql.createConnection(process.env.DATABASE_URL);
const db = drizzle(connection);

const result = await db.select().from(trainingData).limit(1);
if (result.length > 0) {
  fs.writeFileSync('/home/ubuntu/divination_tool/sample_divination.txt', result[0].divinationText || 'No text');
  console.log('Saved to sample_divination.txt');
  console.log('Length:', (result[0].divinationText || '').length);
}
await connection.end();
