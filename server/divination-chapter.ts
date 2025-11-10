import { invokeLLM } from "./_core/llm";
import type { TrainingData } from "../drizzle/schema";

/**
 * 章別生成: 各章を独立して生成し、最後に結合する
 * 質の高さと正確さを最優先
 */

interface ChapterGenerationParams {
  chatHistory: string;
  customerName: string;
  trainingData: TrainingData[];
  previousChapters?: string; // 前の章の内容（一貫性のため）
}

/**
 * 学習データから1件をランダムに選択して文体参考用にフォーマット
 */
function formatTrainingExample(data: TrainingData): string {
  const text = data.divinationText || "";
  // 最初の1,200字を抜粋（文体参考のみ）
  const excerpt = text.substring(0, 1200);
  return `【文体参考例】\n${excerpt}\n...(以下省略)`;
}

/**
 * 導入部を生成（約500字）
 */
export async function generateIntroduction(params: ChapterGenerationParams): Promise<string> {
  const { chatHistory, customerName, trainingData } = params;
  
  // ランダムに1件選択
  const randomExample = trainingData[Math.floor(Math.random() * trainingData.length)];
  const exampleText = formatTrainingExample(randomExample);

  const prompt = `あなたはプロの占い師です。顧客のチャット履歴から、深層鑑定文【破】の**導入部のみ**を作成してください。

${exampleText}

<顧客のチャット履歴>
${chatHistory}
</顧客のチャット履歴>

<導入部の執筆ルール>
1. タイトル: "# ${customerName}さん 深層鑑定【破】"で始める
2. 日時を記載（例: 2024年1月8日 15:30）
3. 顧客への呼びかけと感謝
4. 顧客の波動から感じ取ったこと
5. 顧客の現在の状況への深い共感
6. 顧客の不安や悩みを具体的に描写
7. 文字数: **最低500字以上**

<文体の特徴>
- 感情的で深く共感する語りかけ
- 「視えました」「波動が伝わってきました」などスピリチュアルな表現
- 顧客の内面を深く推測して描写
- 繰り返しの強調（「本当に本当に」「深く深く」など）
- 顧客の具体的な状況を詳細に描写

**重要**: 簡潔にまとめず、詳細に、具体的に、生々しく描写してください。顧客の心に深く響く言葉を選び、共感と理解を示し続けてください。

それでは、導入部のみを作成してください。`;

  const response = await invokeLLM({
    messages: [
      { role: "user", content: prompt }
    ],
    max_tokens: 2000,
  });

  const content = response.choices[0].message.content;
  return typeof content === 'string' ? content : "";
}

/**
 * 第一章を生成（約900字）
 */
export async function generateChapter1(params: ChapterGenerationParams): Promise<string> {
  const { chatHistory, previousChapters, trainingData } = params;
  
  const randomExample = trainingData[Math.floor(Math.random() * trainingData.length)];
  const exampleText = formatTrainingExample(randomExample);

  const prompt = `あなたはプロの占い師です。深層鑑定文【破】の**第一章のみ**を作成してください。

${exampleText}

<顧客のチャット履歴>
${chatHistory}
</顧客のチャット履歴>

<これまでの内容>
${previousChapters || "（なし）"}
</これまでの内容>

<第一章の執筆ルール>
1. タイトル: "## 第一章 - あなたの魂が背負う三つの傷"
2. 顧客の魂に刻まれた「三つの傷」を詳細に描写
3. 各傷について最低300字以上で深く掘り下げる
4. 顧客の具体的な状況（仕事、家族、経済的不安など）を反映
5. 文字数: **最低900字以上**

<文体の特徴>
- 感情的で深く共感する語りかけ
- スピリチュアルな表現を多用
- 顧客の内面を深く推測して描写
- 繰り返しの強調で感情を込める

**重要**: 簡潔にまとめず、各傷を詳細に、具体的に、生々しく描写してください。

それでは、第一章のみを作成してください。`;

  const response = await invokeLLM({
    messages: [
      { role: "user", content: prompt }
    ],
    max_tokens: 3000,
  });

  const content = response.choices[0].message.content;
  return typeof content === 'string' ? content : "";
}

/**
 * 第二章を生成（約700字）
 */
