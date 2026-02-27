import {
  criarPerfilUsuario,
  gerarParametrosTreino,
  gerarPlanoTreino
} from "../engine/fitgen.engine.js";

import { agenteFitGen } from "../engine/fitgen.agent.js";
import {
  salvarSessao,
  obterHistorico,
  decidirProximaSemana
} from "../engine/fitgen.history.js";

import { consultarIA, validarRespostaIA } from "../engine/fitgen.ai.client.js";

export async function executarFitGen(dadosUsuario, feedbackSemanal = null) {
  const perfil = criarPerfilUsuario(dadosUsuario);
  const parametrosBase = gerarParametrosTreino(perfil);

  const respostaAgente = agenteFitGen({ perfil, parametrosBase });

  const historico = obterHistorico();
  const decisaoLocal = decidirProximaSemana(historico, feedbackSemanal);

  let parametrosFinais = structuredClone(respostaAgente.parametrosAjustados);
  aplicarDecisao(parametrosFinais, decisaoLocal);

  /* ===== IA COMO COPILOTO ===== */
  let explicacaoFinal = respostaAgente.explicacaoUsuario;

  try {
    const respostaIA = await consultarIA({
      perfil,
      parametrosAtuais: parametrosFinais,
      historicoResumo: historico.slice(-3),
      feedbackRecente: feedbackSemanal
    });

    if (validarRespostaIA(respostaIA)) {
      aplicarDecisao(parametrosFinais, respostaIA);
      explicacaoFinal = respostaIA.explicacaoUsuario;
    }
  } catch (e) {
    // fallback silencioso
  }

  const plano = gerarPlanoTreino(perfil, parametrosFinais);

  const resultado = {
    perfil,
    parametros: parametrosFinais,
    plano,
    explicacao: explicacaoFinal,
    timestamp: Date.now()
  };

  salvarSessao(resultado);
  return resultado;
}

function aplicarDecisao(parametros, decisao) {
  if (decisao.acao === "deload") {
    parametros.volume = "baixo";
    parametros.intensidade = "leve";
  }
  if (decisao.acao === "simplificar") {
    parametros.volume = "baixo";
  }
  if (decisao.acao === "progredir") {
    parametros.volume = "moderado";
  }
}