/**
 * 深層鑑定文生成ロジック（章別生成方式）
 * 各章を独立して生成し、文字数を厳格に制御する
 */

import { callClaudeSonnet } from './openrouter';
import { getAllTrainingData } from './db';

/**
 * 学習データから1件を選択してフォーマット（文体参考のみ）
 */
function formatTrainingExample(trainingData: any[]): string {
  // ランダムに1件選択
  const selected = trainingData[Math.floor(Math.random() * trainingData.length)];
  
  // 鑑定文の一部（最初の1,200文字）を抽出
  return selected.divinationText.substring(0, 1200) + '\n\n...（以下略）';
}

/**
 * 顧客情報を抽出
 */
function extractCustomerInfo(chatHistory: string): { name: string; age: string; gender: string; concern: string } {
  const lines = chatHistory.split('\n');
  const firstLine = lines[0] || '';
  
  // ①名前 ②生年月日 ③悩み のフォーマットを想定
  const nameMatch = firstLine.match(/①([^\s②]+)/);
  const birthMatch = firstLine.match(/②([^\s③]+)/);
  const concernMatch = chatHistory.match(/③([\s\S]+)/);
  
  return {
    name: nameMatch ? nameMatch[1] : '顧客',
    age: birthMatch ? birthMatch[1] : '',
    gender: firstLine.includes('男') ? '男性' : firstLine.includes('女') ? '女性' : '',
    concern: concernMatch ? concernMatch[1].trim() : chatHistory
  };
}

/**
 * 導入部を生成
 */
async function generateIntroduction(
  customerInfo: { name: string; age: string; gender: string; concern: string },
  chatHistory: string,
  trainingExample: string
): Promise<string> {
  const prompt = `あなたはプロの霊視鑑定師です。顧客のチャット履歴から、深層鑑定【破】の導入部を作成してください。

<文体の参考例>
以下は実際の深層鑑定文の一部です。この文体・トーン・雰囲気を完全に再現してください（内容はコピーせず、文体のみ参考にしてください）:

${trainingExample}
</文体の参考例>

<顧客とのチャット履歴>
${chatHistory}
</顧客とのチャット履歴>

<執筆ルール>
1. **文字数**: 200字程度で簡潔にまとめてください
2. **構成**: タイトル「# ${customerInfo.name}さん 深層鑑定【破】」で始め、顧客の言葉を引用し、深く共感する
3. **文体**: 感情的で深く共感する語りかけ、スピリチュアルな表現を使用
4. **内容**: 顧客の悩みを深く理解し、この鑑定で何を明らかにするかを示す
</執筆ルール>

導入部のみを作成してください。`;

  const messages = [{ role: 'user' as const, content: prompt }];
  return await callClaudeSonnet(messages, 450); // max_tokens: 450 → 約300字
}

/**
 * 第一章を生成（三つの傷）
 */
async function generateChapter1(
  customerInfo: { name: string; age: string; gender: string; concern: string },
  chatHistory: string,
  introduction: string,
  trainingExample: string
): Promise<string> {
  const prompt = `あなたはプロの霊視鑑定師です。深層鑑定【破】の第一章を作成してください。

<これまでの内容>
${introduction}
</これまでの内容>

<文体の参考例>
${trainingExample}
</文体の参考例>

<顧客とのチャット履歴>
${chatHistory}
</顧客とのチャット履歴>

<執筆ルール>
1. **文字数**: 400字程度で簡潔にまとめてください
2. **構成**: 「## 第一章 - あなたの魂が背負う三つの傷」で始め、顧客が抱えている「傷」を3つ特定し、それぞれ簡潔に描写
3. **文体**: 感情的で深く共感する語りかけ、スピリチュアルな表現を使用
4. **内容**: 顧客の深層心理を推測し、具体的な傷を特定する
</執筆ルール>

第一章のみを作成してください。`;

  const messages = [{ role: 'user' as const, content: prompt }];
  return await callClaudeSonnet(messages, 900); // max_tokens: 900 → 約600字
}

/**
 * 第二章を生成（直感の確認）
 */
