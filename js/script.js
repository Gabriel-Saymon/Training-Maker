// --- LÓGICA DA APLICAÇÃO ---

// Selecionar os elementos do HTML com que vamos interagir
const telaInicial = document.getElementById('tela-inicial');
const telaQuestionario = document.getElementById('tela-questionario');
const telaResultado = document.getElementById('tela-resultado');
const btnIniciar = document.getElementById('btn-iniciar');
const btnRecomecar = document.getElementById('btn-recomecar');
const containerPerguntas = document.getElementById('container-perguntas');
const btnDicasGemini = document.getElementById('btn-dicas-gemini');
const spinner = document.getElementById('spinner');
const dicasContainer = document.getElementById('dicas-container');

// Variáveis para guardar os dados do utilizador e o estado do questionário
// ATUALIZADO: Adicionado 'genero'
let dadosUsuario = { nome: "", peso: 0, altura: 0, frequencia: 0, genero: "", objetivo: "" };
let perguntaAtual = 0;

// Função para calcular o IMC e retornar a classificação
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

// Função para montar e exibir a pergunta atual
const mostrarPergunta = () => {
    containerPerguntas.innerHTML = '';
    let conteudoPergunta = '';
    switch (perguntaAtual) {
        case 0: // Nome, Peso, Altura
            conteudoPergunta = `
                <div class="fade-in space-y-4">
                    <h3 class="text-2xl font-bold">Vamos começar! Quais são os seus dados?</h3>
                    <div>
                        <label for="nome" class="block mb-2 text-sm font-medium text-slate-300">O seu nome</label>
                        <input type="text" id="nome" class="bg-slate-800 border border-slate-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ex: João" required>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label for="peso" class="block mb-2 text-sm font-medium text-slate-300">Peso (kg)</label>
                            <input type="number" id="peso" class="bg-slate-800 border border-slate-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ex: 75" required>
                        </div>
                        <div>
                            <label for="altura" class="block mb-2 text-sm font-medium text-slate-300">Altura (cm)</label>
                            <input type="number" id="altura" class="bg-slate-800 border border-slate-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ex: 180" required>
                        </div>
                    </div>
                    <button onclick="proximaPergunta()" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg">Próximo</button>
                </div>`;
            break;
        case 1: // Frequência
            const { imc, classificacao } = calcularIMC(dadosUsuario.peso, dadosUsuario.altura);
            conteudoPergunta = `
                <div class="fade-in text-center space-y-4">
                    <h3 class="text-2xl font-bold">Olá, ${dadosUsuario.nome}!</h3>
                    <p class="text-lg">O seu IMC é de <strong class="text-blue-400">${imc}</strong>, o que é classificado como <strong class="text-blue-400">${classificacao}</strong>.</p>
                    <p class="text-xl font-semibold mt-6">Com que frequência pode treinar?</p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                        <button onclick="selecionarOpcao('frequencia', 2)" class="bg-slate-800 hover:bg-slate-700 border-2 border-slate-700 hover:border-blue-500 p-6 rounded-lg transition-all duration-300">2 vezes/semana</button>
                        <button onclick="selecionarOpcao('frequencia', 3)" class="bg-slate-800 hover:bg-slate-700 border-2 border-slate-700 hover:border-blue-500 p-6 rounded-lg transition-all duration-300">3 vezes/semana</button>
                        <button onclick="selecionarOpcao('frequencia', 5)" class="bg-slate-800 hover:bg-slate-700 border-2 border-slate-700 hover:border-blue-500 p-6 rounded-lg transition-all duration-300">5 vezes/semana</button>
                    </div>
                </div>`;
            break;
        case 2: // NOVO PASSO: Género
            conteudoPergunta = `
                <div class="fade-in text-center space-y-4">
                     <p class="text-xl font-semibold">Para qual género é o treino?</p>
                     <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                        <button onclick="selecionarOpcao('genero', 'masculino')" class="bg-slate-800 hover:bg-slate-700 border-2 border-slate-700 hover:border-blue-500 p-6 rounded-lg transition-all duration-300">
                            <span class="text-lg font-bold">Masculino</span>
                        </button>
                        <button onclick="selecionarOpcao('genero', 'feminino')" class="bg-slate-800 hover:bg-slate-700 border-2 border-slate-700 hover:border-blue-500 p-6 rounded-lg transition-all duration-300">
                            <span class="text-lg font-bold">Feminino</span>
                        </button>
                    </div>
                </div>`;
            break;
        case 3: // Objetivo
            conteudoPergunta = `
                <div class="fade-in text-center space-y-4">
                     <p class="text-xl font-semibold">Ótimo! E qual é o seu principal objetivo?</p>
                     <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                        <button onclick="selecionarOpcao('objetivo', 'hipertrofia')" class="bg-slate-800 hover:bg-slate-700 border-2 border-slate-700 hover:border-blue-500 p-6 rounded-lg transition-all duration-300">
                            <span class="text-lg font-bold">Hipertrofia</span>
                            <span class="block text-sm text-slate-400">Ganho de massa muscular</span>
                        </button>
                        <button onclick="selecionarOpcao('objetivo', 'queima_gordura')" class="bg-slate-800 hover:bg-slate-700 border-2 border-slate-700 hover:border-blue-500 p-6 rounded-lg transition-all duration-300">
                            <span class="text-lg font-bold">Emagrecimento</span>
                            <span class="block text-sm text-slate-400">Queima de gordura e definição</span>
                        </button>
                    </div>
                </div>`;
            break;
    }
    containerPerguntas.innerHTML = conteudoPergunta;
};

