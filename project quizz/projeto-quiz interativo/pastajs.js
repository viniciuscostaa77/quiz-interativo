let tempoPorPergunta = 15; // segundos

const quiz = [  // aq irei por as 10 perguntas pedida , colocando as alternativas usando listas , para quando for acionado a correta aparecer na tela 
  {
    pergunta: "Qual a data de Fundação da Riot Games?", // pergunta 1 
    alternativas: ["2006", "2007", "2005", "2008"],
    correta: 0,
    pontos: 10
  },
  {
    pergunta: "Onde está localizada a sede global (Headquarters) da Riot Games?", // pergunta 2 
    alternativas: ["Seattle, EUA", "Seoul, Coreia do Sul", "Los Angeles, EUA", "Londres, Reino Unido" , "São Paulo, Brasil"],
    correta: 2,
    pontos: 5
  },
  {
    pergunta: "Quem são os dois co-fundadores da Riot Games?", // pergunta 3 
    alternativas: ["Nicolo Laurent e Brandon Beck", "Marc Merrill e Joe Ziegler", "Brandon Beck e Marc Merrill", "John Cena e Nicolo Laurent", "Anna Donlon e Marc Merrill"],
    correta: 2,
    pontos: 10
  },
  {
    pergunta: "Qual foi o primeiro e mais famoso título lançado pela Riot Games ?", //pergunta 4
    alternativas: ["Project A", "Teamfight Tactics", "League of Legends", "Valorant", "Legends of Runeterra"],
    correta: 2,
    pontos: 10
  },
  {
    pergunta: "Em League of Legends, qual monstro neutro (camp) concede o buff do Barão, que fortalece os lacaios (minions) próximos? ?", //pergunta 5
    alternativas: ["Dragão Ancião (Elder Dragon)", "Arauto do Vale (Rift Herald)", "Aronguejo (Scuttle Crab)", "Nashor", "Lobo Fantasma (Ghost Wolf"],
    correta: 3,
    pontos: 10
  },
  {
    pergunta: "Qual destes itens não é uma classe/tipo de campeão principal em League of Legends?", // pergunta6
    alternativas: ["Atirador", "Mago", "Tanque", "Explorador" , "Suporte"],
    correta: 3,
    pontos: 10
  },
  {
    pergunta: "Na série animada Arcane, qual personagem é conhecida por sua obsessão por bombas e explosivos, e é irmã de Vi?", // pergunta7
    alternativas: ["Caitlyn", "Jinx", "Ekko", "Mel", "Seraphine"],
    correta: 1,
    pontos: 10
  },
  {
    pergunta: "Em que mês e ano o Valorant foi oficialmente lançado globalmente, após o período de Beta Fechado?", // pergunta8
    alternativas: ["Setembro de 2020", "Junho de 2020", "Maio de 2021", "Março de 2020" , "Dezembro de 2019"],
    correta: 1,
    pontos: 10
  },
  {
    pergunta: "Durante o Beta Fechado, o acesso ao jogo Valorant era distribuído principalmente por meio de qual método promocional?", // pergunta 9 
    alternativas: ["Comprando o Pacote de Fundador", "Inscrição no site da Riot", "Ganhando chaves em sorteios de streamers na Twitch/YouTube", "Ganhando partidas em League of Legends", "Sendo um jogador de nível alto no LoL"],
    correta: 2, 
    pontos: 10
  },
  {
    pergunta: "Qual Agente foi lançado junto com o lançamento oficial (Full Release), encerrando o Beta Fechado?",  // pergunta 10
    alternativas: ["Skye", "Raze", "Reyna", "Killjoy" ,"Yoru"],
    correta: 2,
    pontos: 10
  }
];

