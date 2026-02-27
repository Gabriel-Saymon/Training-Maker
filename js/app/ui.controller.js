import { executarFitGen } from "./app.controller.js";
import { obterHistorico } from "../engine/fitgen.history.js"; // IMPORTAÇÃO DO HISTÓRICO

// Variáveis de Estado Base
let dadosUsuario = { 
    nome: "", peso: 0, altura: 0, genero: "", 
    objetivo: "", experiencia: "", 
    diasDisponiveis: [], 
    tempoPorTreino: 45, sonoHoras: 7, estresse: "medio", lesoes: [], dorAtiva: false 
};
let perguntaAtual = 0;
const totalPerguntas = 8; 

// NOVO: Variáveis de Feedback
let feedbackAtual = 0;
const totalPerguntasFeedback = 4;
let dadosFeedback = { adesao: "", dificuldade: "", energia: "", dores: [] };

// --- INICIALIZAÇÃO DA UI ---
export function iniciarApp() {
    const btnIniciar = document.getElementById('btn-iniciar');
    const btnFeedback = document.getElementById('btn-feedback');
    const telaInicial = document.getElementById('tela-inicial');
    const bg1 = document.getElementById('bg-1');
    const bg2 = document.getElementById('bg-2');
    const mainContainer = document.getElementById('main-container');
    const telaQuestionario = document.getElementById('tela-questionario');
    const telaFeedbackUI = document.getElementById('tela-feedback');

    // Fluxo 1: Novo Treino
    btnIniciar.addEventListener('click', () => { 
        telaInicial.classList.add('deslizar-esquerda');
        telaInicial.style.opacity = '0';
        bg1.classList.add('deslizar-esquerda');
        bg2.classList.add('deslizar-centro');

        mainContainer.classList.remove('hidden');
        telaQuestionario.classList.remove('hidden'); 
        telaQuestionario.classList.add('flex');
        mostrarPergunta();

        setTimeout(() => {
            mainContainer.classList.add('ativo');
            mainContainer.classList.add('modo-card');
        }, 50);
    });

    // Fluxo 2: Avaliar Semana (Feedback)
    btnFeedback.addEventListener('click', () => {
        const historico = obterHistorico();
        if (!historico || historico.length === 0) {
            alert("Não encontramos nenhum treino no seu histórico! Comece por montar o seu primeiro treino.");
            return;
        }
        
        // Carrega as características físicas da semana passada!
        const ultimoPerfil = historico[historico.length - 1].perfil;
        dadosUsuario = {
            nome: "Atleta", // Podemos pedir o nome de novo no futuro, por agora usamos Atleta
            peso: ultimoPerfil.fisico.peso,
            altura: ultimoPerfil.fisico.altura,
            genero: "masculino", 
            objetivo: ultimoPerfil.objetivo.principal,
            experiencia: ultimoPerfil.fisico.experiencia,
            diasDisponiveis: ultimoPerfil.contexto.diasDisponiveis,
            tempoPorTreino: ultimoPerfil.contexto.tempoPorTreino,
            sonoHoras: ultimoPerfil.recuperacao.sonoHoras,
            estresse: ultimoPerfil.recuperacao.estresse,
            lesoes: ultimoPerfil.limitacoes.lesoes,
            dorAtiva: false
        };

        telaInicial.classList.add('deslizar-esquerda');
        telaInicial.style.opacity = '0';
        bg1.classList.add('deslizar-esquerda');
        bg2.classList.add('deslizar-centro');

        mainContainer.classList.remove('hidden');
        telaFeedbackUI.classList.remove('hidden'); 
        telaFeedbackUI.classList.add('flex');
        mostrarPerguntaFeedback();

        setTimeout(() => {
            mainContainer.classList.add('ativo');
            mainContainer.classList.add('modo-card');
        }, 50);
    });

    document.getElementById('btn-imprimir').addEventListener('click', () => { window.print(); });
    document.getElementById('btn-recomecar').addEventListener('click', () => { location.reload(); });
}

