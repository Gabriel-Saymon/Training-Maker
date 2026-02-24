const telaInicial = document.getElementById('tela-inicial');
const telaQuestionario = document.getElementById('tela-questionario');
const telaResultado = document.getElementById('tela-resultado');
const btnIniciar = document.getElementById('btn-iniciar');
const btnRecomecar = document.getElementById('btn-recomecar');
const btnImprimir = document.getElementById('btn-imprimir');
const containerPerguntas = document.getElementById('container-perguntas');
const barraProgresso = document.getElementById('barra-progresso');
const mainContainer = document.getElementById('main-container');

const bg1 = document.getElementById('bg-1');
const bg2 = document.getElementById('bg-2');

let dadosUsuario = { nome: "", peso: 0, altura: 0, genero: "", objetivo: "", experiencia: "", frequencia: 0 };
let perguntaAtual = 0;
const totalPerguntas = 5;

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

const atualizarProgresso = () => {
    const porcentagem = (perguntaAtual / totalPerguntas) * 100;
    barraProgresso.style.width = `${porcentagem}%`;
};

const mostrarPergunta = () => {
    atualizarProgresso();
    containerPerguntas.style.opacity = '0';
    
    setTimeout(() => {
        let conteudoPergunta = '';
        // As larguras foram expandidas (max-w-4xl) e os botões agora têm o estilo "Glassmorphism" invisível
        switch (perguntaAtual) {
            case 0:
                conteudoPergunta = `
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
                conteudoPergunta = `
                    <div class="fade-in text-center space-y-12 w-full">
                         <p class="text-4xl font-semibold text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">Para qual género é o treino?</p>
                         <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 max-w-4xl mx-auto">
                            <button onclick="selecionarOpcao('genero', 'masculino')" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/40 p-12 rounded-[2rem] transition-all duration-300 shadow-2xl font-medium text-3xl text-white">Masculino</button>
                            <button onclick="selecionarOpcao('genero', 'feminino')" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/40 p-12 rounded-[2rem] transition-all duration-300 shadow-2xl font-medium text-3xl text-white">Feminino</button>
                        </div>
                    </div>`;
                break;
            case 2:
                conteudoPergunta = `
                    <div class="fade-in text-center space-y-12 w-full">
                         <p class="text-4xl font-semibold text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">Qual é o seu objetivo principal?</p>
                         <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 max-w-4xl mx-auto">
                            <button onclick="selecionarOpcao('objetivo', 'hipertrofia')" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/40 p-10 md:p-14 rounded-[2rem] transition-all duration-300 shadow-2xl flex flex-col items-center justify-center text-white">
                                <span class="font-semibold text-3xl">Hipertrofia</span>
                                <span class="text-lg text-texto-suave mt-4 font-light drop-shadow-md">Foco no ganho de massa</span>
                            </button>
                            <button onclick="selecionarOpcao('objetivo', 'queima_gordura')" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/40 p-10 md:p-14 rounded-[2rem] transition-all duration-300 shadow-2xl flex flex-col items-center justify-center text-white">
                                <span class="font-semibold text-3xl">Emagrecimento</span>
                                <span class="text-lg text-texto-suave mt-4 font-light drop-shadow-md">Queimar gordura e definir</span>
                            </button>
                        </div>
                    </div>`;
                break;
            case 3:
                conteudoPergunta = `
                    <div class="fade-in text-center space-y-12 w-full">
                         <p class="text-4xl font-semibold text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">Qual o seu nível de experiência?</p>
                         <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 max-w-4xl mx-auto">
                            <button onclick="selecionarOpcao('experiencia', 'iniciante')" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/40 p-10 md:p-14 rounded-[2rem] transition-all duration-300 shadow-2xl text-white">
                                <span class="font-semibold text-3xl">Iniciante</span><br><span class="block text-lg text-texto-suave font-light mt-4 drop-shadow-md">Começando agora ou a regressar</span>
                            </button>
                            <button onclick="selecionarOpcao('experiencia', 'avancado')" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/40 p-10 md:p-14 rounded-[2rem] transition-all duration-300 shadow-2xl text-white">
                                <span class="font-semibold text-3xl">Avançado</span><br><span class="block text-lg text-texto-suave font-light mt-4 drop-shadow-md">Treino pesado e com constância</span>
                            </button>
                        </div>
                    </div>`;
                break;
            case 4:
                conteudoPergunta = `
                    <div class="fade-in text-center space-y-12 w-full">
                        <p class="text-4xl font-semibold text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">Quantos dias na academia?</p>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 max-w-4xl mx-auto">
                            <button onclick="selecionarOpcao('frequencia', 2)" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/40 p-10 rounded-[2rem] transition-all duration-300 shadow-2xl font-medium text-4xl text-white">2x</button>
                            <button onclick="selecionarOpcao('frequencia', 3)" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/40 p-10 rounded-[2rem] transition-all duration-300 shadow-2xl font-medium text-4xl text-white">3x</button>
                            <button onclick="selecionarOpcao('frequencia', 5)" class="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/40 p-10 rounded-[2rem] transition-all duration-300 shadow-2xl font-medium text-4xl text-white">5x</button>
                        </div>
                    </div>`;
                break;
        }
        
        containerPerguntas.innerHTML = conteudoPergunta;
        containerPerguntas.style.opacity = '1';
    }, 300);
};

window.proximaPergunta = () => {
    if (perguntaAtual === 0) {
        const nome = document.getElementById('nome').value;
        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value);

        if (!nome || !peso || !altura) return alert("Preencha todos os campos para continuar!");
        dadosUsuario.nome = nome;
        dadosUsuario.peso = peso;
        dadosUsuario.altura = altura;
    }
    perguntaAtual++;
    mostrarPergunta();
};

window.selecionarOpcao = (chave, valor) => {
    dadosUsuario[chave] = valor;
    perguntaAtual++;
    if (perguntaAtual >= totalPerguntas) {
        gerarTreino();
    } else {
        mostrarPergunta();
    }
};

const gerarTreino = () => {
    const { nome, objetivo, experiencia, frequencia, genero, peso, altura } = dadosUsuario;
    const plano = treinos[genero]?.[objetivo]?.[experiencia]?.[frequencia];
    
    document.getElementById('nome-usuario').textContent = nome;
    const { imc, classificacao } = calcularIMC(peso, altura);
    document.getElementById('info-imc').innerHTML = `IMC: <strong>${imc}</strong> <span class="text-texto-suave mx-2">|</span> ${classificacao}`;
    
    const containerPlano = document.getElementById('plano-de-treino');
    containerPlano.innerHTML = '';

    if(!plano) {
        containerPlano.innerHTML = '<div class="flex h-full items-center justify-center"><p class="text-red-400 font-medium text-center bg-black/60 backdrop-blur-md p-8 rounded-3xl border border-red-900/50 text-lg max-w-xl shadow-2xl">Treino não encontrado para esta combinação. Verifique se atualizou o ficheiro treinos.js.</p></div>';
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

        plano.forEach(treinoDoDia => {
            const exerciciosHtml = treinoDoDia.exercicios.map(ex => `
                <li class="flex justify-between items-center py-5 border-b border-white/10 last:border-0 pointer-events-none">
                    <div class="pr-3">
                        <p class="font-semibold text-white text-lg pointer-events-auto leading-tight drop-shadow-md">${ex.nome}</p>
                        <p class="text-sm text-texto-suave mt-1 font-light pointer-events-auto tracking-wide drop-shadow-sm">${ex.series} • Desc: ${ex.descanso}</p>
                    </div>
                    ${ex.video !== "#" ? `<a href="${ex.video}" target="_blank" class="nao-imprimir shrink-0 bg-black/40 hover:bg-white hover:text-black text-white p-3 rounded-xl border border-white/20 transition-all pointer-events-auto hover:scale-105 shadow-lg" title="Ver execução">▶️</a>` : ''}
                </li>`).join('');

            // CARTÃO DE TREINO INDIVIDUAL COM FUNDO FOSCO
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
            btnNext.addEventListener('click', () => {
                carrossel.scrollBy({ left: carrossel.clientWidth * 0.5, behavior: 'smooth' });
            });
            btnPrev.addEventListener('click', () => {
                carrossel.scrollBy({ left: -(carrossel.clientWidth * 0.5), behavior: 'smooth' });
            });
        }
    }

    telaQuestionario.classList.add('hidden');
    telaResultado.classList.remove('hidden');
    telaResultado.classList.add('flex');
};

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

btnImprimir.addEventListener('click', () => { window.print(); });
btnRecomecar.addEventListener('click', () => { location.reload(); });