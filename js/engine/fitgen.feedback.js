/* =====================================================
   FITGEN FEEDBACK — ETAPA 5
   ===================================================== */

const FEEDBACK_KEY = "fitgen_feedback";

/* ---------- SALVAR FEEDBACK ---------- */
export function salvarFeedback(feedback) {
  const lista = obterFeedbacks();
  lista.push({
    ...feedback,
    timestamp: Date.now()
  });

  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(lista));
}

/* ---------- OBTER FEEDBACKS ---------- */
export function obterFeedbacks() {
  return JSON.parse(localStorage.getItem(FEEDBACK_KEY)) || [];
}

/* ---------- INTERPRETAR FEEDBACK ---------- */
export function interpretarFeedback(feedback) {
  // Casos críticos primeiro
  if (feedback.dores.length && !feedback.dores.includes("nenhuma")) {
    return {
      acao: "deload",
      motivo: "Relato de dores."
    };
  }

  if (feedback.adesao === "baixa") {
    return {
      acao: "simplificar",
      motivo: "Baixa adesão."
    };
  }

  if (
    feedback.dificuldade === "adequada" &&
    feedback.energia === "alta" &&
    feedback.adesao === "total"
  ) {
    return {
      acao: "progredir",
      motivo: "Boa resposta ao treino."
    };
  }

  return {
    acao: "manter",
    motivo: "Feedback neutro."
  };
}