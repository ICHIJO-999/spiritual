/**
 * OpenRouter API接続テスト
 */

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

if (!OPENROUTER_API_KEY) {
  console.error('❌ OPENROUTER_API_KEY is not set');
  process.exit(1);
}

console.log('✅ OPENROUTER_API_KEY is set');
console.log('🔑 Key preview:', OPENROUTER_API_KEY.substring(0, 20) + '...');

// テスト用の簡単なメッセージ
const testMessages = [
  { role: 'user', content: 'こんにちは。簡単なテストです。' }
];

console.log('\n📡 Testing OpenRouter API...\n');

try {
  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://divination-tool.manus.space',
      'X-Title': 'Divination Tool',
    },
    body: JSON.stringify({
      model: 'anthropic/claude-3.5-sonnet',
      messages: testMessages,
      temperature: 0.7,
      max_tokens: 100,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('❌ API Error:', response.status, errorText);
    process.exit(1);
  }

  const data = await response.json();
  console.log('✅ API Response received:');
  console.log('Model:', data.model);
  console.log('Response:', data.choices[0].message.content);
  console.log('\n✅ OpenRouter API is working correctly!');
  
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