// Função para validar e avançar para a próxima pergunta
window.proximaPergunta = () => {
    if (perguntaAtual === 0) {
        const nome = document.getElementById('nome').value;
        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value);

        if (!nome || !peso || !altura || peso <= 0 || altura <= 0) {
            alert("Por favor, preencha todos os campos com valores válidos.");
            return;
        }
        dadosUsuario.nome = nome;
        dadosUsuario.peso = peso;
        dadosUsuario.altura = altura;
    }
    perguntaAtual++;
    mostrarPergunta();
};

// Função chamada quando o utilizador clica num botão de opção
window.selecionarOpcao = (chave, valor) => {
    dadosUsuario[chave] = valor;
    perguntaAtual++;
    // ATUALIZADO: Agora o final é na pergunta 4 (índice 3)
    if (perguntaAtual > 3) {
        gerarTreino();
    } else {
        mostrarPergunta();
    }
};

// Função para gerar e exibir o plano de treino final
const gerarTreino = () => {
    // ATUALIZADO: Inclui 'genero' para selecionar o treino
    const { nome, objetivo, frequencia, genero, peso, altura } = dadosUsuario;
    // A variável `treinos` vem do arquivo `treinos.js`
    const plano = treinos[genero][objetivo][frequencia];
    
    document.getElementById('nome-usuario').textContent = nome;
    const { imc, classificacao } = calcularIMC(peso, altura);
    document.getElementById('info-imc').innerHTML = `O seu IMC é <strong>${imc}</strong> (${classificacao}).`;
    const containerPlano = document.getElementById('plano-de-treino');
    containerPlano.innerHTML = '';

    plano.forEach(treinoDoDia => {
        const exerciciosHtml = treinoDoDia.exercicios.map(ex => `
            <li class="flex justify-between items-center py-3 border-b border-slate-700">
                <div>
                    <p class="font-semibold">${ex.nome}</p>
                    <p class="text-sm text-slate-400">${ex.series} | Descanso: ${ex.descanso}</p>
                </div>
                <a href="${ex.video}" target="_blank" class="text-blue-400 hover:text-blue-300 transition-colors">
                    <svg xmlns="http://www.w.3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.66 5.2a1 1 0 0 0-1.79.89V18a1 1 0 0 0 1.58.81l7.43-6a1 1 0 0 0 0-1.62Z"></path></svg>
                </a>
            </li>`).join('');

        const cardDia = `
            <div class="bg-slate-800/80 p-6 rounded-lg shadow-lg fade-in">
                <h3 class="text-xl font-bold text-blue-400 mb-4">${treinoDoDia.dia}</h3>
                <ul class="space-y-2">
                    ${exerciciosHtml}
                </ul>
            </div>`;
        containerPlano.innerHTML += cardDia;
    });
    telaQuestionario.classList.add('hidden');
    telaResultado.classList.remove('hidden');
};

