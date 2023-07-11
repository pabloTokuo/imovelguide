const telefone = document.querySelector('.telefone-corretora');
const telefone2 = document.querySelector('.telefone-corretor');

const corretoraTelefone = '(99) 9999-9999';
// toggle ao clicar no "ver telefone" mostra o numero
function handleClick(e) {
  e.preventDefault();
  if (telefone.innerHTML === 'ver telefone') {
    telefone.innerHTML = corretoraTelefone;
  } else {
    telefone.innerHTML = 'ver telefone';
  }
}

const corretorTelefone = '(11) 98761-0877';
function handleClick2(e) {
  e.preventDefault();
  if (telefone2.innerHTML === 'ver telefone') {
    telefone2.innerHTML = corretorTelefone;
  } else {
    telefone2.innerHTML = 'ver telefone';
  }
}

telefone.addEventListener('click', handleClick);
telefone2.addEventListener('click', handleClick2);

// regex validacao cpf
const clienteCpf = document.querySelector('.form-cpf');

function handleCpf() {
  clienteCpf.value = cpf(clienteCpf.value);
}

clienteCpf.addEventListener('input', handleCpf);

function cpf(v) {
  v = v.replace(/\D/g, ''); //Remove tudo o que não é dígito
  v = v.replace(/(\d{3})(\d)/, '$1.$2'); //Coloca um ponto entre o terceiro e o quarto dígitos
  v = v.replace(/(\d{3})(\d)/, '$1.$2'); //Coloca um ponto entre o terceiro e o quarto dígitos
  //de novo (para o segundo bloco de números)
  v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); //Coloca um hífen entre o terceiro e o quarto dígitos
  return v;
}

// regex validacao telefone
const telefoneCliente = document.querySelector('.form-telefone');

function handleTelefone(e) {
  telefoneCliente.value = telefones(telefoneCliente.value);
}

telefoneCliente.addEventListener('input', handleTelefone);

function telefones(v) {
  if (!v) return '';
  v = v.replace(/\D/g, '');
  v = v.replace(/(\d{2})(\d)/, '($1) $2');
  v = v.replace(/(\d)(\d{4})$/, '$1-$2');
  return v;
}

// popup ao clicar no botao
const alertaBotao = document.querySelector('.form-button');
const formcpf = document.querySelector('.form-cpf');
const formTelefone = document.querySelector('.form-telefone');
const textarea = document.querySelector('.form-text');

function handleBotao(e) {
  e.preventDefault();
  formcpf.value = '';
  formTelefone.value = '';
  textarea.value = '';
  alert('Mensagem enviada com sucesso!');
}

alertaBotao.addEventListener('click', handleBotao);

// Regra de 3
const inputX = document.querySelector('.inputX');
const input2 = document.querySelector('.input2');
const input3 = document.querySelector('.input3');
const resultado = document.querySelector('.valor-input');
const calcBotao = document.querySelector('.calcular-button');
document.querySelector('.valor-input').disabled = true; // botao de resultado desabilitado

function handleSubmit(e) {
  e.preventDefault();
  const primeiroInput = Number(inputX.value);
  const segundoInput = Number(input2.value);
  const terceiroInput = Number(input3.value);

  const total = (segundoInput * terceiroInput) / primeiroInput;

  if (isNaN(total)) {
    total = '';
  }

  resultado.value = total.toFixed(0);
}

// Validacao de apenas números
function handleLetter(e) {
  inputX.value = validacaoLetras(inputX.value);
  input2.value = validacaoLetras(input2.value);
  input3.value = validacaoLetras(input3.value);
}

function validacaoLetras(value) {
  value = value.replace(/\D/g, '');
  return value;
}

inputX.addEventListener('input', handleLetter);
input2.addEventListener('input', handleLetter);
input3.addEventListener('input', handleLetter);

calcBotao.addEventListener('click', handleSubmit);

// Modal Image
const modalButton = document.querySelector('.modal-button');

modalButton.onclick = () => {
  document.querySelector('.popimg').style.display = 'block';
};

document.querySelector('.popimg span').onclick = () => {
  document.querySelector('.popimg').style.display = 'none';
};

// Canvas e Download da imagem
const buttonCanvas = document.querySelector('.canvas-download');

function handleButton(e) {
  e.preventDefault();
  html2canvas(document.querySelector('.canvas-img')).then((canvas) => {
    let dataURL = canvas.toDataURL();

    let link = document.createElement('a');
    link.href = dataURL;
    link.download = 'imovelguide.png';

    link.click();
  });
}

buttonCanvas.addEventListener('click', handleButton);

// Menu Hamburger
const menu = document.getElementById('burger-menu');
const overlay = document.getElementById('menu');
function handleMenu() {
  this.classList.toggle('close');
  overlay.classList.toggle('overlay');
}

menu.addEventListener('click', handleMenu);
