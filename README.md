# 🏋️‍♂️ FitGen - Personal Training AI

O **FitGen** é uma aplicação web interativa e de design premium que atua como um personal trainer virtual. Através de um questionário rápido e intuitivo, a aplicação calcula o IMC do utilizador e gera um plano de treino 100% personalizado com base no seu género, objetivo, nível de experiência e disponibilidade de dias na semana.

## ✨ Funcionalidades Principais

* **Interface Premium (Glassmorphism):** Design moderno com tema escuro, utilizando efeitos de vidro fosco (backdrop-blur), sombras suaves e botões translúcidos sobre imagens de fundo de alta qualidade.
* **Transições Cinemáticas:** Animações fluidas de deslizamento lateral entre a tela inicial e o questionário, criando uma experiência imersiva ("App-like").
* **Questionário Interativo:** Um formulário passo-a-passo (com barra de progresso animada) que recolhe dados físicos e preferências de treino.
* **Cálculo de IMC Automático:** Baseado no peso e altura informados, o sistema retorna o Índice de Massa Corporal e a sua classificação de saúde.
* **Carrossel de Treinos:** Os treinos gerados são exibidos em um carrossel horizontal elegante, com snap-scrolling e botões de navegação lateral.
* **Geração de PDF Perfeita:** Um layout de impressão (Print CSS) construído sob medida. Ao clicar em "Salvar PDF", o tema escuro é convertido numa lista limpa, de fundo branco e texto preto, garantindo que os exercícios não sejam cortados na folha.
* **Links para Vídeos:** Cada exercício possui um botão de "Play" que redireciona para a execução correta no YouTube.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica.
* **CSS3 & Animações:** Variáveis CSS, `keyframes` personalizados e media queries para o modo de impressão (`@media print`).
* **JavaScript (Vanilla):** Manipulação de DOM, lógica de transição de telas, injeção de HTML dinâmico e scroll do carrossel.
* **Tailwind CSS:** Framework de CSS utilitário (via CDN) para estilização rápida, responsividade e efeitos visuais.
* **Google Fonts:** Utilização da fonte [Outfit](https://fonts.google.com/specimen/Outfit) para uma tipografia geométrica e moderna.

## 📂 Estrutura de Diretórios

Para que o projeto funcione perfeitamente com todas as imagens e estilos, certifique-se de que a sua pasta está organizada da seguinte forma:

```text
/Training-Maker
│
├── index.html            # Estrutura principal da página
├── README.md             # Documentação do projeto
│
├── css/
│   └── style.css         # Estilos personalizados e configurações de impressão
│
├── js/
│   ├── script.js         # Lógica principal, transições e geração do plano
│   └── treinos.js        # Banco de dados (Objeto JSON) com todos os treinos
│
└── assets/
    ├── capa-fitgen.png   # Imagem da tela inicial (Hero)
    └── fundo-2.png       # Imagem de fundo do questionário e resultados
🚀 Como Executar o Projeto
Como o projeto é composto apenas por arquivos estáticos no Front-End, não é necessária a instalação de nenhum servidor complexo ou dependência (Node.js, npm, etc.).

Clone ou baixe este repositório para a sua máquina.

Certifique-se de que as imagens capa-fitgen.png e fundo-2.png estão dentro da pasta assets/.

Abra o arquivo index.html em qualquer navegador web moderno (Chrome, Edge, Firefox, Safari).

⚙️ Como Personalizar os Treinos
Toda a base de dados de exercícios está localizada no ficheiro js/treinos.js. A estrutura segue uma árvore lógica de objetos. Para adicionar ou modificar treinos, basta seguir o caminho:
Gênero -> Objetivo -> Experiência -> Frequência (Dias)

Exemplo de estrutura no código:

JavaScript
const treinos = {
    masculino: {
        hipertrofia: {
            avancado: {
                5: [
                    { 
                        dia: "A - Peito",
                        exercicios: [
                            { nome: "Supino Reto", series: "4x8-12", descanso: "60s", video: "link_youtube_aqui" }
                        ]
                    }
                ]
            }
        }
    }
}
👨‍💻 Desenvolvedor
Desenvolvido por Gabriel Saymon.