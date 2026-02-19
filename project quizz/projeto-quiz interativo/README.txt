o que eu aproveitei do codigo do senhor : 

a div : utilizei a mesma div que o senhor ja coloquei para não mudar o jeito que é feito o quiz e não mudar a parte que aparece na tela. 
reutilizei algumas partes do CSS , mas troquei bastante coisa pelo o meu gosto e pelo a cor do meu tema 

utilizei a logica das funções , mas alterei conforme foi pedido

const q = quiz[indice];
  document.getElementById("question-text").textContent = `${indice+1} ${q.pergunta}`;
  const opcoesDiv = document.getElementById("options");
  opcoesDiv.innerHTML = "";

  q.alternativas.forEach(alt, i) => 
    const btn = document.createElement("button");
    btn.textContent = alt;
    btn.onclick = () => responder(i);
    opcoesDiv.appendChild(btn);

    function iniciarTimer() 
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

essa foi a unica parte que reutilizei sem mudar nada , não vi sentido em mexer essa parte por que ela pega a pergunta atual e cria um botão para cada alternativa , justamente o que um Quiz necessita , por isso reaproveitei essa parte , e a parte do timer também , o senhor ja deixou o controle de iniciar o cronometro pronto , por isso reutilizei , mudei apenas o tempo e o formato da letra. 

de resto alterei os formatos no CSS , cores , margens , alturas , bordas , botoes 
no js , adicionei uma logica para qdo a pessao errar uma resposta na propria caixa do quiz ja aparecer qual é a certa 
adicionei o que foi pedido , para mostrar o resultado ao final do quiz , coloquei do jeito q eu sabia fazer , não sei tinha outra forma de fazer , 

na parte do css , adicionar uma classe para os botoes , colocando verde(certo) e vermelho(errado) para identificar e ficar visualmente bonito na hora de ver o quiz 

adicionei no js um let respostasErradas para justamente poder contabilizar as rspostas erradas e no final poder mostrar o resultado da pessoa 

na funcao iniciarPergunta troquei o background size e adicionei um backgroud repeat , para não repetir as imagens que estao no fundo , sem essa opção ficaria varias imagens de fundo 

na função responder , utilizei a logica para aplicar a classe que criei no CSS dos botões , conforme a pergunta resulta no resultado correto , aciona o botão correta e mostrasse verde, caso a pessoa erre , é acionado o botao vermelho e mostra como errado a resposta 

e criei um respostaErradas.push que é justamente para ele localizar quais as respostas são erradas e armazenar elas para poder no final mostrar o resultado 

na função mostrarResultado fiz justamente o que o senhor pediu ; adicionar um resultado com quais quetões a pessoa errou e mostrar a pontuação dela 
e nele adicionei duas condiçoes : se tiver erro e se não tiver , se existir erros ele vai mostrar na tela quais foram os erros a lista é criada , e com a lista criada utilizei o join para converter em arrays em strings 

e no final de tudo coloquei um container , para ele atualizar o mostrar o resultado compelto 
depois disso , o quiz se rinicia e começa todo o processo novamente.
