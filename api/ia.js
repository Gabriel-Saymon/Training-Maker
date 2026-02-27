// api/ia.js
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const { prompt, contexto } = req.body;

    if (!prompt || !contexto) {
      return res.status(400).json({ error: "Payload inválido" });
    }

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini", // <--- CORRIGIDO AQUI: gpt-4o-mini
      messages: [
        { role: "system", content: prompt },
        { role: "user", content: JSON.stringify(contexto) }
      ],
      temperature: 0.2
    });

    const raw = completion.choices[0].message.content;

    // Garantia extra de segurança
    const resposta = JSON.parse(raw);

    return res.status(200).json(resposta);

  } catch (error) {
    console.error("Erro IA:", error);
    return res.status(500).json({ error: "Falha ao consultar IA" });
  }
}
