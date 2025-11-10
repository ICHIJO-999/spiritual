/**
 * OpenRouter API接続ヘルパー
 * Claude Sonnet 4.5を呼び出すための関数
 */

interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface OpenRouterResponse {
  id: string;
  choices: Array<{
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }>;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

/**
 * OpenRouter APIを使用してClaude Sonnet 4.5を呼び出す
 */
/**
 * OpenRouter APIを使用してClaude Sonnet 4.5を呼び出す（ストリーミング対応）
 */
export async function* callClaudeSonnetStream(messages: Message[]): AsyncGenerator<string> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  
  if (!apiKey) {
    throw new Error('OPENROUTER_API_KEY is not set');
  }

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://divination-tool.manus.space',
      'X-Title': 'Divination Tool',
    },
    body: JSON.stringify({
      model: 'anthropic/claude-3.5-sonnet',
      messages: messages,
      temperature: 0.7,
      max_tokens: 8000,
      stream: true,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenRouter API error: ${response.status} - ${errorText}`);
  }

  const reader = response.body?.getReader();
  if (!reader) {
    throw new Error('No response body');
  }

  const decoder = new TextDecoder();
  let buffer = '';

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6);
          if (data === '[DONE]') continue;
          
          try {
            const parsed = JSON.parse(data);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              yield content;
            }
          } catch (e) {
            // JSONパースエラーは無視
          }
        }
      }
    }
  } finally {
    reader.releaseLock();
  }
}

/**
 * OpenRouter APIを使用してClaude Sonnet 4.5を呼び出す（非ストリーミング）
 */
export async function callClaudeSonnet(messages: Message[]): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  
  if (!apiKey) {
    throw new Error('OPENROUTER_API_KEY is not set');
  }

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://divination-tool.manus.space',
      'X-Title': 'Divination Tool',
    },
    body: JSON.stringify({
      model: 'anthropic/claude-3.5-sonnet',
      messages: messages,
      temperature: 0.7,
      max_tokens: 8000,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenRouter API error: ${response.status} - ${errorText}`);
  }

  const data: OpenRouterResponse = await response.json();
  
  if (!data.choices || data.choices.length === 0) {
    throw new Error('No response from OpenRouter API');
  }

  return data.choices[0].message.content;
}