// --- FUNÇÕES AUXILIARES ---
const calcularIMC = (peso, alturaCm) => {
    if (alturaCm === 0) return { imc: 0, classificacao: 'Inválida' };
    const alturaM = alturaCm / 100;
    const imc = (peso / (alturaM * alturaM)).toFixed(2);
    let classificacao = '';
    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc < 24.9) classificacao = 'Peso normal';
    else if (imc < 29.9) classificacao = 'Excesso de peso';
    else if (imc < 34.9) classificacao = 'Obesidade grau I';
    else if (imc < 39.9) classificacao = 'Obesidade grau II';
    else classificacao = 'Obesidade grau III';
    return { imc, classificacao };
};

// ==========================================
// WIZARD 1: CRIAR NOVO TREINO
// ==========================================
function mostrarPergunta() {
    const porcentagem = (perguntaAtual / totalPerguntas) * 100;
    document.getElementById('barra-progresso').style.width = `${porcentagem}%`;
    const container = document.getElementById('container-perguntas');
    container.style.opacity = '0';
    
    setTimeout(() => {
        let conteudo = '';
        switch (perguntaAtual) {
            case 0:
                conteudo = `
                    <div class="fade-in space-y-8 w-full max-w-4xl mx-auto">
                        <h3 class="text-4xl font-semibold text-center text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">Quais são os seus dados?</h3>
                        <div class="space-y-6">
                            <div>
                                <label class="block mb-3 text-lg font-medium text-texto-suave drop-shadow-md">Seu Nome</label>
                                <input type="text" id="nome" class="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl focus:ring-2 focus:ring-white focus:border-transparent block w-full p-6 text-xl transition-all font-medium text-white placeholder-texto-suave/50 shadow-inner" placeholder="Ex: Gabriel" required>
                            </div>
                            <div class="grid grid-cols-2 gap-6">
                                <div>
                                    <label class="block mb-3 text-lg font-medium text-texto-suave drop-shadow-md">Peso (kg)</label>
                                    <input type="number" id="peso" class="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl focus:ring-2 focus:ring-white focus:border-transparent block w-full p-6 text-xl transition-all font-medium text-white placeholder-texto-suave/50 shadow-inner" placeholder="Ex: 75" required>
                                </div>
                                <div>
                                    <label class="block mb-3 text-lg font-medium text-texto-suave drop-shadow-md">Altura (cm)</label>
                                    <input type="number" id="altura" class="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl focus:ring-2 focus:ring-white focus:border-transparent block w-full p-6 text-xl transition-all font-medium text-white placeholder-texto-suave/50 shadow-inner" placeholder="Ex: 180" required>
                                </div>
                            </div>
                        </div>
                        <button onclick="proximaPergunta()" class="mt-10 w-full bg-white hover:bg-gray-200 text-black font-bold py-5 px-8 text-xl rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all transform hover:-translate-y-1">Próximo Passo</button>
                    </div>`;
                break;
            case 1:
                conteudo = `
                    <div class="fade-in text-center space-y-12 w-full">
                         <p class="text-4xl font-semibold text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">Para qual género é o treino?</p>
                         <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 max-w-4xl mx-auto">
                            <button onclick="selecionarOpcao('genero', 'masculino')" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/40 p-12 rounded-[2rem] transition-all duration-300 shadow-2xl font-medium text-3xl text-white">Masculino</button>
                            <button onclick="selecionarOpcao('genero', 'feminino')" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/40 p-12 rounded-[2rem] transition-all duration-300 shadow-2xl font-medium text-3xl text-white">Feminino</button>
                        </div>
                    </div>`;
                break;
            case 2:
                conteudo = `
                    <div class="fade-in text-center space-y-12 w-full">
                         <p class="text-4xl font-semibold text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">Qual é o seu objetivo principal?</p>
                         <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-4 max-w-5xl mx-auto">
                            <button onclick="selecionarOpcao('objetivo', 'hipertrofia')" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 p-10 rounded-[2rem] transition-all duration-300 shadow-2xl flex flex-col items-center justify-center text-white">
                                <span class="font-semibold text-2xl">Hipertrofia</span>
                            </button>
                            <button onclick="selecionarOpcao('objetivo', 'queima_gordura')" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 p-10 rounded-[2rem] transition-all duration-300 shadow-2xl flex flex-col items-center justify-center text-white">
                                <span class="font-semibold text-2xl">Emagrecimento</span>
                            </button>
                            <button onclick="selecionarOpcao('objetivo', 'saude')" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 p-10 rounded-[2rem] transition-all duration-300 shadow-2xl flex flex-col items-center justify-center text-white">
                                <span class="font-semibold text-2xl">Saúde Geral</span>
                            </button>
                        </div>
                    </div>`;
                break;
            case 3:
                conteudo = `
                    <div class="fade-in text-center space-y-12 w-full">
                         <p class="text-4xl font-semibold text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">Qual o seu nível de experiência?</p>
                         <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 max-w-4xl mx-auto">
                            <button onclick="selecionarOpcao('experiencia', 'iniciante')" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 p-10 rounded-[2rem] transition-all duration-300 shadow-2xl text-white">
                                <span class="font-semibold text-3xl">Iniciante</span><br><span class="block text-lg text-texto-suave mt-4">Começando agora</span>
                            </button>
                            <button onclick="selecionarOpcao('experiencia', 'avancado')" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 p-10 rounded-[2rem] transition-all duration-300 shadow-2xl text-white">
                                <span class="font-semibold text-3xl">Avançado</span><br><span class="block text-lg text-texto-suave mt-4">Treino com constância</span>
                            </button>
                        </div>
                    </div>`;
                break;
            case 4:
                conteudo = `
                    <div class="fade-in text-center space-y-10 w-full">
                        <p class="text-4xl font-semibold text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">Quais dias da semana pode treinar?</p>
                        <p class="text-lg text-texto-suave">Selecione os seus dias disponíveis</p>
                        
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-left pt-2">
                            ${['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'].map(dia => `
                                <label class="flex items-center space-x-3 bg-black/40 backdrop-blur-md border border-white/10 p-5 rounded-2xl cursor-pointer hover:bg-white/10 transition-colors">
                                    <input type="checkbox" name="diasTreino" value="${dia}" class="w-6 h-6 rounded bg-black/50 border-white/30 text-blue-500 focus:ring-white">
                                    <span class="text-xl font-medium text-white">${dia}</span>
                                </label>
                            `).join('')}
                        </div>
                        
                        <button onclick="salvarDiasEAvancar()" class="mt-8 w-full max-w-md mx-auto block bg-white hover:bg-gray-200 text-black font-bold py-5 px-8 text-xl rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all transform hover:-translate-y-1">Confirmar Dias</button>
                    </div>`;
                break;
            case 5:
                conteudo = `
                    <div class="fade-in text-center space-y-12 w-full">
                        <p class="text-4xl font-semibold text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">Quanto tempo tem por treino?</p>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 max-w-5xl mx-auto">
                            <button onclick="selecionarOpcao('tempoPorTreino', 20)" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 p-8 rounded-[2rem] transition-all duration-300 shadow-2xl flex flex-col items-center justify-center text-white hover:border-white/40 transform hover:scale-105">
                                <span class="font-bold text-4xl">20</span>
                                <span class="text-sm font-light text-texto-suave mt-2 uppercase tracking-widest">Minutos</span>
                                <span class="text-xs text-blue-400 mt-2">Express</span>
                            </button>
                            <button onclick="selecionarOpcao('tempoPorTreino', 45)" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 p-8 rounded-[2rem] transition-all duration-300 shadow-2xl flex flex-col items-center justify-center text-white hover:border-white/40 transform hover:scale-105">
                                <span class="font-bold text-4xl">45</span>
                                <span class="text-sm font-light text-texto-suave mt-2 uppercase tracking-widest">Minutos</span>
                                <span class="text-xs text-green-400 mt-2">Padrão</span>
                            </button>
                            <button onclick="selecionarOpcao('tempoPorTreino', 60)" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 p-8 rounded-[2rem] transition-all duration-300 shadow-2xl flex flex-col items-center justify-center text-white hover:border-white/40 transform hover:scale-105">
                                <span class="font-bold text-4xl">60</span>
                                <span class="text-sm font-light text-texto-suave mt-2 uppercase tracking-widest">Minutos</span>
                                <span class="text-xs text-yellow-400 mt-2">Completo</span>
                            </button>
                            <button onclick="selecionarOpcao('tempoPorTreino', 90)" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 p-8 rounded-[2rem] transition-all duration-300 shadow-2xl flex flex-col items-center justify-center text-white hover:border-white/40 transform hover:scale-105">
                                <span class="font-bold text-4xl">90</span>
                                <span class="text-sm font-light text-texto-suave mt-2 uppercase tracking-widest">Minutos</span>
                                <span class="text-xs text-red-400 mt-2">Hardcore</span>
                            </button>
                        </div>
                    </div>`;
                break;
            case 6:
                conteudo = `
                    <div class="fade-in space-y-8 w-full max-w-3xl mx-auto">
                        <h3 class="text-4xl font-semibold text-center text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">Como está a sua rotina?</h3>
                        <div class="space-y-6">
                            <div>
                                <label class="block mb-3 text-lg font-medium text-texto-suave">Horas de sono por noite</label>
                                <select id="sono" class="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl focus:ring-2 focus:ring-white block w-full p-6 text-xl font-medium text-white appearance-none outline-none">
                                    <option value="5" class="text-black">Menos de 6 horas</option>
                                    <option value="7" class="text-black" selected>6 a 8 horas (Ideal)</option>
                                    <option value="9" class="text-black">Mais de 8 horas</option>
                                </select>
                            </div>
                            <div>
                                <label class="block mb-3 text-lg font-medium text-texto-suave">Nível de estresse diário</label>
                                <select id="estresse" class="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl focus:ring-2 focus:ring-white block w-full p-6 text-xl font-medium text-white appearance-none outline-none">
                                    <option value="baixo" class="text-black">Baixo / Tranquilo</option>
                                    <option value="medio" class="text-black" selected>Médio / Normal</option>
                                    <option value="alto" class="text-black">Alto / Muito corrido</option>
                                </select>
                            </div>
                        </div>
                        <button onclick="salvarRotinaEAvancar()" class="mt-10 w-full bg-white hover:bg-gray-200 text-black font-bold py-5 px-8 text-xl rounded-2xl shadow-xl transition-all transform hover:-translate-y-1">Próximo Passo</button>
                    </div>`;
                break;
            case 7:
                conteudo = `
                    <div class="fade-in space-y-10 w-full max-w-4xl mx-auto text-center">
                        <h3 class="text-4xl font-semibold text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">Alguma dor ou lesão?</h3>
                        <p class="text-lg text-texto-suave">Selecione se possuir alguma (opcional)</p>
                        
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left pt-4">
                            <label class="flex items-center space-x-3 bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl cursor-pointer hover:bg-white/10 transition-colors">
                                <input type="checkbox" name="lesao" value="joelho" class="w-6 h-6 rounded bg-black/50 border-white/30 text-blue-500 focus:ring-white">
                                <span class="text-xl font-medium text-white">Joelho</span>
                            </label>
                            <label class="flex items-center space-x-3 bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl cursor-pointer hover:bg-white/10 transition-colors">
                                <input type="checkbox" name="lesao" value="costas" class="w-6 h-6 rounded bg-black/50 border-white/30 text-blue-500 focus:ring-white">
                                <span class="text-xl font-medium text-white">Costas</span>
                            </label>
                            <label class="flex items-center space-x-3 bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl cursor-pointer hover:bg-white/10 transition-colors">
                                <input type="checkbox" name="lesao" value="ombro" class="w-6 h-6 rounded bg-black/50 border-white/30 text-blue-500 focus:ring-white">
                                <span class="text-xl font-medium text-white">Ombro</span>
                            </label>
                            <label class="flex items-center space-x-3 bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl cursor-pointer hover:bg-white/10 transition-colors">
                                <input type="checkbox" name="dorAtiva" value="sim" class="w-6 h-6 rounded bg-black/50 border-white/30 text-blue-500 focus:ring-white">
                                <span class="text-xl font-medium text-white">Dor Ativa</span>
                            </label>
                        </div>
                        
                        <button onclick="finalizarEGerarTreino()" class="mt-12 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-6 px-8 text-2xl rounded-2xl shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all transform hover:-translate-y-1">✨ Gerar Meu Treino IA</button>
                    </div>`;
                break;
        }
        container.innerHTML = conteudo;
        container.style.opacity = '1';
    }, 300);
}

