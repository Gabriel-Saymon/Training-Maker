/* =====================================================
   FITGEN ENGINE — BASE ESTÁVEL
   ===================================================== */

/* ---------- UTIL ---------- */
function calcularIMC(peso, alturaCm) {
  if (!peso || !alturaCm || alturaCm <= 0) return null;
  const h = alturaCm / 100;
  return Number((peso / (h * h)).toFixed(2));
}

/* ---------- PERFIL ---------- */
export function criarPerfilUsuario(dados = {}) {
  return {
    fisico: {
      peso: dados.peso ?? null,
      altura: dados.altura ?? null,
      imc: calcularIMC(dados.peso, dados.altura),
      experiencia: dados.experiencia ?? "iniciante"
    },
    recuperacao: {
      sonoHoras: dados.sonoHoras ?? 7,
      estresse: dados.estresse ?? "medio"
    },
    contexto: {
      // NOVO: Guarda os dias exatos e calcula a frequência automaticamente
      diasDisponiveis: dados.diasDisponiveis || ["Segunda", "Quarta", "Sexta"],
      frequenciaSemanal: dados.diasDisponiveis ? dados.diasDisponiveis.length : 3,
      tempoPorTreino: dados.tempoPorTreino ?? 45
    },
    limitacoes: {
      lesoes: Array.isArray(dados.lesoes) ? dados.lesoes : []
    },
    objetivo: {
      principal: dados.objetivo ?? "saude"
    }
  };
}

/* ---------- PARÂMETROS ---------- */
function criarParametrosBase(perfil) {
  return {
    divisao: "fullbody",
    volume: "moderado",
    intensidade: "moderada",
    duracao: perfil.contexto.tempoPorTreino,
    restricoes: [],
    observacoes: []
  };
}

/* ---------- REGRAS ---------- */
function aplicarRegras(p, perfil) {
  if (perfil.recuperacao.sonoHoras <= 5) {
    p.volume = "baixo"; p.intensidade = "leve";
    p.observacoes.push("Sono insuficiente: volume reduzido.");
  }
  if (perfil.recuperacao.estresse === "alto") {
    p.volume = "baixo"; p.observacoes.push("Estresse alto: treino conservador.");
  }

  if (perfil.limitacoes.lesoes.includes("joelho")) p.restricoes.push("impacto", "joelho_critico");
  if (perfil.limitacoes.lesoes.includes("ombro")) p.restricoes.push("acima_cabeca", "ombro_critico");
  if (perfil.limitacoes.lesoes.includes("costas")) p.restricoes.push("carga_axial");

  if (perfil.fisico.experiencia === "iniciante") p.intensidade = "leve";
  
  // NOVO: Divisão Inteligente (com Upper/Lower explícito)
  const freq = perfil.contexto.frequenciaSemanal;
  if (freq <= 2) {
      p.divisao = "AB"; // Fullbody / Upper-Lower simples
  } else if (freq === 3) {
      p.divisao = "ABC";
  } else if (freq === 4) {
      p.divisao = "UPPER_LOWER"; // O clássico 4x na semana
  } else {
      p.divisao = "ABCDE"; // 5 ou mais dias
  }
}

/* ---------- API ENGINE ---------- */
export function gerarParametrosTreino(perfil) {
  const p = criarParametrosBase(perfil);
  aplicarRegras(p, perfil);
  return p;
}

