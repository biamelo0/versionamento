const form = document.getElementById("loginForm");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const mensagemErro = document.getElementById("mensagemErro");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  if (usuario.value.trim() === "" || senha.value.trim() === "") {
    mensagemErro.textContent = "Por favor, preencha todos os campos.";
  } else {
    mensagemErro.textContent = "";
    window.location.href = "dashboard.html";
  }
});