export async function generateChapter2(params: ChapterGenerationParams): Promise<string> {
  const { chatHistory, previousChapters, trainingData } = params;
  
  const randomExample = trainingData[Math.floor(Math.random() * trainingData.length)];
  const exampleText = formatTrainingExample(randomExample);

  const prompt = `あなたはプロの占い師です。深層鑑定文【破】の**第二章のみ**を作成してください。

${exampleText}

<顧客のチャット履歴>
${chatHistory}
</顧客のチャット履歴>

<これまでの内容>
${previousChapters || "（なし）"}
</これまでの内容>

<第二章の執筆ルール>
1. タイトル: "## 第二章 - あなたの直感は間違っていない"
2. 顧客の決断や直感が正しいことを断言
3. その証拠を4つ以上具体的に示す
4. 宇宙からのサポートの兆しを描写
5. 文字数: **最低700字以上**

<文体の特徴>
- 力強く断言する語り口
- 具体的な証拠を詳細に描写
- スピリチュアルな視点からの励まし

**重要**: 簡潔にまとめず、各証拠を詳細に描写してください。

それでは、第二章のみを作成してください。`;

  const response = await invokeLLM({
    messages: [
      { role: "user", content: prompt }
    ],
    max_tokens: 2500,
  });

  const content = response.choices[0].message.content;
  return typeof content === 'string' ? content : "";
}

/**
 * 第三章を生成（約700字）
 */
export async function generateChapter3(params: ChapterGenerationParams): Promise<string> {
  const { chatHistory, previousChapters, trainingData } = params;
  
  const randomExample = trainingData[Math.floor(Math.random() * trainingData.length)];
  const exampleText = formatTrainingExample(randomExample);

  const prompt = `あなたはプロの占い師です。深層鑑定文【破】の**第三章のみ**を作成してください。

${exampleText}

<顧客のチャット履歴>
${chatHistory}
</顧客のチャット履歴>

<これまでの内容>
${previousChapters || "（なし）"}
</これまでの内容>

<第三章の執筆ルール>
1. タイトル: "## 第三章 - 前世からの約束"
2. 顧客の前世の物語を創作して詳細に語る
3. 前世の経験と現在の状況の呼応を描写
4. 物語は具体的で臨場感のあるものにする
5. 文字数: **最低700字以上**

<文体の特徴>
- 物語調で臨場感のある描写
- 前世の具体的なシーンを詳細に描く
- 現在との繋がりを深く語る

**重要**: 簡潔にまとめず、前世の物語を詳細に、臨場感を持って描写してください。

それでは、第三章のみを作成してください。`;

  const response = await invokeLLM({
    messages: [
      { role: "user", content: prompt }
    ],
    max_tokens: 2500,
  });

  const content = response.choices[0].message.content;
  return typeof content === 'string' ? content : "";
}

/**
 * 第四章を生成（約900字）
 */
export async function generateChapter4(params: ChapterGenerationParams): Promise<string> {
  const { chatHistory, previousChapters, trainingData } = params;
  
  const randomExample = trainingData[Math.floor(Math.random() * trainingData.length)];
  const exampleText = formatTrainingExample(randomExample);

  const prompt = `あなたはプロの占い師です。深層鑑定文【破】の**第四章のみ**を作成してください。

${exampleText}

<顧客のチャット履歴>
${chatHistory}
</顧客のチャット履歴>

<これまでの内容>
${previousChapters || "（なし）"}
</これまでの内容>

<第四章の執筆ルール>
1. タイトル: "## 第四章 - これからの道筋"
2. 「視えました」で始める
3. 半年後の未来を最低300字以上で詳細に描写
4. 1年後の未来を最低300字以上で詳細に描写
5. 3年後の未来を最低300字以上で詳細に描写
6. 文字数: **最低900字以上**

<文体の特徴>
- 具体的な未来のビジョンを詳細に描く
- 顧客の願望を反映した明るい未来
- 臨場感のある描写

**重要**: 簡潔にまとめず、各時期の未来を詳細に、具体的に描写してください。

それでは、第四章のみを作成してください。`;

  const response = await invokeLLM({
    messages: [
      { role: "user", content: prompt }
    ],
    max_tokens: 3000,
  });

  const content = response.choices[0].message.content;
  return typeof content === 'string' ? content : "";
}

/**
 * 第五章を生成（約700字）
 */
