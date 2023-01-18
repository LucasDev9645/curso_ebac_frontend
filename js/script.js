const formulario = document.querySelector(".formulario");
const btn = document.querySelector(".btn");
const valorA = document.querySelector("#campoA");
const valorB = document.querySelector("#campoB");
const resultado = document.querySelector(".resultado");
const btnLimpar = document.querySelector(".limpar");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
});

function validacao() {
  if (valorB.value > valorA.value) {
    resultado.innerHTML = "Formulário validado com Sucesso";
  } else {
    resultado.innerHTML = "Validação Negada,tente novamente";
  }
}
btn.addEventListener("click", validacao);

btnLimpar.addEventListener("click", remover);
function remover() {
  valorA.value = "";
  valorB.value = "";
  resultado.innerHTML = "";
}
