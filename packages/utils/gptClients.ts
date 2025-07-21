import { OpenAI } from 'openai'

if (!process.env.OPENAI_API_KEY) {
    throw new Error('Missing OPENAI_API_KEY in environment variables')
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: false, // only for Node.js environments
})

export async function askOpenAI(prompt: string): Promise<string> {
  const res = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7,
  })

  return res.choices[0].message.content || ''
}

export { openai }