// Funções para os botões do Wizard 1
window.proximaPergunta = () => {
    if (perguntaAtual === 0) {
        const nome = document.getElementById('nome').value;
        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value);
        if (!nome || !peso || !altura) return alert("Preencha todos os campos para continuar!");
        dadosUsuario.nome = nome; dadosUsuario.peso = peso; dadosUsuario.altura = altura;
    }
    perguntaAtual++; mostrarPergunta();
};
window.salvarDiasEAvancar = () => {
    const checkboxes = document.querySelectorAll('input[name="diasTreino"]:checked');
    if (checkboxes.length === 0) return alert("Por favor, selecione pelo menos um dia!");
    dadosUsuario.diasDisponiveis = Array.from(checkboxes).map(cb => cb.value);
    perguntaAtual++; mostrarPergunta();
};
window.selecionarOpcao = (chave, valor) => { dadosUsuario[chave] = valor; perguntaAtual++; mostrarPergunta(); };
window.salvarRotinaEAvancar = () => {
    dadosUsuario.sonoHoras = Number(document.getElementById('sono').value);
    dadosUsuario.estresse = document.getElementById('estresse').value;
    perguntaAtual++; mostrarPergunta();
};
window.finalizarEGerarTreino = async () => {
    const checkboxesLesao = document.querySelectorAll('input[name="lesao"]:checked');
    dadosUsuario.lesoes = Array.from(checkboxesLesao).map(cb => cb.value);
    dadosUsuario.dorAtiva = !!document.querySelector('input[name="dorAtiva"]:checked');

    document.getElementById('container-perguntas').innerHTML = `
        <div class="text-center fade-in text-white space-y-6">
            <div class="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
            <h3 class="text-4xl font-bold text-white drop-shadow-lg">A analisar o seu perfil...</h3>
            <p class="text-xl text-texto-suave">O nosso Motor FitGen está a construir a rotina perfeita.</p>
        </div>`;
    
    // Geração SÓ com os dados (Sem feedback)
    const resultado = await executarFitGen(dadosUsuario);
    renderizarResultado(resultado);
};


