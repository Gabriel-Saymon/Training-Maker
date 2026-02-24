const treinos = {
    masculino: {
        hipertrofia: {
            iniciante: {
                2: [
                    { 
                        dia: "Treino A - Corpo Inteiro (Iniciante)",
                        exercicios: [
                            { nome: "Agachamento no Smith", series: "3x12", descanso: "90s", video: "https://www.youtube.com/results?search_query=agachamento+smith" },
                            { nome: "Supino na Máquina", series: "3x12", descanso: "60s", video: "https://www.youtube.com/results?search_query=supino+maquina" },
                            { nome: "Puxador Frente", series: "3x12", descanso: "60s", video: "https://www.youtube.com/results?search_query=puxador+frente" },
                            { nome: "Desenvolvimento na Máquina", series: "3x12", descanso: "60s", video: "https://www.youtube.com/results?search_query=desenvolvimento+maquina" },
                            { nome: "Rosca Direta na Polia", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=rosca+direta+polia" },
                            { nome: "Tríceps Pulley", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=triceps+pulley" }
                        ]
                    },
                    {
                        dia: "Treino B - Corpo Inteiro (Iniciante)",
                        exercicios: [
                            { nome: "Leg Press 45", series: "3x12", descanso: "90s", video: "https://www.youtube.com/results?search_query=leg+press+45" },
                            { nome: "Remada Baixa", series: "3x12", descanso: "60s", video: "https://www.youtube.com/results?search_query=remada+baixa" },
                            { nome: "Voador Peitoral", series: "3x15", descanso: "60s", video: "https://www.youtube.com/results?search_query=voador+peitoral" },
                            { nome: "Elevação Lateral com Halteres", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=elevacao+lateral" },
                            { nome: "Mesa Flexora", series: "3x15", descanso: "60s", video: "https://www.youtube.com/results?search_query=mesa+flexora" },
                            { nome: "Panturrilha Sentado", series: "3x20", descanso: "45s", video: "https://www.youtube.com/results?search_query=panturrilha+sentado" }
                        ]
                    }
                ],
                3: [
                    {
                        dia: "Treino A - Peito, Ombro e Tríceps",
                        exercicios: [
                            { nome: "Supino na Máquina", series: "3x12", descanso: "60s", video: "https://www.youtube.com/results?search_query=supino+maquina" },
                            { nome: "Voador Peitoral", series: "3x15", descanso: "60s", video: "https://www.youtube.com/results?search_query=voador+peitoral" },
                            { nome: "Desenvolvimento na Máquina", series: "3x12", descanso: "60s", video: "https://www.youtube.com/results?search_query=desenvolvimento+maquina" },
                            { nome: "Elevação Lateral", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=elevacao+lateral" },
                            { nome: "Tríceps Pulley Corda", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=triceps+corda" }
                        ]
                    },
                    {
                        dia: "Treino B - Costas e Bíceps",
                        exercicios: [
                            { nome: "Puxador Frente Aberto", series: "3x12", descanso: "60s", video: "https://www.youtube.com/results?search_query=puxador+frente" },
                            { nome: "Remada Baixa Triângulo", series: "3x12", descanso: "60s", video: "https://www.youtube.com/results?search_query=remada+baixa" },
                            { nome: "Crucifixo Invertido na Máquina", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=crucifixo+invertido+maquina" },
                            { nome: "Rosca Direta na Polia", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=rosca+direta+polia" },
                            { nome: "Rosca Martelo com Halteres", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=rosca+martelo" }
                        ]
                    },
                    {
                        dia: "Treino C - Pernas",
                        exercicios: [
                            { nome: "Leg Press 45", series: "4x12", descanso: "90s", video: "https://www.youtube.com/results?search_query=leg+press+45" },
                            { nome: "Cadeira Extensora", series: "3x15", descanso: "60s", video: "https://www.youtube.com/results?search_query=cadeira+extensora" },
                            { nome: "Mesa Flexora", series: "3x15", descanso: "60s", video: "https://www.youtube.com/results?search_query=mesa+flexora" },
                            { nome: "Cadeira Abdutora", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=cadeira+abdutora" },
                            { nome: "Panturrilha no Leg Press", series: "4x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=panturrilha+leg+press" }
                        ]
                    }
                ],
                5: [
                    {
                        dia: "A - Peito",
                        exercicios: [
                            { nome: "Supino na Máquina", series: "4x12", descanso: "60s", video: "https://www.youtube.com/results?search_query=supino+maquina" },
                            { nome: "Supino Inclinado com Halteres", series: "3x12", descanso: "60s", video: "https://www.youtube.com/results?search_query=supino+inclinado+halteres" },
                            { nome: "Voador Peitoral", series: "4x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=voador+peitoral" }
                        ]
                    },
                    {
                        dia: "B - Costas",
                        exercicios: [
                            { nome: "Puxador Frente", series: "4x12", descanso: "60s", video: "https://www.youtube.com/results?search_query=puxador+frente" },
                            { nome: "Remada Baixa", series: "4x12", descanso: "60s", video: "https://www.youtube.com/results?search_query=remada+baixa" },
                            { nome: "Pulldown na Polia", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=pulldown+polia" }
                        ]
                    },
                    {
                        dia: "C - Pernas",
                        exercicios: [
                            { nome: "Leg Press 45", series: "4x12", descanso: "90s", video: "https://www.youtube.com/results?search_query=leg+press+45" },
                            { nome: "Cadeira Extensora", series: "4x15", descanso: "60s", video: "https://www.youtube.com/results?search_query=cadeira+extensora" },
                            { nome: "Mesa Flexora", series: "4x15", descanso: "60s", video: "https://www.youtube.com/results?search_query=mesa+flexora" },
                            { nome: "Panturrilha Sentado", series: "4x20", descanso: "45s", video: "https://www.youtube.com/results?search_query=panturrilha+sentado" }
                        ]
                    },
                    {
                        dia: "D - Ombros",
                        exercicios: [
                            { nome: "Desenvolvimento na Máquina", series: "4x12", descanso: "60s", video: "https://www.youtube.com/results?search_query=desenvolvimento+maquina" },
                            { nome: "Elevação Lateral com Halteres", series: "4x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=elevacao+lateral" },
                            { nome: "Crucifixo Invertido na Máquina", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=crucifixo+invertido+maquina" }
                        ]
                    },
                    {
                        dia: "E - Braços (Bíceps e Tríceps)",
                        exercicios: [
                            { nome: "Tríceps Pulley", series: "4x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=triceps+pulley" },
                            { nome: "Tríceps Corda", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=triceps+corda" },
                            { nome: "Rosca Direta na Polia", series: "4x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=rosca+direta+polia" },
                            { nome: "Rosca Martelo com Halteres", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=rosca+martelo" }
                        ]
                    }
                ]
            },
            avancado: {
                2: [
                    { 
                        dia: "Treino A - Corpo Inteiro (Avançado)",
                        exercicios: [
                            { nome: "Agachamento Livre", series: "4x10", descanso: "90s", video: "https://www.youtube.com/results?search_query=agachamento+livre+masculino" },
                            { nome: "Supino Reto com Halteres", series: "4x10", descanso: "60s", video: "https://www.youtube.com/results?search_query=supino+reto+com+halteres" },
                            { nome: "Remada Curvada", series: "4x10", descanso: "60s", video: "https://www.youtube.com/results?search_query=remada+curvada" },
                            { nome: "Desenvolvimento com Halteres", series: "3x12", descanso: "60s", video: "https://www.youtube.com/results?search_query=desenvolvimento+com+halteres" },
                            { nome: "Rosca Direta", series: "3x12", descanso: "45s", video: "https://www.youtube.com/results?search_query=rosca+direta" },
                            { nome: "Tríceps Pulley", series: "3x12", descanso: "45s", video: "https://www.youtube.com/results?search_query=triceps+pulley" }
                        ]
                    },
                    {
                        dia: "Treino B - Corpo Inteiro (Ênfase diferente)",
                        exercicios: [
                            { nome: "Levantamento Terra", series: "4x8", descanso: "120s", video: "https://www.youtube.com/results?search_query=levantamento+terra" },
                            { nome: "Barra Fixa (ou Puxador Frente)", series: "4x falha", descanso: "90s", video: "https://www.youtube.com/results?search_query=barra+fixa" },
                            { nome: "Afundo com Halteres", series: "4x12 (cada perna)", descanso: "60s", video: "https://www.youtube.com/results?search_query=afundo+com+halteres" },
                            { nome: "Flexão de Braço", series: "4x falha", descanso: "60s", video: "https://www.youtube.com/results?search_query=flexao+de+braco" },
                            { nome: "Elevação Lateral", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=elevacao+lateral" },
                            { nome: "Panturrilha em pé", series: "4x20", descanso: "45s", video: "https://www.youtube.com/results?search_query=panturrilha+em+pe" }
                        ]
                    }
                ],
                3: [
                    {
                        dia: "Treino A - Peito, Ombro e Tríceps",
                        exercicios: [
                            { nome: "Supino Inclinado", series: "4x10", descanso: "60s", video: "https://www.youtube.com/results?search_query=supino+inclinado" },
                            { nome: "Desenvolvimento Militar", series: "4x10", descanso: "90s", video: "https://www.youtube.com/results?search_query=desenvolvimento+militar" },
                            { nome: "Crucifixo com Halteres", series: "3x12", descanso: "60s", video: "https://www.youtube.com/results?search_query=crucifixo+com+halteres" },
                            { nome: "Elevação Lateral", series: "4x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=elevacao+lateral" },
                            { nome: "Tríceps Testa", series: "3x12", descanso: "60s", video: "https://www.youtube.com/results?search_query=triceps+testa" }
                        ]
                    },
                    {
                        dia: "Treino B - Costas e Bíceps",
                        exercicios: [
                            { nome: "Barra Fixa", series: "4x falha", descanso: "90s", video: "https://www.youtube.com/results?search_query=barra+fixa" },
                            { nome: "Remada Cavalinho", series: "4x10", descanso: "60s", video: "https://www.youtube.com/results?search_query=remada+cavalinho" },
                            { nome: "Serrote", series: "3x12 (cada lado)", descanso: "60s", video: "https://www.youtube.com/results?search_query=serrote" },
                            { nome: "Rosca Scott", series: "4x12", descanso: "45s", video: "https://www.youtube.com/results?search_query=rosca+scott" },
                            { nome: "Rosca Martelo", series: "3x12", descanso: "45s", video: "https://www.youtube.com/results?search_query=rosca+martelo" }
                        ]
                    },
                    {
                        dia: "Treino C - Pernas",
                        exercicios: [
                            { nome: "Agachamento Livre", series: "4x10", descanso: "90s", video: "https://www.youtube.com/results?search_query=agachamento+livre" },
                            { nome: "Leg Press 45", series: "4x12", descanso: "90s", video: "https://www.youtube.com/results?search_query=leg+press+45" },
                            { nome: "Stiff", series: "4x10", descanso: "60s", video: "https://www.youtube.com/results?search_query=stiff" },
                            { nome: "Cadeira Extensora", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=cadeira+extensora" },
                            { nome: "Mesa Flexora", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=mesa+flexora" },
                            { nome: "Panturrilha sentado", series: "4x20", descanso: "45s", video: "https://www.youtube.com/results?search_query=panturrilha+sentado" }
                        ]
                    }
                ],
                5: [
                     {
                        dia: "A - Peito",
                        exercicios: [
                            { nome: "Supino Reto", series: "4x8-12", descanso: "60s", video: "https://www.youtube.com/results?search_query=Supino+Reto" },
                            { nome: "Supino Inclinado com Halteres", series: "4x12", descanso: "60s", video: "https://www.youtube.com/results?search_query=Supino+Inclinado+com+Halteres" },
                            { nome: "Voador Peitoral", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=Voador+Peitoral" },
                            { nome: "Cross Over Polia Alta", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=Cross+Over+Polia+Alta" }
                        ]
                    },
                     {
                        dia: "B - Costas",
                        exercicios: [
                            { nome: "Levantamento Terra", series: "4x6-8", descanso: "120s", video: "https://www.youtube.com/results?search_query=Levantamento+Terra" },
                            { nome: "Puxada Frontal", series: "4x10-12", descanso: "60s", video: "https://www.youtube.com/results?search_query=Puxada+Frontal" },
                            { nome: "Remada Curvada", series: "4x8-10", descanso: "60s", video: "https://www.youtube.com/results?search_query=Remada+Curvada" },
                            { nome: "Remada Unilateral (Serrote)", series: "3x12", descanso: "60s", video: "https://www.youtube.com/results?search_query=Remada+Unilateral" }
                        ]
                    },
                    {
                        dia: "C - Pernas (Ênfase Quadríceps)",
                        exercicios: [
                            { nome: "Agachamento Livre", series: "5x8-10", descanso: "90s", video: "https://www.youtube.com/results?search_query=Agachamento+Livre" },
                            { nome: "Leg Press 45", series: "4x12-15", descanso: "90s", video: "https://www.youtube.com/results?search_query=Leg+Press+45" },
                            { nome: "Afundo", series: "4x12", descanso: "60s", video: "https://www.youtube.com/results?search_query=Afundo" },
                            { nome: "Cadeira Extensora", series: "4x15 drop-set", descanso: "45s", video: "https://www.youtube.com/results?search_query=Cadeira+Extensora" }
                        ]
                    },
                     {
                        dia: "D - Ombros e Trapézio",
                        exercicios: [
                            { nome: "Desenvolvimento com Barra", series: "4x8-10", descanso: "90s", video: "https://www.youtube.com/results?search_query=Desenvolvimento+com+Barra" },
                            { nome: "Elevação Lateral", series: "5x12-15", descanso: "45s", video: "https://www.youtube.com/results?search_query=Elevação+Lateral" },
                            { nome: "Elevação Frontal", series: "3x12", descanso: "45s", video: "https://www.youtube.com/results?search_query=Elevação+Frontal" },
                            { nome: "Crucifixo Invertido", series: "4x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=Crucifixo+Invertido" },
                            { nome: "Encolhimento com Halteres", series: "4x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=Encolhimento+com+Halteres" }
                        ]
                    },
                     {
                        dia: "E - Bíceps e Tríceps",
                        exercicios: [
                            { nome: "Rosca Direta com Barra", series: "4x10", descanso: "60s", video: "https://www.youtube.com/results?search_query=Rosca+Direta" },
                            { nome: "Rosca Alternada com Halteres", series: "4x12", descanso: "45s", video: "https://www.youtube.com/results?search_query=Rosca+Alternada" },
                            { nome: "Tríceps Testa", series: "4x10", descanso: "60s", video: "https://www.youtube.com/results?search_query=Triceps+Testa" },
                            { nome: "Tríceps Corda", series: "4x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=Triceps+Corda" }
                        ]
                    }
                ]
            }
        },
        queima_gordura: {
            iniciante: {
                2: [
                    {
                        dia: "Treino A - Full Body Sem Impacto",
                        exercicios: [
                            { nome: "Agachamento com Cadeira", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=agachamento+com+cadeira" },
                            { nome: "Flexão de Braço na Parede ou Joelhos", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=flexao+parede" },
                            { nome: "Prancha Abdominal", series: "3x20s a 30s", descanso: "45s", video: "https://www.youtube.com/results?search_query=prancha+abdominal+iniciante" },
                            { nome: "Polichinelo Sem Salto (Passada Lateral)", series: "3x45s", descanso: "30s", video: "https://www.youtube.com/results?search_query=polichinelo+sem+salto" }
                        ]
                    },
                    {
                        dia: "Treino B - Full Body Sem Impacto",
                        exercicios: [
                            { nome: "Elevação Pélvica no Chão", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=elevacao+pelvica+chao" },
                            { nome: "Remada Curvada com Halteres Leves", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=remada+curvada+halteres" },
                            { nome: "Abdominal Supra Curto", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=abdominal+supra" },
                            { nome: "Corrida Estacionária Leve", series: "3x45s", descanso: "30s", video: "https://www.youtube.com/results?search_query=corrida+estacionaria+leve" }
                        ]
                    }
                ],
                3: [
                    {
                        dia: "Treino A - Inferiores e Cardio Leve",
                        exercicios: [
                            { nome: "Agachamento Livre (Amplitude Curta)", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=agachamento+iniciante" },
                            { nome: "Elevação Pélvica", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=elevacao+pelvica" },
                            { nome: "Caminhada Rápida", series: "15 min", descanso: "-", video: "https://www.youtube.com/results?search_query=caminhada+esteira" }
                        ]
                    },
                    {
                        dia: "Treino B - Superiores e Abdômen",
                        exercicios: [
                            { nome: "Supino Reto com Halteres Leves", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=supino+halteres" },
                            { nome: "Puxador Frente", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=puxador+frente" },
                            { nome: "Prancha Abdominal", series: "3x30s", descanso: "45s", video: "https://www.youtube.com/results?search_query=prancha+abdominal" }
                        ]
                    },
                    {
                        dia: "Treino C - Full Body Adaptado",
                        exercicios: [
                            { nome: "Burpee Adaptado (sem salto, caminhando)", series: "3x10", descanso: "60s", video: "https://www.youtube.com/results?search_query=burpee+adaptado" },
                            { nome: "Desenvolvimento com Halteres", series: "3x12", descanso: "45s", video: "https://www.youtube.com/results?search_query=desenvolvimento+halteres" },
                            { nome: "Polichinelo Sem Salto", series: "3x60s", descanso: "45s", video: "https://www.youtube.com/results?search_query=polichinelo+sem+salto" }
                        ]
                    }
                ],
                5: [
                     {
                        dia: "A - Cardio e Core",
                        exercicios: [
                            { nome: "Caminhada ou Elíptico", series: "30 min", descanso: "-", video: "-" },
                            { nome: "Prancha Abdominal", series: "3x30s", descanso: "45s", video: "https://www.youtube.com/results?search_query=prancha+abdominal" },
                            { nome: "Abdominal Reto", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=abdominal+reto" }
                        ]
                    },
                    {
                        dia: "B - Inferiores Base",
                        exercicios: [
                            { nome: "Leg Press", series: "3x15", descanso: "60s", video: "https://www.youtube.com/results?search_query=leg+press+iniciante" },
                            { nome: "Cadeira Extensora", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=cadeira+extensora" },
                            { nome: "Mesa Flexora", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=mesa+flexora" }
                        ]
                    },
                    {
                        dia: "C - Cardio HIIT Leve",
                        exercicios: [
                            { nome: "Bicicleta Ergométrica (1 min moderado / 1 min leve)", series: "20 min", descanso: "-", video: "-" }
                        ]
                    },
                    {
                        dia: "D - Superiores Base",
                        exercicios: [
                            { nome: "Supino na Máquina", series: "3x15", descanso: "60s", video: "https://www.youtube.com/results?search_query=supino+maquina" },
                            { nome: "Puxador Frente", series: "3x15", descanso: "60s", video: "https://www.youtube.com/results?search_query=puxador+frente" },
                            { nome: "Elevação Lateral", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=elevacao+lateral" }
                        ]
                    },
                    {
                        dia: "E - Full Body Circuito Leve",
                        exercicios: [
                            { nome: "Agachamento com o peso do corpo", series: "3x15", descanso: "30s", video: "https://www.youtube.com/results?search_query=agachamento+livre" },
                            { nome: "Flexão de Joelhos", series: "3x10", descanso: "30s", video: "https://www.youtube.com/results?search_query=flexao+joelhos" },
                            { nome: "Polichinelo Adaptado", series: "3x45s", descanso: "60s", video: "https://www.youtube.com/results?search_query=polichinelo+sem+salto" }
                        ]
                    }
                ]
            },
            avancado: {
                 2: [
                     {
                        dia: "Treino A - Full Body Circuito",
                        exercicios: [
                            { nome: "Agachamento com Salto", series: "3x20s", descanso: "40s", video: "https://www.youtube.com/results?search_query=Agachamento+com+Salto" },
                            { nome: "Flexão de Braço", series: "3xMax", descanso: "60s", video: "https://www.youtube.com/results?search_query=Flexao+de+Braco" },
                            { nome: "Prancha Abdominal", series: "3x45s", descanso: "30s", video: "https://www.youtube.com/results?search_query=Prancha+Abdominal" },
                            { nome: "Polichinelo", series: "3x45s", descanso: "15s", video: "https://www.youtube.com/results?search_query=Polichinelo" },
                            { nome: "Remada com Elástico", series: "3x20", descanso: "40s", video: "https://www.youtube.com/results?search_query=Remada+com+Elastico" }
                        ]
                    },
                    {
                        dia: "Treino B - Full Body HIIT",
                        exercicios: [
                            { nome: "Burpees", series: "4x30s", descanso: "60s", video: "https://www.youtube.com/results?search_query=Burpees" },
                            { nome: "Afundo Alternado", series: "4x45s", descanso: "30s", video: "https://www.youtube.com/results?search_query=Afundo+Alternado" },
                            { nome: "Abdominal Remador", series: "4x20", descanso: "30s", video: "https://www.youtube.com/results?search_query=Abdominal+Remador" },
                            { nome: "Corrida Estacionária", series: "4x60s", descanso: "30s", video: "https://www.youtube.com/results?search_query=Corrida+Estacionaria" },
                            { nome: "Escalador", series: "4x45s", descanso: "30s", video: "https://www.youtube.com/results?search_query=Escalador" }
                        ]
                    }
                ],
                3: [
                     {
                        dia: "Treino A - Inferiores e Abdómen",
                        exercicios: [
                            { nome: "Agachamento Goblet", series: "4x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=Agachamento+Goblet" },
                            { nome: "Stiff com Halteres", series: "4x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=Stiff+com+Halteres" },
                            { nome: "Elevação Pélvica", series: "4x20", descanso: "30s", video: "https://www.youtube.com/results?search_query=Elevação+Pélvica" },
                            { nome: "Prancha com Rotação", series: "3x15 (cada lado)", descanso: "30s", video: "https://www.youtube.com/results?search_query=Prancha+com+Rotação" },
                            { nome: "HIIT na Esteira (2' leve / 1' forte)", series: "15 min", descanso: "", video: "https://www.youtube.com/results?search_query=HIIT+Esteira" }
                        ]
                    },
                    {
                        dia: "Treino B - Superiores e Cardio",
                        exercicios: [
                            { nome: "Flexão de Braço Inclinada", series: "4xMax", descanso: "60s", video: "https://www.youtube.com/results?search_query=Flexão+Inclinada" },
                            { nome: "Remada com Halteres em Banco Inclinado", series: "4x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=Remada+Halteres+Banco" },
                            { nome: "Desenvolvimento Arnold", series: "4x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=Desenvolvimento+Arnold" },
                            { nome: "Rosca Martelo + Tríceps Francês", series: "3x15", descanso: "60s", video: "https://www.youtube.com/results?search_query=Rosca+Martelo+Triceps+Frances" },
                             { nome: "HIIT no Elíptico (2' leve / 1' forte)", series: "15 min", descanso: "", video: "https://www.youtube.com/results?search_query=HIIT+Eliptico" }
                        ]
                    },
                    {
                        dia: "Treino C - Full Body Metabólico",
                        exercicios: [
                            { nome: "Kettlebell Swing", series: "5x20", descanso: "45s", video: "https://www.youtube.com/results?search_query=Kettlebell+Swing" },
                            { nome: "Thruster com Halteres", series: "4x15", descanso: "60s", video: "https://www.youtube.com/results?search_query=Thruster+Halteres" },
                            { nome: "Burpee", series: "4x10", descanso: "60s", video: "https://www.youtube.com/results?search_query=Burpee" },
                            { nome: "Salto na Caixa", series: "4x12", descanso: "60s", video: "https://www.youtube.com/results?search_query=Salto+Caixa" },
                            { nome: "Corda Naval", series: "4x30s", descanso: "60s", video: "https://www.youtube.com/results?search_query=Corda+Naval" }
                        ]
                    }
                ],
                 5: [
                     {
                        dia: "A - Inferiores (Força) + HIIT",
                        exercicios: [
                            { nome: "Agachamento Livre", series: "5x5", descanso: "90s", video: "https://www.youtube.com/results?search_query=Agachamento+Livre" },
                            { nome: "Leg Press", series: "4x10", descanso: "60s", video: "https://www.youtube.com/results?search_query=Leg+Press" },
                            { nome: "Mesa Flexora", series: "4x12", descanso: "45s", video: "https://www.youtube.com/results?search_query=Mesa+Flexora" },
                            { nome: "HIIT na Bike (30s forte / 30s leve)", series: "10 min", descanso: "", video: "https://www.youtube.com/results?search_query=HIIT+Bike" }
                        ]
                    },
                    {
                        dia: "B - Superiores (Empurrar) + Cardio Contínuo",
                        exercicios: [
                            { nome: "Supino Reto", series: "5x5", descanso: "90s", video: "https://www.youtube.com/results?search_query=Supino+Reto" },
                            { nome: "Desenvolvimento com Halteres", series: "4x10", descanso: "60s", video: "https://www.youtube.com/results?search_query=Desenvolvimento+Halteres" },
                            { nome: "Tríceps Pulley", series: "4x12", descanso: "45s", video: "https://www.youtube.com/results?search_query=Triceps+Pulley" },
                            { nome: "Corrida Leve/Moderada", series: "30 min", descanso: "", video: "https://www.youtube.com/results?search_query=Corrida+Esteira" }
                        ]
                    },
                     {
                        dia: "C - Inferiores (Volume) + HIIT",
                        exercicios: [
                            { nome: "Afundo", series: "4x15 (cada perna)", descanso: "60s", video: "https://www.youtube.com/results?search_query=Afundo" },
                            { nome: "Cadeira Extensora", series: "4x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=Cadeira+Extensora" },
                            { nome: "Elevação Pélvica", series: "4x20", descanso: "30s", video: "https://www.youtube.com/results?search_query=Elevação+Pélvica" },
                            { nome: "HIIT no Remo", series: "10 min", descanso: "", video: "https://www.youtube.com/results?search_query=HIIT+Remo" }
                        ]
                    },
                    {
                        dia: "D - Superiores (Puxar) + Cardio Contínuo",
                        exercicios: [
                            { nome: "Barra Fixa", series: "5xMax", descanso: "90s", video: "https://www.youtube.com/results?search_query=Barra+Fixa" },
                            { nome: "Remada Curvada", series: "4x10", descanso: "60s", video: "https://www.youtube.com/results?search_query=Remada+Curvada" },
                            { nome: "Rosca Direta", series: "4x12", descanso: "45s", video: "https://www.youtube.com/results?search_query=Rosca+Direta" },
                            { nome: "Elíptico Moderado", series: "30 min", descanso: "", video: "https://www.youtube.com/results?search_query=Eliptico" }
                        ]
                    },
                    {
                        dia: "E - Full Body Metabólico",
                        exercicios: [
                            { nome: "Thruster", series: "3x15", descanso: "60s", video: "https://www.youtube.com/results?search_query=Thruster" },
                            { nome: "Burpee sobre a caixa", series: "3x10", descanso: "60s", video: "https://www.youtube.com/results?search_query=Burpee+box+jump" },
                            { nome: "Abdominal Canivete", series: "3x20", descanso: "45s", video: "https://www.youtube.com/results?search_query=Abdominal+Canivete" },
                            { nome: "Corda de Batalha", series: "5x30s", descanso: "45s", video: "https://www.youtube.com/results?search_query=Corda+Naval" }
                        ]
                    }
                ]
            }
        }
    },
    feminino: {
        hipertrofia: {
            iniciante: {
                2: [
                    {
                        dia: "Treino A - Inferiores Base",
                        exercicios: [
                            { nome: "Leg Press 45", series: "3x12", descanso: "90s", video: "https://www.youtube.com/results?search_query=leg+press+45+feminino" },
                            { nome: "Cadeira Abdutora", series: "3x15", descanso: "60s", video: "https://www.youtube.com/results?search_query=cadeira+abdutora" },
                            { nome: "Elevação Pélvica no Chão", series: "3x15", descanso: "60s", video: "https://www.youtube.com/results?search_query=elevacao+pelvica+chao" },
                            { nome: "Mesa Flexora", series: "3x15", descanso: "60s", video: "https://www.youtube.com/results?search_query=mesa+flexora" },
                            { nome: "Panturrilha Sentada", series: "3x20", descanso: "45s", video: "https://www.youtube.com/results?search_query=panturrilha+sentada" }
                        ]
                    },
                    {
                        dia: "Treino B - Superiores e Abdômen",
                        exercicios: [
                            { nome: "Puxador Frente", series: "3x15", descanso: "60s", video: "https://www.youtube.com/results?search_query=puxador+frente" },
                            { nome: "Supino na Máquina", series: "3x15", descanso: "60s", video: "https://www.youtube.com/results?search_query=supino+maquina" },
                            { nome: "Elevação Lateral Halteres", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=elevacao+lateral" },
                            { nome: "Tríceps Pulley", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=triceps+pulley" },
                            { nome: "Prancha Abdominal", series: "3x30s", descanso: "45s", video: "https://www.youtube.com/results?search_query=prancha+abdominal" }
                        ]
                    }
                ],
                3: [
                    {
                         dia: "Treino A - Inferiores Foco Anterior",
                         exercicios: [
                            { nome: "Agachamento com Peso Corporal", series: "3x15", descanso: "60s", video: "https://www.youtube.com/results?search_query=agachamento+livre" },
                            { nome: "Leg Press Horizontal", series: "3x15", descanso: "60s", video: "https://www.youtube.com/results?search_query=leg+press+horizontal" },
                            { nome: "Cadeira Extensora", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=cadeira+extensora" }
                         ]
                    },
                    {
                         dia: "Treino B - Superiores Completos",
                         exercicios: [
                            { nome: "Remada Baixa Máquina", series: "3x15", descanso: "60s", video: "https://www.youtube.com/results?search_query=remada+baixa" },
                            { nome: "Supino Máquina", series: "3x15", descanso: "60s", video: "https://www.youtube.com/results?search_query=supino+maquina" },
                            { nome: "Desenvolvimento Máquina", series: "3x15", descanso: "60s", video: "https://www.youtube.com/results?search_query=desenvolvimento+maquina" }
                         ]
                    },
                    {
                         dia: "Treino C - Inferiores Foco Posterior",
                         exercicios: [
                            { nome: "Elevação Pélvica Máquina", series: "3x15", descanso: "60s", video: "https://www.youtube.com/results?search_query=elevacao+pelvica+maquina" },
                            { nome: "Cadeira Abdutora", series: "3x20", descanso: "45s", video: "https://www.youtube.com/results?search_query=cadeira+abdutora" },
                            { nome: "Mesa Flexora", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=mesa+flexora" }
                         ]
                    }
                ],
                5: [
                     { dia: "A - Inferiores Base", exercicios: [{nome: "Leg Press 45", series: "3x15", descanso: "60s", video:"#"}] },
                     { dia: "B - Superiores Base", exercicios: [{nome: "Puxador Frente", series: "3x15", descanso: "60s", video:"#"}] },
                     { dia: "C - Glúteos", exercicios: [{nome: "Elevação Pélvica", series: "3x15", descanso: "60s", video:"#"}] },
                     { dia: "D - Braços", exercicios: [{nome: "Rosca Direta Polia", series: "3x15", descanso: "45s", video:"#"}] },
                     { dia: "E - Posterior de Coxa", exercicios: [{nome: "Mesa Flexora", series: "3x15", descanso: "45s", video:"#"}] }
                ]
            },
            avancado: {
                2: [
                    {
                        dia: "Treino A - Inferiores e Glúteos",
                        exercicios: [
                            { nome: "Agachamento Livre", series: "4x12", descanso: "90s", video: "https://www.youtube.com/results?search_query=agachamento+livre+feminino" },
                            { nome: "Elevação Pélvica", series: "4x15", descanso: "60s", video: "https://www.youtube.com/results?search_query=elevação+pélvica" },
                            { nome: "Leg Press 45", series: "4x15", descanso: "90s", video: "https://www.youtube.com/results?search_query=leg+press+45+feminino" },
                            { nome: "Cadeira Abdutora", series: "4x20", descanso: "45s", video: "https://www.youtube.com/results?search_query=cadeira+abdutora" },
                            { nome: "Panturrilha em pé", series: "4x20", descanso: "45s", video: "https://www.youtube.com/results?search_query=panturrilha+em+pe" }
                        ]
                    },
                    {
                        dia: "Treino B - Superiores e Abdómen",
                        exercicios: [
                            { nome: "Puxada Frontal", series: "4x12", descanso: "60s", video: "https://www.youtube.com/results?search_query=puxada+frontal+feminino" },
                            { nome: "Supino Inclinado com Halteres", series: "4x12", descanso: "60s", video: "https://www.youtube.com/results?search_query=supino+inclinado+halteres+feminino" },
                            { nome: "Elevação Lateral", series: "4x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=elevação+lateral+feminino" },
                            { nome: "Tríceps Corda", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=triceps+corda" },
                            { nome: "Prancha Abdominal", series: "4x 45s", descanso: "30s", video: "https://www.youtube.com/results?search_query=prancha+abdominal" }
                        ]
                    }
                ],
                3: [
                    {
                        dia: "Treino A - Pernas (Foco Quadríceps)",
                        exercicios: [
                            { nome: "Agachamento Hack", series: "4x12", descanso: "90s", video: "https://www.youtube.com/results?search_query=agachamento+hack" },
                            { nome: "Afundo no Smith", series: "4x15 (cada perna)", descanso: "60s", video: "https://www.youtube.com/results?search_query=afundo+no+smith" },
                            { nome: "Cadeira Extensora", series: "4x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=cadeira+extensora" },
                            { nome: "Leg Press 45 (Pés Baixos)", series: "4x15", descanso: "90s", video: "https://www.youtube.com/results?search_query=leg+press+pes+baixos" }
                        ]
                    },
                    {
                        dia: "Treino B - Superiores (Costas e Ombros)",
                        exercicios: [
                            { nome: "Remada Curvada com Halteres", series: "4x12", descanso: "60s", video: "https://www.youtube.com/results?search_query=remada+curvada+halteres+feminino" },
                            { nome: "Puxador Nuca", series: "4x12", descanso: "60s", video: "https://www.youtube.com/results?search_query=puxador+nuca" },
                            { nome: "Elevação Lateral Sentada", series: "4x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=elevacao+lateral+sentada" },
                            { nome: "Crucifixo Invertido na Máquina", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=crucifixo+invertido+maquina" }
                        ]
                    },
                    {
                        dia: "Treino C - Pernas (Foco Posterior e Glúteos)",
                        exercicios: [
                            { nome: "Stiff com Barra", series: "4x12", descanso: "90s", video: "https://www.youtube.com/results?search_query=stiff+barra" },
                            { nome: "Elevação Pélvica com Barra", series: "4x15", descanso: "60s", video: "https://www.youtube.com/results?search_query=elevacao+pelvica+barra" },
                            { nome: "Mesa Flexora", series: "4x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=mesa+flexora" },
                            { nome: "Agachamento Sumô", series: "4x15", descanso: "90s", video: "https://www.youtube.com/results?search_query=agachamento+sumo" },
                            { nome: "Cadeira Abdutora (tronco inclinado)", series: "4x20", descanso: "45s", video: "https://www.youtube.com/results?search_query=cadeira+abdutora+tronco+inclinado" }
                        ]
                    }
                ],
                5: [
                    {
                        dia: "A - Quadríceps",
                        exercicios: [
                            { nome: "Agachamento Livre", series: "4x12", descanso: "90s", video: "https://www.youtube.com/results?search_query=agachamento+livre+feminino" },
                            { nome: "Leg Press 45", series: "4x15", descanso: "90s", video: "https://www.youtube.com/results?search_query=leg+press+45" },
                            { nome: "Cadeira Extensora", series: "4x15 + drop-set", descanso: "60s", video: "https://www.youtube.com/results?search_query=cadeira+extensora" },
                            { nome: "Afundo com Halteres", series: "4x12 (cada perna)", descanso: "60s", video: "https://www.youtube.com/results?search_query=afundo+halteres" }
                        ]
                    },
                    {
                        dia: "B - Costas e Ombros",
                        exercicios: [
                            { nome: "Remada Baixa Triângulo", series: "4x12", descanso: "60s", video: "https://www.youtube.com/results?search_query=remada+baixa+triangulo" },
                            { nome: "Puxada Frontal Aberta", series: "4x12", descanso: "60s", video: "https://www.youtube.com/results?search_query=puxada+frontal+aberta" },
                            { nome: "Desenvolvimento com Halteres", series: "4x12", descanso: "90s", video: "https://www.youtube.com/results?search_query=desenvolvimento+halteres" },
                            { nome: "Elevação Lateral na Polia", series: "4x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=elevação+lateral+polia" }
                        ]
                    },
                    {
                        dia: "C - Posterior de Perna e Glúteos",
                        exercicios: [
                            { nome: "Levantamento Terra Romeno", series: "4x12", descanso: "90s", video: "https://www.youtube.com/results?search_query=levantamento+terra+romeno" },
                            { nome: "Elevação Pélvica", series: "4x15 com isometria", descanso: "60s", video: "https://www.youtube.com/results?search_query=elevação+pélvica" },
                            { nome: "Mesa Flexora", series: "4x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=mesa+flexora" },
                            { nome: "Glúteo na Polia (coice)", series: "4x15 (cada perna)", descanso: "45s", video: "https://www.youtube.com/results?search_query=gluteo+polia+coice" }
                        ]
                    },
                    {
                        dia: "D - Peito, Bíceps e Tríceps",
                        exercicios: [
                            { nome: "Supino Inclinado com Halteres", series: "4x12", descanso: "60s", video: "https://www.youtube.com/results?search_query=supino+inclinado+halteres+feminino" },
                            { nome: "Voador Peitoral", series: "4x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=voador+peitoral+feminino" },
                            { nome: "Rosca Direta na Polia", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=rosca+direta+polia" },
                            { nome: "Tríceps Francês com Halter", series: "3x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=triceps+frances+halter" }
                        ]
                    },
                    {
                        dia: "E - Cardio e Abdómen",
                         exercicios: [
                            { nome: "HIIT na Esteira (1' forte / 1' leve)", series: "20 min", descanso: "", video: "https://www.youtube.com/results?search_query=hiit+esteira+feminino" },
                            { nome: "Abdominal Infra na Paralela", series: "4x falha", descanso: "60s", video: "https://www.youtube.com/results?search_query=abdominal+infra+paralela" },
                            { nome: "Prancha Lateral", series: "4x45s (cada lado)", descanso: "30s", video: "https://www.youtube.com/results?search_query=prancha+lateral" },
                            { nome: "Abdominal Russo", series: "4x20", descanso: "45s", video: "https://www.youtube.com/results?search_query=abdominal+russo" }
                        ]
                    }
                ]
            }
        },
        queima_gordura: {
            iniciante: {
                2: [
                    { dia: "Treino A - Full Body Sem Impacto", exercicios: [{nome: "Polichinelo Adaptado", series: "3x45s", descanso: "30s", video:"#"}] },
                    { dia: "Treino B - Cardio Leve", exercicios: [{nome: "Caminhada ou Bike", series: "30 min", descanso: "-", video:"#"}] }
                ],
                3: [
                    { dia: "Treino A - Inferiores", exercicios: [{nome: "Agachamento Máquina", series: "3x15", descanso: "60s", video:"#"}] },
                    { dia: "Treino B - Superiores", exercicios: [{nome: "Remada Máquina", series: "3x15", descanso: "60s", video:"#"}] },
                    { dia: "Treino C - Cardio", exercicios: [{nome: "Elíptico", series: "30 min", descanso: "-", video:"#"}] }
                ],
                5: [
                    { dia: "A - Cardio", exercicios: [{nome: "Bike Ergométrica", series: "30 min", descanso: "-", video:"#"}] },
                    { dia: "B - Força Geral", exercicios: [{nome: "Leg Press", series: "3x15", descanso: "60s", video:"#"}] },
                    { dia: "C - Cardio", exercicios: [{nome: "Caminhada Rápida", series: "30 min", descanso: "-", video:"#"}] },
                    { dia: "D - Core", exercicios: [{nome: "Prancha", series: "3x30s", descanso: "45s", video:"#"}] },
                    { dia: "E - Força Geral", exercicios: [{nome: "Puxador Frente", series: "3x15", descanso: "60s", video:"#"}] }
                ]
            },
            avancado: {
                // Utilizando a estrutura de hipertrofia de queima que já tínhamos (unissex)
                2: [
                     {
                        dia: "Treino A - Full Body Circuito",
                        exercicios: [
                            { nome: "Agachamento com Salto", series: "3x20s", descanso: "40s", video: "https://www.youtube.com/results?search_query=Agachamento+com+Salto" },
                            { nome: "Remada com Elástico", series: "3x20", descanso: "40s", video: "https://www.youtube.com/results?search_query=Remada+com+Elastico" },
                            { nome: "Flexão de Braço", series: "3xMax", descanso: "60s", video: "https://www.youtube.com/results?search_query=Flexao+de+Braco" },
                            { nome: "Elevação Pélvica no Chão", series: "3x20", descanso: "30s", video: "https://www.youtube.com/results?search_query=elevação+pélvica+chão" },
                            { nome: "Polichinelo", series: "3x45s", descanso: "15s", video: "https://www.youtube.com/results?search_query=Polichinelo" }
                        ]
                    },
                    {
                        dia: "Treino B - Full Body HIIT",
                        exercicios: [
                            { nome: "Burpees", series: "4x30s", descanso: "60s", video: "https://www.youtube.com/results?search_query=Burpees" },
                            { nome: "Afundo Alternado com Salto", series: "4x45s", descanso: "30s", video: "https://www.youtube.com/results?search_query=Afundo+Alternado+salto" },
                            { nome: "Prancha com Toque no Ombro", series: "4x45s", descanso: "30s", video: "https://www.youtube.com/results?search_query=prancha+toque+ombro" },
                            { nome: "Corrida Estacionária", series: "4x60s", descanso: "30s", video: "https://www.youtube.com/results?search_query=Corrida+Estacionaria" },
                            { nome: "Escalador", series: "4x45s", descanso: "30s", video: "https://www.youtube.com/results?search_query=Escalador" }
                        ]
                    }
                ],
                3: [
                     {
                        dia: "Treino A - Inferiores e Abdómen",
                        exercicios: [
                            { nome: "Agachamento Goblet", series: "4x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=Agachamento+Goblet" },
                            { nome: "Stiff com Halteres", series: "4x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=Stiff+com+Halteres" },
                            { nome: "Elevação Pélvica", series: "4x20", descanso: "30s", video: "https://www.youtube.com/results?search_query=Elevação+Pélvica" },
                            { nome: "Prancha com Rotação", series: "3x15 (cada lado)", descanso: "30s", video: "https://www.youtube.com/results?search_query=Prancha+com+Rotação" },
                            { nome: "HIIT na Esteira (2' leve / 1' forte)", series: "15 min", descanso: "", video: "https://www.youtube.com/results?search_query=HIIT+Esteira" }
                        ]
                    },
                    {
                        dia: "Treino B - Superiores e Cardio",
                        exercicios: [
                            { nome: "Flexão de Braço Inclinada", series: "4xMax", descanso: "60s", video: "https://www.youtube.com/results?search_query=Flexão+Inclinada" },
                            { nome: "Remada com Halteres em Banco", series: "4x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=Remada+Halteres+Banco" },
                            { nome: "Desenvolvimento Arnold", series: "4x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=Desenvolvimento+Arnold" },
                            { nome: "Rosca Martelo + Tríceps Francês", series: "3x15", descanso: "60s", video: "https://www.youtube.com/results?search_query=Rosca+Martelo+Triceps+Frances" },
                             { nome: "HIIT no Elíptico (2' leve / 1' forte)", series: "15 min", descanso: "", video: "https://www.youtube.com/results?search_query=HIIT+Eliptico" }
                        ]
                    },
                    {
                        dia: "Treino C - Full Body Metabólico",
                        exercicios: [
                            { nome: "Kettlebell Swing", series: "5x20", descanso: "45s", video: "https://www.youtube.com/results?search_query=Kettlebell+Swing" },
                            { nome: "Thruster com Halteres", series: "4x15", descanso: "60s", video: "https://www.youtube.com/results?search_query=Thruster+Halteres" },
                            { nome: "Burpee", series: "4x10", descanso: "60s", video: "https://www.youtube.com/results?search_query=Burpee" },
                            { nome: "Salto na Caixa", series: "4x12", descanso: "60s", video: "https://www.youtube.com/results?search_query=Salto+Caixa" },
                            { nome: "Corda Naval", series: "4x30s", descanso: "60s", video: "https://www.youtube.com/results?search_query=Corda+Naval" }
                        ]
                    }
                ],
                5: [
                     {
                        dia: "A - Inferiores (Força) + HIIT",
                        exercicios: [
                            { nome: "Agachamento Livre", series: "5x8", descanso: "90s", video: "https://www.youtube.com/results?search_query=Agachamento+Livre" },
                            { nome: "Elevação Pélvica com Peso", series: "4x12", descanso: "60s", video: "https://www.youtube.com/results?search_query=elevação+pélvica+peso" },
                            { nome: "Mesa Flexora", series: "4x12", descanso: "45s", video: "https://www.youtube.com/results?search_query=Mesa+Flexora" },
                            { nome: "HIIT na Bike (30s forte / 30s leve)", series: "10 min", descanso: "", video: "https://www.youtube.com/results?search_query=HIIT+Bike" }
                        ]
                    },
                    {
                        dia: "B - Superiores (Empurrar) + Cardio Contínuo",
                        exercicios: [
                            { nome: "Supino com Halteres", series: "4x12", descanso: "90s", video: "https://www.youtube.com/results?search_query=Supino+Halteres" },
                            { nome: "Desenvolvimento com Halteres", series: "4x10", descanso: "60s", video: "https://www.youtube.com/results?search_query=Desenvolvimento+Halteres" },
                            { nome: "Tríceps Pulley", series: "4x12", descanso: "45s", video: "https://www.youtube.com/results?search_query=Triceps+Pulley" },
                            { nome: "Corrida Leve/Moderada", series: "30 min", descanso: "", video: "https://www.youtube.com/results?search_query=Corrida+Esteira" }
                        ]
                    },
                     {
                        dia: "C - Inferiores (Volume) + HIIT",
                        exercicios: [
                            { nome: "Afundo", series: "4x15 (cada perna)", descanso: "60s", video: "https://www.youtube.com/results?search_query=Afundo" },
                            { nome: "Cadeira Extensora", series: "4x15", descanso: "45s", video: "https://www.youtube.com/results?search_query=Cadeira+Extensora" },
                            { nome: "Cadeira Abdutora", series: "4x20", descanso: "30s", video: "https://www.youtube.com/results?search_query=cadeira+abdutora" },
                            { nome: "HIIT no Remo", series: "10 min", descanso: "", video: "https://www.youtube.com/results?search_query=HIIT+Remo" }
                        ]
                    },
                    {
                        dia: "D - Superiores (Puxar) + Cardio Contínuo",
                        exercicios: [
                            { nome: "Puxador Frontal", series: "4x12", descanso: "90s", video: "https://www.youtube.com/results?search_query=Puxador+Frontal" },
                            { nome: "Remada Curvada", series: "4x10", descanso: "60s", video: "https://www.youtube.com/results?search_query=Remada+Curvada" },
                            { nome: "Rosca Direta", series: "4x12", descanso: "45s", video: "https://www.youtube.com/results?search_query=Rosca+Direta" },
                            { nome: "Elíptico Moderado", series: "30 min", descanso: "", video: "https://www.youtube.com/results?search_query=Eliptico" }
                        ]
                    },
                    {
                        dia: "E - Full Body Metabólico",
                        exercicios: [
                            { nome: "Thruster", series: "3x15", descanso: "60s", video: "https://www.youtube.com/results?search_query=Thruster" },
                            { nome: "Burpee", series: "3x10", descanso: "60s", video: "https://www.youtube.com/results?search_query=Burpee" },
                            { nome: "Abdominal Canivete", series: "3x20", descanso: "45s", video: "https://www.youtube.com/results?search_query=Abdominal+Canivete" },
                            { nome: "Corda de Batalha", series: "5x30s", descanso: "45s", video: "https://www.youtube.com/results?search_query=Corda+Naval" }
                        ]
                    }
                ]
            }
        }
    }
};