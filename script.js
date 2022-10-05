const respostas = [
  'Certainty!',
  "I'm not so sure.",
  'It is decidedly so.',
  'Do not count on it.',
  'No doubt!',
  'Ask again later.',
  'Yes, definitely!',
  'My answer is no.',
  'You can count on it.',
  'Better not tell you now.',
  'As I see it, yes.',
  'My sources say no.',
  'Probably.',
  "Can't predict now.",
  'Good outlook.',
  'Prospects are not so good.',
  'Yeah.',
  'Concentrate and ask again.',
  'Signs point to yes.',
];

const resultado = document.querySelector('#resposta');
const inputPergunta = document.querySelector('#inputPergunta');
const buttonPerguntar = document.querySelector('#buttonPerguntar');

//clicar em fazer pergunta
function fazerPergunta() {
  if (inputPergunta.value == '') {
    alert('Type your question.');
    return;
  }
  buttonPerguntar.setAttribute('disabled', true);

  const pergunta = '<div>' + inputPergunta.value + '</div>';

  //gerar numero aleatorio
  const totalRespostas = respostas.length;
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas);

  resultado.innerHTML = pergunta + respostas[numeroAleatorio];
  resultado.style.opacity = 1;

  //sumir a resposta depois de 3s
  setTimeout(function () {
    resultado.style.opacity = 0;
    buttonPerguntar.removeAttribute('disabled');
  }, 3000);
}
