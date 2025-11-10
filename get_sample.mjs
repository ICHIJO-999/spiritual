import { drizzle } from 'drizzle-orm/mysql2';
import { trainingData } from './drizzle/schema.ts';

const db = drizzle(process.env.DATABASE_URL);

const samples = await db.select().from(trainingData).limit(1);

if (samples.length > 0) {
  console.log('=== チャット履歴 ===');
  console.log(samples[0].chatHistory.substring(0, 500));
  console.log('\n=== 鑑定文（最初の2000文字） ===');
  console.log(samples[0].divinationText.substring(0, 2000));
  console.log('\n=== 文字数 ===');
  console.log(samples[0].divinationText.length);
}