// ==========================================
// WIZARD 2: FEEDBACK DA SEMANA
// ==========================================
function mostrarPerguntaFeedback() {
    const porcentagem = (feedbackAtual / totalPerguntasFeedback) * 100;
    document.getElementById('barra-progresso-feedback').style.width = `${porcentagem}%`;
    const container = document.getElementById('container-perguntas-feedback');
    container.style.opacity = '0';
    
    setTimeout(() => {
        let conteudo = '';
        switch (feedbackAtual) {
            case 0:
                conteudo = `
                    <div class="fade-in text-center space-y-12 w-full">
                        <p class="text-4xl font-semibold text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">Conseguiu treinar todos os dias previstos?</p>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 max-w-5xl mx-auto">
                            <button onclick="selecionarFeedback('adesao', 'total')" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 p-10 rounded-[2rem] transition-all shadow-2xl font-medium text-2xl text-white hover:border-blue-400">Sim, todos (Total)</button>
                            <button onclick="selecionarFeedback('adesao', 'parcial')" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 p-10 rounded-[2rem] transition-all shadow-2xl font-medium text-2xl text-white hover:border-blue-400">Faltei alguns (Parcial)</button>
                            <button onclick="selecionarFeedback('adesao', 'baixa')" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 p-10 rounded-[2rem] transition-all shadow-2xl font-medium text-2xl text-white hover:border-blue-400">Quase não treinei (Baixa)</button>
                        </div>
                    </div>`;
                break;
            case 1:
                conteudo = `
                    <div class="fade-in text-center space-y-12 w-full">
                        <p class="text-4xl font-semibold text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">Como sentiu o peso e cansaço no treino?</p>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 max-w-5xl mx-auto">
                            <button onclick="selecionarFeedback('dificuldade', 'facil')" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 p-10 rounded-[2rem] transition-all shadow-2xl font-medium text-2xl text-white hover:border-blue-400">Estava Fácil</button>
                            <button onclick="selecionarFeedback('dificuldade', 'adequada')" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 p-10 rounded-[2rem] transition-all shadow-2xl font-medium text-2xl text-white hover:border-blue-400">Ponto Ideal</button>
                            <button onclick="selecionarFeedback('dificuldade', 'dificil')" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 p-10 rounded-[2rem] transition-all shadow-2xl font-medium text-2xl text-white hover:border-blue-400">Muito Exaustivo</button>
                        </div>
                    </div>`;
                break;
            case 2:
                conteudo = `
                    <div class="fade-in text-center space-y-12 w-full">
                        <p class="text-4xl font-semibold text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">Como está a sua energia no dia a dia?</p>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 max-w-5xl mx-auto">
                            <button onclick="selecionarFeedback('energia', 'alta')" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 p-10 rounded-[2rem] transition-all shadow-2xl font-medium text-2xl text-white hover:border-blue-400">Alta ⚡</button>
                            <button onclick="selecionarFeedback('energia', 'normal')" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 p-10 rounded-[2rem] transition-all shadow-2xl font-medium text-2xl text-white hover:border-blue-400">Normal 🔋</button>
                            <button onclick="selecionarFeedback('energia', 'baixa')" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 p-10 rounded-[2rem] transition-all shadow-2xl font-medium text-2xl text-white hover:border-blue-400">Fadigado 🪫</button>
                        </div>
                    </div>`;
                break;
            case 3:
                // O motor no fitgen.feedback.js exige que a dor "nenhuma" esteja no array para não fazer deload
                conteudo = `
                    <div class="fade-in text-center space-y-12 w-full">
                        <p class="text-4xl font-semibold text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">Sentiu dores anormais ou lesões?</p>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 max-w-5xl mx-auto">
                            <button onclick="selecionarFeedback('dores', 'nenhuma')" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 p-10 rounded-[2rem] transition-all shadow-2xl font-medium text-2xl text-white hover:border-blue-400">Nenhuma (Normal)</button>
                            <button onclick="selecionarFeedback('dores', 'nenhuma')" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 p-10 rounded-[2rem] transition-all shadow-2xl font-medium text-2xl text-white hover:border-blue-400">Apenas Muscular</button>
                            <button onclick="selecionarFeedback('dores', 'articular')" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 p-10 rounded-[2rem] transition-all shadow-2xl font-medium text-2xl text-white border-red-500/50 hover:border-red-500">Dores Articulares</button>
                        </div>
                    </div>`;
                break;
        }
        container.innerHTML = conteudo;
        container.style.opacity = '1';
    }, 300);
}

