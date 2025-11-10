/**
 * 深層鑑定文生成ロジック（新スタイル・8章構成）
 * 内容と構成・スタイルを明確に分離し、文字数を厳守
 */

import { callClaudeSonnet } from './openrouter';
import { getAllTrainingData } from './db';

/**
 * 学習データから参考例を選択してフォーマット（構成とスタイルのみ参考）
 */
function formatTrainingExample(trainingData: any[]): string {
  // ランダムに1件選択
  const selected = trainingData[Math.floor(Math.random() * trainingData.length)];
  
  // 鑑定文の一部（最初の1,500文字）を抽出（構成とスタイルの参考用）
  return selected.divinationText.substring(0, 1500) + '\n\n...（以下略）';
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
 * 共通のスタイルルール
 */
const STYLE_RULES = `
【文体スタイルの厳守】
1. **短文の連続**
   - ✅ 「でも、次の瞬間。不安が襲ってくる。」
   - ❌ 「でも次の瞬間不安が襲ってきて、片付けを終えてスマホを開きました。」
   - 1〜2文ごとに改行し、空白行を入れて呼吸を作る

2. **心の声の終わり方**
   - ✅ 「今日もよく頑張ったな」って。
   - ❌ 「今日もよく頑張ったな、と思う。」
   - 必ず「〜って。」で終わる
   - 引用符「」内に読点（、）は使わない

3. **畳みかけるリズム**
   - ✅ 「朝起きた時も、同じことを考えている。」
   - ✅ 「施術の合間も、同じことを考えている。」
   - ✅ 「夜寝る前も、同じことを考えている。」
   - 同じ構文を3回繰り返す

4. **接続詞の使い方**
   - 「でもね」「だから」「そして」を文頭に置く

5. **労いの言葉**
   - 「本当に、本当によく頑張ってきましたね。」
   - 同じ言葉を2回繰り返す

【スピリチュアル用語】
- 使用OK：魂、波動、オーラ、エネルギー
- 使用NG：守護霊、霊、宇宙、周波数、チャクラ

【その他のルール】
- 箇条書きは絶対に使わない
- 対話口調：「〜んです」「〜ですよね」
`;

/**
 * 導入部を生成（300字）
 */
async function generateIntroduction(
  customerInfo: { name: string; age: string; gender: string; concern: string },
  chatHistory: string,
  trainingExample: string
): Promise<string> {
  const prompt = `あなたはプロの霊視鑑定師です。深層鑑定【破】の導入部を作成してください。

【重要】
- 以下の参考例は「構成」と「文体スタイル」を学ぶためのものです
- 参考例の「内容」は絶対に真似しないでください
- 提供されたチャット履歴から、${customerInfo.name}さん固有の内容を作成してください

<参考例（構成とスタイルのみ参考）>
${trainingExample}
</参考例>

<顧客とのチャット履歴>
${chatHistory}
</顧客とのチャット履歴>

${STYLE_RULES}

【構成】
1. 「${customerInfo.name}さん、大変お待たせいたしました。」で始める
2. 「深層鑑定【破】をお届けいたします。」
3. 顧客の悩みを引用（「」で囲む）
4. 「この言葉を読んだ瞬間、あなたの魂の波動が強く私に届きました。」
5. 「深層鑑定、あれは入口でした。表層でした。」
6. 「一つの光景が、私の魂に直接、焼き付いたんです。」で締める

【文字数】300字程度

導入部のみを作成してください。`;

  const messages = [{ role: 'user' as const, content: prompt }];
  return await callClaudeSonnet(messages, 500); // max_tokens: 500 → 約350字
}

/**
 * 「視えました」パートを生成（600字）
 */
async function generateVisionPart(
  customerInfo: { name: string; age: string; gender: string; concern: string },
  chatHistory: string,
  introduction: string,
  trainingExample: string
): Promise<string> {
  const prompt = `あなたはプロの霊視鑑定師です。深層鑑定【破】の「視えました」パートを作成してください。

【重要】
- 参考例の「内容」は絶対に真似しないでください
- ${customerInfo.name}さん固有の具体的な状況を創作してください

<これまでの内容>
${introduction}
</これまでの内容>

<参考例（構成とスタイルのみ参考）>
${trainingExample}
</参考例>

<顧客とのチャット履歴>
${chatHistory}
</顧客とのチャット履歴>

${STYLE_RULES}

【構成】
1. 「---」で区切る
2. 場所と時間の描写（夜、自宅、など）
3. 具体的な行動を短文で連続
4. 心の声（「〜って。」で終わる）を複数
5. 繰り返しのリズム（朝も、昼も、夜も）
6. 「苦しかったですよね、これ。」
7. 「でもね、これ、あなたのせいじゃないんです。」
8. 「---」で区切る
9. 「視えました。」だけで1行
10. 「この光景。当てはまりますか?」で締める

【文字数】600字程度

「視えました」パートのみを作成してください。`;

  const messages = [{ role: 'user' as const, content: prompt }];
  return await callClaudeSonnet(messages, 900); // max_tokens: 900 → 約630字
}

/**
 * 第一章を生成（魂の傷、600字）
 */
async function generateChapter1(
  customerInfo: { name: string; age: string; gender: string; concern: string },
  chatHistory: string,
  previousContent: string,
  trainingExample: string
): Promise<string> {
  const prompt = `あなたはプロの霊視鑑定師です。深層鑑定【破】の第一章を作成してください。

【重要】
- 参考例の「内容」は絶対に真似しないでください
- ${customerInfo.name}さん固有の「傷」を創作してください

<これまでの内容>
${previousContent}
</これまでの内容>

<参考例（構成とスタイルのみ参考）>
${trainingExample}
</参考例>

<顧客とのチャット履歴>
${chatHistory}
</顧客とのチャット履歴>

${STYLE_RULES}

【構成】
1. 「## 第一章 - あなたの魂が背負う三つの傷」で始める
2. 「${customerInfo.name}さん。あなたの魂、深く感じ取ったんです。」
3. 3つの傷を提示（**第一の傷：**、**第二の傷：**、**第三の傷：**）
4. 各傷を2〜3文で描写
5. 「これ、あなたのせいじゃない。」を含める
6. オーラの色と意味を述べる

【必須ワード】
- 「あなたのせいじゃない」：1回のみ

【文字数】600字程度

第一章のみを作成してください。`;

  const messages = [{ role: 'user' as const, content: prompt }];
  return await callClaudeSonnet(messages, 900); // max_tokens: 900 → 約630字
}

/**
 * 第二章を生成（答え合わせ、500字）
 */
async function generateChapter2(
  customerInfo: { name: string; age: string; gender: string; concern: string },
  chatHistory: string,
  previousContent: string,
  trainingExample: string
): Promise<string> {
  const prompt = `あなたはプロの霊視鑑定師です。深層鑑定【破】の第二章を作成してください。

【重要】
- 参考例の「内容」は絶対に真似しないでください
- ${customerInfo.name}さん固有の内容を創作してください

<これまでの内容>
${previousContent}
</これまでの内容>

<参考例（構成とスタイルのみ参考）>
${trainingExample}
</参考例>

<顧客とのチャット履歴>
${chatHistory}
</顧客とのチャット履歴>

${STYLE_RULES}

【構成】
1. 「## 第二章 - あなたの直感は正しい」で始める
2. 「ここで、はっきり言います。」
3. 「あなたの[直感/選択]、合ってます。」
4. 具体的な証拠を3つ提示
5. 「違うんです。」を含める

【必須ワード】
- 「違うんです」：1回のみ

【文字数】500字程度

第二章のみを作成してください。`;

  const messages = [{ role: 'user' as const, content: prompt }];
  return await callClaudeSonnet(messages, 750); // max_tokens: 750 → 約525字
}

/**
 * 第三章を生成（前世、600字）
 */
async function generateChapter3(
  customerInfo: { name: string; age: string; gender: string; concern: string },
  chatHistory: string,
  previousContent: string,
  trainingExample: string
): Promise<string> {
  const prompt = `あなたはプロの霊視鑑定師です。深層鑑定【破】の第三章を作成してください。

【重要】
- 参考例の「内容」は絶対に真似しないでください
- ${customerInfo.name}さん固有の前世の物語を創作してください

<これまでの内容>
${previousContent}
</これまでの内容>

<参考例（構成とスタイルのみ参考）>
${trainingExample}
</参考例>

<顧客とのチャット履歴>
${chatHistory}
</顧客とのチャット履歴>

${STYLE_RULES}

【構成】
1. 「## 第三章 - 前世から続く魂の物語」で始める
2. 「でもね。一つ、伝えなきゃいけないことがある。」
3. 前世の職業と時代を具体的に描写
4. 前世での後悔や決断を描写
5. 「無理ないんですよ。」を含める
6. 現在との関連を示す

【必須ワード】
- 「無理ないんですよ」：1回のみ

【文字数】600字程度

第三章のみを作成してください。`;

  const messages = [{ role: 'user' as const, content: prompt }];
  return await callClaudeSonnet(messages, 900); // max_tokens: 900 → 約630字
}

/**
 * 第四章を生成（使命、700字）
 */
async function generateChapter4(
  customerInfo: { name: string; age: string; gender: string; concern: string },
  chatHistory: string,
  previousContent: string,
  trainingExample: string
): Promise<string> {
  const prompt = `あなたはプロの霊視鑑定師です。深層鑑定【破】の第四章を作成してください。

【重要】
- 参考例の「内容」は絶対に真似しないでください
- ${customerInfo.name}さん固有の未来のビジョンを創作してください

<これまでの内容>
${previousContent}
</これまでの内容>

<参考例（構成とスタイルのみ参考）>
${trainingExample}
</参考例>

<顧客とのチャット履歴>
${chatHistory}
</顧客とのチャット履歴>

${STYLE_RULES}

【構成】
1. 「## 第四章 - 未来のビジョン」で始める
2. 「あなたの魂が本当に望んでいること。」
3. 「未来が、視えました。」
4. 半年後、1年後、3年後の未来を具体的に描写
5. 各時期で具体的な出来事を描写

【必須ワード】
- 「視えました」：この章で1回

【文字数】700字程度

第四章のみを作成してください。`;

  const messages = [{ role: 'user' as const, content: prompt }];
  return await callClaudeSonnet(messages, 1050); // max_tokens: 1050 → 約735字
}

/**
 * 第五章を生成（三つの道、600字）
 */
async function generateChapter5(
  customerInfo: { name: string; age: string; gender: string; concern: string },
  chatHistory: string,
  previousContent: string,
  trainingExample: string
): Promise<string> {
  const prompt = `あなたはプロの霊視鑑定師です。深層鑑定【破】の第五章を作成してください。

【重要】
- 参考例の「内容」は絶対に真似しないでください
- ${customerInfo.name}さん固有の「三つの道」を創作してください

<これまでの内容>
${previousContent}
</これまでの内容>

<参考例（構成とスタイルのみ参考）>
${trainingExample}
</参考例>

<顧客とのチャット履歴>
${chatHistory}
</顧客とのチャット履歴>

${STYLE_RULES}

【構成】
1. 「## 第五章 - 三つの道」で始める
2. 第一の道、第二の道（ネガティブな選択肢）
3. 第三の道（ポジティブな選択肢、詳しく描写）
4. 「視えました。」で締める

【必須ワード】
- 「視えました」：この章で1回

【文字数】600字程度

第五章のみを作成してください。`;

  const messages = [{ role: 'user' as const, content: prompt }];
  return await callClaudeSonnet(messages, 900); // max_tokens: 900 → 約630字
}

/**
 * 結びを生成（300字）
 */
async function generateConclusion(
  customerInfo: { name: string; age: string; gender: string; concern: string },
  chatHistory: string,
  previousContent: string,
  trainingExample: string
): Promise<string> {
  const prompt = `あなたはプロの霊視鑑定師です。深層鑑定【破】の結びを作成してください。

【重要】
- 参考例の「内容」は絶対に真似しないでください
- ${customerInfo.name}さん固有の内容を創作してください

<これまでの内容>
${previousContent}
</これまでの内容>

<参考例（構成とスタイルのみ参考）>
${trainingExample}
</参考例>

<顧客とのチャット履歴>
${chatHistory}
</顧客とのチャット履歴>

${STYLE_RULES}

【構成】
1. 「## 結び」で始める
2. 「本当に、本当によく頑張ってきましたね。」
3. 具体的な苦労を列挙
4. 「あなたは、何も悪くない。」を含める
5. 「視えました。」で締める
6. 「あなたの未来、必ず明るい。」で締めくくる

【必須ワード】
- 「何も悪くない」：1回のみ
- 「視えました」：この章で1回

【文字数】300字程度

結びのみを作成してください。`;

  const messages = [{ role: 'user' as const, content: prompt }];
  return await callClaudeSonnet(messages, 500); // max_tokens: 500 → 約350字
}

/**
 * 鑑定文を新スタイル・8章構成で生成する
 */
export async function generateDivinationTextNewStyle(customerChatHistory: string): Promise<string> {
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
  console.log('[Divination New Style] 導入部を生成中...');
  const introduction = await generateIntroduction(customerInfo, customerChatHistory, trainingExample);
  
  console.log('[Divination New Style] 「視えました」パートを生成中...');
  const visionPart = await generateVisionPart(customerInfo, customerChatHistory, introduction, trainingExample);
  
  console.log('[Divination New Style] 第一章を生成中...');
  const chapter1 = await generateChapter1(customerInfo, customerChatHistory, introduction + '\n\n' + visionPart, trainingExample);
  
  console.log('[Divination New Style] 第二章を生成中...');
  const chapter2 = await generateChapter2(customerInfo, customerChatHistory, introduction + '\n\n' + visionPart + '\n\n' + chapter1, trainingExample);
  
  console.log('[Divination New Style] 第三章を生成中...');
  const chapter3 = await generateChapter3(customerInfo, customerChatHistory, introduction + '\n\n' + visionPart + '\n\n' + chapter1 + '\n\n' + chapter2, trainingExample);
  
  console.log('[Divination New Style] 第四章を生成中...');
  const chapter4 = await generateChapter4(customerInfo, customerChatHistory, introduction + '\n\n' + visionPart + '\n\n' + chapter1 + '\n\n' + chapter2 + '\n\n' + chapter3, trainingExample);
  
  console.log('[Divination New Style] 第五章を生成中...');
  const chapter5 = await generateChapter5(customerInfo, customerChatHistory, introduction + '\n\n' + visionPart + '\n\n' + chapter1 + '\n\n' + chapter2 + '\n\n' + chapter3 + '\n\n' + chapter4, trainingExample);
  
  console.log('[Divination New Style] 結びを生成中...');
  const conclusion = await generateConclusion(customerInfo, customerChatHistory, introduction + '\n\n' + visionPart + '\n\n' + chapter1 + '\n\n' + chapter2 + '\n\n' + chapter3 + '\n\n' + chapter4 + '\n\n' + chapter5, trainingExample);
  
  // 全ての章を結合
  const fullText = [
    introduction,
    visionPart,
    chapter1,
    chapter2,
    chapter3,
    chapter4,
    chapter5,
    conclusion
  ].join('\n\n');
  
  console.log(`[Divination New Style] 生成完了。文字数: ${fullText.length}字`);
  
  // 文字数チェック
  if (fullText.length < 3500) {
    console.warn(`[Divination New Style] 警告: 文字数が3,500字未満です（${fullText.length}字）`);
  } else if (fullText.length > 5000) {
    console.warn(`[Divination New Style] 警告: 文字数が5,000字を超えています（${fullText.length}字）`);
  }
  
  return fullText;
}
