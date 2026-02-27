import { PROMPT_BASE } from "./fitgen.ai.prompt.js";

export async function consultarIA(contexto) {
  const response = await fetch("/api/ia", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt: PROMPT_BASE,
      contexto
    })
  });

  return response.json();
}

export function validarRespostaIA(resposta) {
  const acoes = ["manter", "progredir", "simplificar", "deload"];
  if (!acoes.includes(resposta.acaoSugerida)) return false;
  if (typeof resposta.explicacaoUsuario !== "string") return false;
  return true;
}