async function generateChapter2(
  customerInfo: { name: string; age: string; gender: string; concern: string },
  chatHistory: string,
  previousContent: string,
  trainingExample: string
): Promise<string> {
  const prompt = `あなたはプロの霊視鑑定師です。深層鑑定【破】の第二章を作成してください。

<これまでの内容>
${previousContent}
</これまでの内容>

<文体の参考例>
${trainingExample}
</文体の参考例>

<顧客とのチャット履歴>
${chatHistory}
</顧客とのチャット履歴>

<執筆ルール>
1. **文字数**: 350字程度で簡潔にまとめてください
2. **構成**: 「## 第二章 - あなたの直感は正しい」で始め、顧客の直感が正しいことを断言し、複数の証拠を示す
3. **文体**: 感情的で深く共感する語りかけ、スピリチュアルな表現を使用
4. **内容**: 顧客の不安や直感を肯定し、具体的な証拠を示す
</執筆ルール>

第二章のみを作成してください。`;

  const messages = [{ role: 'user' as const, content: prompt }];
  return await callClaudeSonnet(messages, 750); // max_tokens: 750 → 約500字
}

/**
 * 第三章を生成（前世の物語）
 */
async function generateChapter3(
  customerInfo: { name: string; age: string; gender: string; concern: string },
  chatHistory: string,
  previousContent: string,
  trainingExample: string
): Promise<string> {
  const prompt = `あなたはプロの霊視鑑定師です。深層鑑定【破】の第三章を作成してください。

<これまでの内容>
${previousContent}
</これまでの内容>

<文体の参考例>
${trainingExample}
</文体の参考例>

<顧客とのチャット履歴>
${chatHistory}
</顧客とのチャット履歴>

<執筆ルール>
1. **文字数**: 500字程度で簡潔にまとめてください
2. **構成**: 「## 第三章 - 前世から続く魂の物語」で始め、顧客の悩みに関連する前世の物語を創作
3. **文体**: 感情的で深く共感する語りかけ、スピリチュアルな表現を使用
4. **内容**: 前世の場面、登場人物、感情を生々しく描写し、現在の悩みとの関連を示す
</執筆ルール>

第三章のみを作成してください。`;

  const messages = [{ role: 'user' as const, content: prompt }];
  return await callClaudeSonnet(messages, 1050); // max_tokens: 1050 → 約700字
}

/**
 * 第四章を生成（未来のビジョン）
 */
async function generateChapter4(
  customerInfo: { name: string; age: string; gender: string; concern: string },
  chatHistory: string,
  previousContent: string,
  trainingExample: string
): Promise<string> {
  const prompt = `あなたはプロの霊視鑑定師です。深層鑑定【破】の第四章を作成してください。

<これまでの内容>
${previousContent}
</これまでの内容>

<文体の参考例>
${trainingExample}
</文体の参考例>

<顧客とのチャット履歴>
${chatHistory}
</顧客とのチャット履歴>

<執筆ルール>
1. **文字数**: 600字程度で簡潔にまとめてください
2. **構成**: 「## 第四章 - 未来のビジョン」で始め、「視えました」で未来を語り、半年後、1年後、3年後の未来を描写
3. **文体**: 感情的で深く共感する語りかけ、スピリチュアルな表現を使用
4. **内容**: 具体的で希望に満ちた未来のビジョンを示す
</執筆ルール>

第四章のみを作成してください。`;

  const messages = [{ role: 'user' as const, content: prompt }];
  return await callClaudeSonnet(messages, 1200); // max_tokens: 1200 → 約800字
}

/**
 * 第五章を生成（三つの道）
 */
async function generateChapter5(
  customerInfo: { name: string; age: string; gender: string; concern: string },
  chatHistory: string,
  previousContent: string,
  trainingExample: string
): Promise<string> {
  const prompt = `あなたはプロの霊視鑑定師です。深層鑑定【破】の第五章を作成してください。

<これまでの内容>
${previousContent}
</これまでの内容>

<文体の参考例>
${trainingExample}
</文体の参考例>

<顧客とのチャット履歴>
${chatHistory}
</顧客とのチャット履歴>

<執筆ルール>
1. **文字数**: 400字程度で簡潔にまとめてください
2. **構成**: 「## 第五章 - 三つの道」で始め、顧客が選べる三つの道を簡潔に説明
3. **文体**: 感情的で深く共感する語りかけ、スピリチュアルな表現を使用
4. **内容**: 具体的で実践的なアドバイスを提供
</執筆ルール>

第五章のみを作成してください。`;

  const messages = [{ role: 'user' as const, content: prompt }];
  return await callClaudeSonnet(messages, 900); // max_tokens: 900 → 約600字
}