// --- LÓGICA DA API GEMINI ---

function formatarRespostaGemini(text) {
     return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>');
}

async function getGeminiTips() {
    spinner.classList.remove('hidden');
    dicasContainer.classList.add('hidden');
    btnDicasGemini.disabled = true;

    const apiKey = "";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
    const { imc, classificacao } = calcularIMC(dadosUsuario.peso, dadosUsuario.altura);
    const objetivoTraduzido = dadosUsuario.objetivo === 'hipertrofia' ? 'ganho de massa muscular (hipertrofia)' : 'emagrecimento e queima de gordura';
    
    // ATUALIZADO: O prompt agora inclui o género do utilizador.
    const prompt = `Aja como um personal trainer e nutricionista motivacional. Um utilizador do género ${dadosUsuario.genero}, com o objetivo de ${objetivoTraduzido}, que treina ${dadosUsuario.frequencia} vezes por semana e tem um IMC de ${imc} (${classificacao}), pediu dicas. Forneça 3 dicas curtas, práticas e fáceis de seguir para maximizar os seus resultados. Use uma linguagem encorajadora e amigável. Formate a resposta com títulos para cada dica usando **negrito**. Responda em português.`;
    
    const payload = { contents: [{ parts: [{ text: prompt }] }], };
    
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        if (!response.ok) { throw new Error(`Erro na API: ${response.statusText}`); }
        const result = await response.json();
        const candidate = result.candidates?.[0];

        if (candidate && candidate.content?.parts?.[0]?.text) {
            const textoGerado = candidate.content.parts[0].text;
            dicasContainer.innerHTML = formatarRespostaGemini(textoGerado);
            dicasContainer.classList.remove('hidden');
        } else {
            dicasContainer.innerHTML = "<p>Não foi possível obter as dicas no momento. Tente novamente mais tarde.</p>";
            dicasContainer.classList.remove('hidden');
        }
    } catch (error) {
        console.error("Erro ao chamar a Gemini API:", error);
        dicasContainer.innerHTML = `<p>Ocorreu um erro ao buscar as suas dicas. Verifique a sua conexão ou tente novamente. (${error.message})</p>`;
        dicasContainer.classList.remove('hidden');
    } finally {
        spinner.classList.add('hidden');
        btnDicasGemini.disabled = false;
    }
}

// --- EVENT LISTENERS ---
// "Ouvintes" que reagem aos cliques do utilizador

btnDicasGemini.addEventListener('click', getGeminiTips);

btnIniciar.addEventListener('click', () => {
    telaInicial.classList.add('hidden');
    telaQuestionario.classList.remove('hidden');
    mostrarPergunta();
});

btnRecomecar.addEventListener('click', () => {
    // ATUALIZADO: Limpa a variável 'genero' ao recomeçar
    dadosUsuario = { nome: "", peso: 0, altura: 0, frequencia: 0, genero: "", objetivo: "" };
    perguntaAtual = 0;
    dicasContainer.classList.add('hidden');
    dicasContainer.innerHTML = '';
    telaResultado.classList.add('hidden');
    telaInicial.classList.remove('hidden');
    telaQuestionario.classList.add('hidden');
});