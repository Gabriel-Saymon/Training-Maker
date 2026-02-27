/* =====================================================
   FITGEN AGENT — AJUSTES CONTEXTUAIS
   ===================================================== */

export function agenteFitGen({ perfil, parametrosBase }) {
  const parametros = structuredClone(parametrosBase);
  const observacoes = [];

  // Inteligência do Agente: Ajuste de volume baseado na recuperação
  if (
    perfil.recuperacao.sonoHoras >= 7 &&
    perfil.recuperacao.estresse === "baixo" &&
    parametros.volume === "baixo"
  ) {
    parametros.volume = "moderado";
    observacoes.push("Boa recuperação detetada: volume ajustado para moderado.");
  }

  return {
    parametrosAjustados: parametros,
    observacoesTecnicas: observacoes,
    explicacaoUsuario:
      "Treino ajustado de acordo com a sua recuperação, rotina e nível de experiência."
  };
}