export async function generateChapter5(params: ChapterGenerationParams): Promise<string> {
  const { chatHistory, previousChapters, trainingData } = params;
  
  const randomExample = trainingData[Math.floor(Math.random() * trainingData.length)];
  const exampleText = formatTrainingExample(randomExample);

  const prompt = `あなたはプロの占い師です。深層鑑定文【破】の**第五章のみ**を作成してください。

${exampleText}

<顧客のチャット履歴>
${chatHistory}
</顧客のチャット履歴>

<これまでの内容>
${previousChapters || "（なし）"}
</これまでの内容>

<第五章の執筆ルール>
1. タイトル: "## 第五章 - 魂が選ぶべき三つの道"
2. 三つの道をそれぞれ詳しく説明（各100字以上）
3. 第三の道を最低400字以上で詳細に描写
4. 顧客に最も適した道を示唆
5. 文字数: **最低700字以上**

<文体の特徴>
- 選択肢を具体的に示す
- 第三の道に特に力を入れる
- 顧客の状況に合わせた提案

**重要**: 簡潔にまとめず、各道を詳細に描写してください。

それでは、第五章のみを作成してください。`;

  const response = await invokeLLM({
    messages: [
      { role: "user", content: prompt }
    ],
    max_tokens: 2500,
  });

  const content = response.choices[0].message.content;
  return typeof content === 'string' ? content : "";
}

/**
 * 結びを生成（約400字）
 */
export async function generateConclusion(params: ChapterGenerationParams): Promise<string> {
  const { chatHistory, previousChapters, trainingData } = params;
  
  const randomExample = trainingData[Math.floor(Math.random() * trainingData.length)];
  const exampleText = formatTrainingExample(randomExample);

  const prompt = `あなたはプロの占い師です。深層鑑定文【破】の**結びのみ**を作成してください。

${exampleText}

<顧客のチャット履歴>
${chatHistory}
</顧客のチャット履歴>

<これまでの内容>
${previousChapters || "（なし）"}
</これまでの内容>

<結びの執筆ルール>
1. タイトル: "## 結び - 魂からの最後のメッセージ"
2. 顧客への最後の励ましと祝福
3. 魂からの深いメッセージ
4. 希望と勇気を与える締めくくり
5. 文字数: **最低400字以上**

<文体の特徴>
- 深い愛情と祝福を込めた語りかけ
- 顧客の未来への希望を強調
- 魂の成長を祝福する

**重要**: 簡潔にまとめず、魂からの深いメッセージを詳細に描写してください。

それでは、結びのみを作成してください。`;

  const response = await invokeLLM({
    messages: [
      { role: "user", content: prompt }
    ],
    max_tokens: 2000,
  });

  const content = response.choices[0].message.content;
  return typeof content === 'string' ? content : "";
}

/**
 * 全章を生成して結合
 */
export async function generateDivinationByChapters(
  chatHistory: string,
  customerName: string,
  trainingData: TrainingData[]
): Promise<string> {
  const params: ChapterGenerationParams = {
    chatHistory,
    customerName,
    trainingData,
  };

  // 導入部
  const introduction = await generateIntroduction(params);
  
  // 第一章
  const chapter1 = await generateChapter1({
    ...params,
    previousChapters: introduction,
  });
  
  // 第二章
  const chapter2 = await generateChapter2({
    ...params,
    previousChapters: introduction + "\n\n" + chapter1,
  });
  
  // 第三章
  const chapter3 = await generateChapter3({
    ...params,
    previousChapters: introduction + "\n\n" + chapter1 + "\n\n" + chapter2,
  });
  
  // 第四章
  const chapter4 = await generateChapter4({
    ...params,
    previousChapters: introduction + "\n\n" + chapter1 + "\n\n" + chapter2 + "\n\n" + chapter3,
  });
  
  // 第五章
  const chapter5 = await generateChapter5({
    ...params,
    previousChapters: introduction + "\n\n" + chapter1 + "\n\n" + chapter2 + "\n\n" + chapter3 + "\n\n" + chapter4,
  });
  
  // 結び
  const conclusion = await generateConclusion({
    ...params,
    previousChapters: introduction + "\n\n" + chapter1 + "\n\n" + chapter2 + "\n\n" + chapter3 + "\n\n" + chapter4 + "\n\n" + chapter5,
  });

  // 全章を結合
  return [
    introduction,
    chapter1,
    chapter2,
    chapter3,
    chapter4,
    chapter5,
    conclusion,
  ].join("\n\n");
}