/* ---------- BANCO DE EXERCÍCIOS (NÚCLEO SEGURO) ---------- */
/* ---------- BANCO DE EXERCÍCIOS EXPANDIDO ---------- */
export const bancoExercicios = [
  // PEITO
  { id: "supino_reto", nome: "Supino Reto com Barra", grupo: "peito", duracao: 6, tags: ["composto"] },
  { id: "supino_inclinado_halter", nome: "Supino Inclinado com Halteres", grupo: "peito", duracao: 6, tags: ["composto"] },
  { id: "crucifixo_maquina", nome: "Voador Peitoral (Peck Deck)", grupo: "peito", duracao: 4, tags: ["isolado"] },
  { id: "flexao_braco", nome: "Flexão de Braços", grupo: "peito", duracao: 5, tags: ["composto", "ombro_critico"] },
  { id: "cross_over", nome: "Cross Over na Polia", grupo: "peito", duracao: 5, tags: ["isolado"] },
  
  // COSTAS
  { id: "puxada_frente", nome: "Puxada Frontal na Polia", grupo: "costas", duracao: 6, tags: ["composto", "acima_cabeca"] },
  { id: "remada_curvada", nome: "Remada Curvada com Barra", grupo: "costas", duracao: 6, tags: ["composto", "carga_axial"] },
  { id: "remada_baixa", nome: "Remada Baixa no Triângulo", grupo: "costas", duracao: 5, tags: ["composto"] },
  { id: "remada_unilateral", nome: "Remada Unilateral (Serrote)", grupo: "costas", duracao: 5, tags: ["composto"] },
  { id: "pulldown", nome: "Pulldown com Corda", grupo: "costas", duracao: 4, tags: ["isolado"] },
  
  // PERNAS
  { id: "agachamento_livre", nome: "Agachamento Livre", grupo: "pernas", duracao: 7, tags: ["composto", "carga_axial", "joelho_critico"] },
  { id: "leg_press", nome: "Leg Press 45º", grupo: "pernas", duracao: 6, tags: ["composto", "joelho_critico"] },
  { id: "afundo", nome: "Afundo com Halteres", grupo: "pernas", duracao: 6, tags: ["composto", "joelho_critico"] },
  { id: "cadeira_extensora", nome: "Cadeira Extensora", grupo: "pernas", duracao: 5, tags: ["isolado"] },
  { id: "mesa_flexora", nome: "Mesa Flexora", grupo: "pernas", duracao: 5, tags: ["isolado"] },
  { id: "elevacao_pelvica", nome: "Elevação Pélvica", grupo: "pernas", duracao: 5, tags: ["composto"] },
  { id: "panturrilha_pe", nome: "Panturrilha em Pé", grupo: "pernas", duracao: 4, tags: ["isolado", "impacto"] },
  
  // OMBROS
  { id: "desenvolvimento_halter", nome: "Desenvolvimento com Halteres", grupo: "ombros", duracao: 6, tags: ["composto", "acima_cabeca", "ombro_critico"] },
  { id: "elevacao_lateral", nome: "Elevação Lateral", grupo: "ombros", duracao: 4, tags: ["isolado", "ombro_critico"] },
  { id: "crucifixo_invertido", nome: "Crucifixo Invertido na Máquina", grupo: "ombros", duracao: 4, tags: ["isolado"] },
  { id: "encolhimento", nome: "Encolhimento de Ombros", grupo: "ombros", duracao: 4, tags: ["isolado"] },
  
  // BRAÇOS
  { id: "rosca_direta", nome: "Rosca Direta na Polia", grupo: "bracos", duracao: 4, tags: ["isolado"] },
  { id: "rosca_martelo", nome: "Rosca Martelo com Halteres", grupo: "bracos", duracao: 4, tags: ["isolado"] },
  { id: "triceps_pulley", nome: "Tríceps Pulley", grupo: "bracos", duracao: 4, tags: ["isolado"] },
  { id: "triceps_corda", nome: "Tríceps Corda", grupo: "bracos", duracao: 4, tags: ["isolado"] },
  { id: "triceps_testa", nome: "Tríceps Testa", grupo: "bracos", duracao: 5, tags: ["isolado"] },
  
  // CORE E CARDIO
  { id: "prancha", nome: "Prancha Abdominal Isométrica", grupo: "core", duracao: 4, tags: ["isolado"] },
  { id: "abdominal_maquina", nome: "Abdominal na Máquina", grupo: "core", duracao: 4, tags: ["isolado"] },
  { id: "caminhada", nome: "Caminhada Acelerada", grupo: "cardio", duracao: 15, tags: ["cardio"] },
  { id: "corrida", nome: "Corrida na Esteira", grupo: "cardio", duracao: 20, tags: ["cardio", "impacto", "joelho_critico"] },
  { id: "bicicleta", nome: "Bicicleta Ergométrica", grupo: "cardio", duracao: 15, tags: ["cardio"] }
];

