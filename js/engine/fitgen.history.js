/* =====================================================
   FITGEN HISTORY — ETAPA 4 + ETAPA 5
   Histórico + Progressão + Feedback
   ===================================================== */

import { interpretarFeedback } from "./fitgen.feedback.js";

const STORAGE_KEY = "fitgen_historico";

/* ---------- HISTÓRICO ---------- */

export function salvarSessao(resultadoFitGen) {
  const historico = obterHistorico();
  historico.push({
    timestamp: resultadoFitGen.timestamp,
    perfil: resultadoFitGen.perfil,
    parametros: resultadoFitGen.parametros,
    plano: resultadoFitGen.plano
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(historico));
}

export function obterHistorico() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

/* ---------- ANÁLISE BASE (SEM FEEDBACK) ---------- */

export function analisarProgresso(historico) {
  if (historico.length < 2) {
    return { acao: "manter", motivo: "Histórico insuficiente." };
  }

  const atual = historico[historico.length - 1];
  const anterior = historico[historico.length - 2];

  if (atual.parametros.volume === "baixo") {
    return {
      acao: "progredir_volume",
      motivo: "Boa adaptação inicial."
    };
  }

  return {
    acao: "manter",
    motivo: "Manutenção adequada."
  };
}

/* ---------- DECISÃO COM FEEDBACK (ETAPA 5) ---------- */

export function decidirProximaSemana(historico, feedback) {
  if (!feedback) {
    return analisarProgresso(historico);
  }

  return interpretarFeedback(feedback);
}