/**
 * 結びを生成
 */
async function generateConclusion(
  customerInfo: { name: string; age: string; gender: string; concern: string },
  chatHistory: string,
  previousContent: string,
  trainingExample: string
): Promise<string> {
  const prompt = `あなたはプロの霊視鑑定師です。深層鑑定【破】の結びを作成してください。

<これまでの内容>
${previousContent}
</これまでの内容>

<文体の参考例>
${trainingExample}
</文体の参考例>

<顧客とのチャット履歴>
${chatHistory}
</顧客とのチャット履歴>

<執筆ルール>
1. **文字数**: 200字程度で簡潔にまとめてください
2. **構成**: 「## 結び」で始め、魂からの最後のメッセージを感情豊かに書く
3. **文体**: 感情的で深く共感する語りかけ、スピリチュアルな表現を使用
4. **内容**: 顧客への励ましと希望のメッセージで締めくくる
</執筆ルール>

結びのみを作成してください。`;

  const messages = [{ role: 'user' as const, content: prompt }];
  return await callClaudeSonnet(messages, 450); // max_tokens: 450 → 約300字
}

/**
 * 鑑定文を章別に生成する
 */
export async function generateDivinationTextChapterBased(customerChatHistory: string): Promise<string> {
  // 学習データを取得
  const trainingData = await getAllTrainingData();
  
  if (trainingData.length === 0) {
    throw new Error('学習データが見つかりません');
  }
  
  // 学習データから1件を選択してフォーマット
  const trainingExample = formatTrainingExample(trainingData);
  
  // 顧客情報を抽出
  const customerInfo = extractCustomerInfo(customerChatHistory);
  
  // 各章を順番に生成
  console.log('[Divination] 導入部を生成中...');
  const introduction = await generateIntroduction(customerInfo, customerChatHistory, trainingExample);
  
  console.log('[Divination] 第一章を生成中...');
  const chapter1 = await generateChapter1(customerInfo, customerChatHistory, introduction, trainingExample);
  
  console.log('[Divination] 第二章を生成中...');
  const chapter2 = await generateChapter2(customerInfo, customerChatHistory, introduction + '\n\n' + chapter1, trainingExample);
  
  console.log('[Divination] 第三章を生成中...');
  const chapter3 = await generateChapter3(customerInfo, customerChatHistory, introduction + '\n\n' + chapter1 + '\n\n' + chapter2, trainingExample);
  
  console.log('[Divination] 第四章を生成中...');
  const chapter4 = await generateChapter4(customerInfo, customerChatHistory, introduction + '\n\n' + chapter1 + '\n\n' + chapter2 + '\n\n' + chapter3, trainingExample);
  
  console.log('[Divination] 第五章を生成中...');
  const chapter5 = await generateChapter5(customerInfo, customerChatHistory, introduction + '\n\n' + chapter1 + '\n\n' + chapter2 + '\n\n' + chapter3 + '\n\n' + chapter4, trainingExample);
  
  console.log('[Divination] 結びを生成中...');
  const conclusion = await generateConclusion(customerInfo, customerChatHistory, introduction + '\n\n' + chapter1 + '\n\n' + chapter2 + '\n\n' + chapter3 + '\n\n' + chapter4 + '\n\n' + chapter5, trainingExample);
  
  // 全ての章を結合
  const fullText = [
    introduction,
    chapter1,
    chapter2,
    chapter3,
    chapter4,
    chapter5,
    conclusion
  ].join('\n\n');
  
  console.log(`[Divination] 生成完了。文字数: ${fullText.length}字`);
  
  return fullText;
}