/* ---------- GERADOR DE TREINO ---------- */
export function gerarPlanoTreino(perfil, parametros) {
  const plano = [];
  
  const esquemas = {
      "AB": [
          { nome: "Upper (Superiores)", grupos: ["peito", "costas", "ombros", "bracos"] },
          { nome: "Lower (Inferiores e Core)", grupos: ["pernas", "core", "cardio"] }
      ],
      "UPPER_LOWER": [
          { nome: "A1 - Upper (Foco Força)", grupos: ["peito", "costas", "ombros", "bracos"] },
          { nome: "B1 - Lower (Foco Força)", grupos: ["pernas", "core"] },
          { nome: "A2 - Upper (Hipertrofia)", grupos: ["peito", "costas", "ombros", "bracos"] },
          { nome: "B2 - Lower (Hipertrofia)", grupos: ["pernas", "core", "cardio"] }
      ],
      "ABC": [
          { nome: "A - Peito, Ombro e Tríceps", grupos: ["peito", "ombros", "bracos"] },
          { nome: "B - Costas e Bíceps", grupos: ["costas", "bracos"] },
          { nome: "C - Pernas e Core", grupos: ["pernas", "core", "cardio"] }
      ],
      "ABCDE": [
          { nome: "A - Peito", grupos: ["peito", "core"] },
          { nome: "B - Costas", grupos: ["costas", "cardio"] },
          { nome: "C - Pernas", grupos: ["pernas"] },
          { nome: "D - Ombros", grupos: ["ombros", "core"] },
          { nome: "E - Braços (Bíceps e Tríceps)", grupos: ["bracos", "cardio"] }
      ]
  };

  const esquemaAtual = esquemas[parametros.divisao] || esquemas["ABC"];
  
  // NOVO: Em vez de um for(1 a 5), iteramos pelos dias EXATOS que o utilizador escolheu!
  perfil.contexto.diasDisponiveis.forEach((diaDaSemana, index) => {
    const diaEsquema = esquemaAtual[index % esquemaAtual.length];
    
    let tempoGasto = 0;
    const treinoDia = [];
    
    const exerciciosPermitidos = bancoExercicios.filter(ex => !ex.tags || !ex.tags.some(tag => parametros.restricoes.includes(tag)));
    const exerciciosDoDia = exerciciosPermitidos.filter(ex => diaEsquema.grupos.includes(ex.grupo));

    for (const ex of exerciciosDoDia) {
      if (tempoGasto + ex.duracao > parametros.duracao) continue;

      let seriesReps = parametros.volume === "baixo" ? "3x10-12" : "4x10-15";
      if (perfil.objetivo.principal === "hipertrofia") seriesReps = parametros.volume === "baixo" ? "3x8-10" : "4x8-12";
      else if (perfil.objetivo.principal === "emagrecimento") seriesReps = parametros.volume === "baixo" ? "3x12-15" : "4x15-20";

      if (ex.grupo === "cardio") seriesReps = `${ex.duracao} minutos`;
      if (ex.grupo === "core") seriesReps = "3x Até à falha";

      // --- NOVA INTELIGÊNCIA DE INTERVALO (A IA DECIDE) ---
      let tempoDescanso = "60s"; // Padrão
      
      if (perfil.objetivo.principal === "hipertrofia") {
          // Compostos (ex: Agachamento) exigem mais descanso que isolados (ex: Rosca)
          tempoDescanso = (ex.tags && ex.tags.includes("composto")) ? "90s" : "60s";
      } else if (perfil.objetivo.principal === "emagrecimento") {
          // Emagrecimento exige treino mais denso (metabólico)
          tempoDescanso = "45s";
      }

      // Exceções absolutas para Cardio e Core
      if (ex.grupo === "core") tempoDescanso = "30s";
      if (ex.grupo === "cardio") tempoDescanso = "-";
      // ----------------------------------------------------

      treinoDia.push({
        id: ex.id, 
        nome: ex.nome, 
        series: seriesReps,
        descanso: tempoDescanso // <--- Agora usa o cálculo inteligente!
      });

      tempoGasto += ex.duracao;
    }

    if (treinoDia.length === 0) {
        treinoDia.push({ id: "caminhada", nome: "Caminhada Leve", series: "30 min", descanso: "-" });
    }

    // O NOME DO CARTÃO AGORA FICA: "Segunda-feira - Upper (Superiores)"
    plano.push({ dia: `${diaDaSemana} — ${diaEsquema.nome}`, exercicios: treinoDia });
  });

  return plano;
}