// IMAGENS DE FUNDO POR PERGUNTA
const fundos = [
  "url('imagens quiz/riott_imagem.jpeg')", // fundo 1
  "url('imagens quiz/riot_games_local.jpg')", // fundo 2 
  "url('imagens quiz/cofundadores_riot.jpg')", // fundo 3 
  "url('imagens quiz/fotos_jogos_riot.jpg')", // fundo 4
  "url('imagens quiz/baron_lol.webp')", // fundo 5 
  "url('imagens quiz/personagem1_fotoo.jpg')", // fundo 6 
  "url('imagens quiz/arcanee_serie.jpg')", // fundo 7 
  "url('imagens quiz/valorant_foto.jpg')", // fundo 8 
  "url('imagens quiz/valorant2_foto.jpg')", // fundo 9 
  "url('imagens quiz/personagem_foto.jpg')" // fundo 10 



  
  
];
 // nessa parte é onde ta a logica do quiz , onde mostra o que ta certo e o que ta errado 
let indice = 0; 
let pontuacao = 0; // aqui armazena a pontuação que o usuario está 
let respostasErradas = []; // conta quantas respostas são conceituadas como errada , essa variavel vai ser importante para no final eu contabilizar os erros e mostrar na tela 
let tempo; // o tempo que é mostrado em cima das perguntas é aqui onde ele é armazenado 
let contador; // armazena o temporizador , até o tempo que o temporizador acaba 


function iniciarPergunta() {
  document.body.style.backgroundImage = fundos[indice] || 'none';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundRepeat = 'no-repeat';
  if (indice >= quiz.length) {
    mostrarResultado();
    return;
  }

  const q = quiz[indice];
  document.getElementById("question-text").textContent = `${indice+1} ${q.pergunta}`;
  const opcoesDiv = document.getElementById("options");
  opcoesDiv.innerHTML = "";

  q.alternativas.forEach((alt, i) => {
    const btn = document.createElement("button");
    btn.textContent = alt;
    btn.onclick = () => responder(i);
    opcoesDiv.appendChild(btn);
  });

  tempo = tempoPorPergunta;
  document.getElementById("time-left").textContent = tempo;
  iniciarTimer();
}

function iniciarTimer() {
  clearInterval(contador);
  contador = setInterval(() => {
    tempo--;
    document.getElementById("time-left").textContent = tempo;

    if (tempo <= 0) {
      clearInterval(contador);
      indice++;
      iniciarPergunta();
    }
  }, 1000);
}

function responder(i) {
  clearInterval(contador);
  const q = quiz[indice];
  const botoes = document.getElementById("options").querySelectorAll('button');
  const botaoClicado = botoes[i];
  botoes.forEach(btn => btn.disabled = true);
 if (i === q.correta) {
    // ACERTOU: Aplica verde ao botão clicado
    pontuacao += q.pontos;
    botaoClicado.classList.add('correct');
  } else {
    // ERROU: 
    // a) Aplica vermelho ao botão clicado
    // b) Aplica verde à resposta correta
    respostasErradas.push(indice + 1); // Rastreia o erro 
    botaoClicado.classList.add('wrong');
    botoes[q.correta].classList.add('correct'); // Mostra o botão correto
  }
setTimeout(() => {
    indice++;
    iniciarPergunta();
  }, 1500); // 1500 milissegundos = 1.5 segundos de feedback
}

function mostrarResultado() {
    document.body.style.backgroundImage = 'none';
    clearInterval(contador);
    
    let listadeErros = '';
    
    // 2. Lógica para gerar a lista de erros
    if (respostasErradas.length > 0) { 
        // Se houver erros, cria a lista de questões erradas (números das perguntas)
        listadeErros = ` 
            <h3> respostas erradas :</h3>
            <p> você errou as questões : (pelo número):</p>
            <p><strong>${respostasErradas.join(', ')}</strong></p> `; // utilizei o join , ele faz com que o array criado vire uma string 
    } else {
        // Se não houver erros
        listadeErros = `
            <p> parabéns! você acertou todas as ${quiz.length} perguntas!</p> 
        `;
    }
    
    // 3. Atualiza o contêiner com o resultado completo
    document.getElementById("quiz-container").innerHTML = `
        <h2>Resultado Final</h2>
        <p>pontuação total: <strong>${pontuacao}</strong></p>
        <p>você respondeu ${quiz.length} perguntas.</p>
        ${listadeErros}
        <button onclick="window.location.reload();"> reiniciar Quiz</button>
    `;
}