window.selecionarFeedback = (chave, valor) => {
    if (chave === 'dores') {
        dadosFeedback.dores = [valor]; // O motor espera um array para as dores
    } else {
        dadosFeedback[chave] = valor;
    }
    feedbackAtual++;
    if (feedbackAtual >= totalPerguntasFeedback) {
        finalizarFeedback();
    } else {
        mostrarPerguntaFeedback();
    }
};

window.finalizarFeedback = async () => {
    document.getElementById('container-perguntas-feedback').innerHTML = `
        <div class="text-center fade-in text-white space-y-6">
            <div class="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            <h3 class="text-4xl font-bold text-white drop-shadow-lg">A adaptar o seu treino...</h3>
            <p class="text-xl text-texto-suave">A cruzar o seu histórico com a nova avaliação de performance.</p>
        </div>`;
    
    // GERA O TREINO ENVIANDO O PERFIL ANTIGO E O NOVO FEEDBACK!
    const resultado = await executarFitGen(dadosUsuario, dadosFeedback);
    renderizarResultado(resultado);
};

// ==========================================
// RENDERIZAÇÃO FINAL (CARROSSEL)
// ==========================================
function renderizarResultado(resultado) {
    document.getElementById('nome-usuario').textContent = dadosUsuario.nome || "Atleta";
    const { imc, classificacao } = calcularIMC(dadosUsuario.peso, dadosUsuario.altura);
    document.getElementById('info-imc').innerHTML = `IMC: <strong>${imc}</strong> <span class="text-texto-suave mx-2">|</span> ${classificacao}`;
    
    const elementoExplicacao = document.getElementById('explicacao-ia');
    if (elementoExplicacao) {
        elementoExplicacao.innerHTML = resultado.explicacao || "Treino reajustado com sucesso.";
    }

    const containerPlano = document.getElementById('plano-de-treino');
    containerPlano.innerHTML = '';
    document.getElementById('main-container').classList.add('modo-resultado');

    if(!resultado.plano || resultado.plano.length === 0) {
        containerPlano.innerHTML = '<div class="flex h-full items-center justify-center"><p class="text-red-400 font-medium text-center bg-black/60 backdrop-blur-md p-8 rounded-3xl border border-red-900/50 text-xl shadow-2xl">Não foi possível gerar um treino com estas restrições.</p></div>';
    } else {
        let htmlTreinos = `
            <div class="flex items-center justify-center gap-3 mb-4 text-white text-sm font-medium nao-imprimir fade-in flex-shrink-0 drop-shadow-md">
                <span class="tracking-wide">Deslize para ver os outros dias</span>
            </div>
            <div class="relative group w-full fade-in h-full flex items-center">
                <button id="btn-prev" class="nao-imprimir absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 md:-translate-x-12 bg-black/60 backdrop-blur-sm text-white p-5 rounded-full shadow-2xl border border-white/20 z-20 hidden md:flex items-center justify-center hover:bg-white hover:text-black transition-all transform hover:scale-110">
                    <svg xmlns="http://www.w.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <div id="carrossel-treinos" class="flex overflow-x-auto snap-x snap-mandatory gap-8 px-2 hide-scrollbar w-full scroll-smooth h-[500px] items-stretch py-4">
        `;

        resultado.plano.forEach(treinoDoDia => {
            const exerciciosHtml = treinoDoDia.exercicios.map(ex => {
                const searchLink = `https://www.youtube.com/results?search_query=${encodeURIComponent(ex.nome + ' exercicio musculação')}`;
                
                return `
                <li class="flex justify-between items-center py-5 border-b border-white/10 last:border-0 pointer-events-none">
                    <div class="pr-3">
                        <p class="font-semibold text-white text-lg pointer-events-auto leading-tight drop-shadow-md">${ex.nome}</p>
                        <p class="text-sm text-texto-suave mt-1 font-light pointer-events-auto tracking-wide">${ex.series} • Desc: ${ex.descanso}</p>
                    </div>
                    <a href="${searchLink}" target="_blank" class="nao-imprimir shrink-0 bg-black/40 hover:bg-white hover:text-black text-white p-3 rounded-xl border border-white/20 transition-all pointer-events-auto hover:scale-105 shadow-lg" title="Ver execução">▶️</a>
                </li>`
            }).join('');

            htmlTreinos += `
                <div class="snap-center shrink-0 w-[85%] sm:w-[60%] lg:w-[40%] bg-black/50 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl transition-all duration-300 flex flex-col h-full select-none relative overflow-hidden group hover:border-white/30">
                    <h3 class="text-2xl font-bold text-white mb-6 pb-4 border-b border-white/10 drop-shadow-lg">${treinoDoDia.dia}</h3>
                    <ul class="space-y-1 flex-1 overflow-y-auto hide-scrollbar pr-2">${exerciciosHtml}</ul>
                </div>`;
        });

        htmlTreinos += `
                </div>
                <button id="btn-next" class="nao-imprimir absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 md:translate-x-12 bg-black/60 backdrop-blur-sm text-white p-5 rounded-full shadow-2xl border border-white/20 z-20 hidden md:flex items-center justify-center hover:bg-white hover:text-black transition-all transform hover:scale-110">
                    <svg xmlns="http://www.w.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
            </div>
        `;

        containerPlano.innerHTML = htmlTreinos;

        const btnPrev = document.getElementById('btn-prev');
        const btnNext = document.getElementById('btn-next');
        const carrossel = document.getElementById('carrossel-treinos');

        if (btnPrev && btnNext && carrossel) {
            btnNext.addEventListener('click', () => { carrossel.scrollBy({ left: carrossel.clientWidth * 0.5, behavior: 'smooth' }); });
            btnPrev.addEventListener('click', () => { carrossel.scrollBy({ left: -(carrossel.clientWidth * 0.5), behavior: 'smooth' }); });
        }
    }

    // Esconde qualquer formulário que estivesse aberto e mostra o resultado
    document.getElementById('tela-questionario').classList.add('hidden');
    document.getElementById('tela-feedback').classList.add('hidden');
    document.getElementById('tela-resultado').classList.remove('hidden');
    document.getElementById('tela-resultado').classList.add('flex');
}