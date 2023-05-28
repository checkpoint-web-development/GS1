document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault();

  let nome = document.getElementById('nome').value;
  let sobrenome = document.getElementById('sobrenome').value;
  let email = document.getElementById('email').value;
  let cpf = document.getElementById('cpf').value;
  let idade = document.getElementById('idade').value;
  let genero = document.getElementById('genero').value;
  let gostou = document.querySelector('input[name="gostou"]:checked');
  let atualizacoes = document.querySelector(
    'input[name="atualizacoes"]:checked',
  );
  let comentario = document.getElementById('comentario').value;
  let termos = document.getElementById('termos').checked;

  let labels = document.getElementsByTagName('label');
  for (let i = 0; i < labels.length; i++) {
    labels[i].classList.remove('erro');
  }

  if (
    nome !== '' &&
    sobrenome !== '' &&
    email !== '' &&
    cpf !== '' &&
    idade !== '' &&
    genero !== '' &&
    gostou &&
    atualizacoes &&
    termos
  ) {
    document.getElementById('mensagem').textContent =
      'Formulário enviado com sucesso!';
    document.getElementById('mensagem').classList.remove('erro');
    document.getElementById('mensagem').classList.add('certo');
    document.getElementById('nome').value = '';
    document.getElementById('sobrenome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('idade').value = '';
    document.getElementById('genero').value = '';
    document.querySelector('input[name="gostou"]:checked').checked = false;
    document.querySelector(
      'input[name="atualizacoes"]:checked',
    ).checked = false;
    document.getElementById('comentario').value = '';
    document.getElementById('termos').checked = false;
  } else {
    document.getElementById('mensagem').textContent =
      'Formulário não enviado. Preencha os campos necessários.';
    document.getElementById('mensagem').classList.add('erro');

    if (nome === '') {
      document.querySelector("label[for='nome']").classList.add('erro');
    }
    if (sobrenome === '') {
      document.querySelector("label[for='sobrenome']").classList.add('erro');
    }
    if (email === '') {
      document.querySelector("label[for='email']").classList.add('erro');
    }
    if (cpf === '') {
      document.querySelector("label[for='cpf']").classList.add('erro');
    }
    if (idade === '') {
      document.querySelector("label[for='idade']").classList.add('erro');
    }
    if (genero === '') {
      document.querySelector("label[for='genero']").classList.add('erro');
    }
    if (!gostou) {
      document.querySelector("label[for='gostou']").classList.add('erro');
    }
    if (!atualizacoes) {
      document.querySelector("label[for='atualizacoes']").classList.add('erro');
    }
    if (termos === false) {
      document.querySelector("label[for='termos']").classList.add('erro');
    }
  }
});
