import { GoogleGenerativeAI } from "@google/generative-ai";

// Inicializa o cliente do Gemini usando a nova variável de ambiente
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const { prompt, contexto } = req.body;

    if (!prompt || !contexto) {
      return res.status(400).json({ error: "Payload inválido" });
    }

    // Usamos o modelo Flash, que é ultrarrápido e gratuito
    const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        // Isto força a IA a responder sempre em JSON perfeito!
        generationConfig: { responseMimeType: "application/json" } 
    });

    // Unimos as regras (prompt) com os dados do usuário (contexto)
    const promptCompleto = `${prompt}\n\nAqui estão os dados do atleta:\n${JSON.stringify(contexto)}`;

    // Faz a chamada para a IA
    const result = await model.generateContent(promptCompleto);
    
    // Converte a resposta de texto para um objeto JavaScript
    const resposta = JSON.parse(result.response.text());

    return res.status(200).json(resposta);

  } catch (error) {
    console.error("Erro Gemini:", error);
    return res.status(500).json({ error: "Falha ao consultar IA" });
  }
}
