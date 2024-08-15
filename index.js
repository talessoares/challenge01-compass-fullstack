document.getElementById("submitButton").addEventListener("click", function () {
  const email = document.getElementById("emailInput").value;

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailRegex.test(email)) {
    let emailsCadastrados =
      JSON.parse(localStorage.getItem("emailsCadastrados")) || [];

    emailsCadastrados.push(email);

    localStorage.setItem(
      "emailsCadastrados",
      JSON.stringify(emailsCadastrados)
    );

    alert("Sucesso! Email " + email + " cadastrado na newsletter.");
  } else if (email === "") {
    alert("Erro! Campo de email vazio.");
  } else {
    alert("Erro! Email " + email + " inválido.");
  }

  document.getElementById("emailInput").value = "";
});

document
  .querySelector(".contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!firstName.value.trim()) {
      alert("Nome é obrigatório.");
      firstName.focus();
      return;
    }

    if (!lastName.value.trim()) {
      alert("Sobrenome é obrigatório.");
      lastName.focus();
      return;
    }

    if (!email.value.trim()) {
      alert("Email é obrigatório.");
      email.focus();
      return;
    }

    if (!emailRegex.test(email.value)) {
      alert("Por favor, insira um email válido.");
      email.focus();
      return;
    }

    if (!message.value.trim()) {
      alert("A mensagem é obrigatória.");
      message.focus();
      return;
    }

    let contatos = JSON.parse(localStorage.getItem("contatos")) || [];

    const novoContato = {
      firstName: firstName.value.trim(),
      lastName: lastName.value.trim(),
      email: email.value.trim(),
      message: message.value.trim(),
    };

    contatos.push(novoContato);

    localStorage.setItem("contatos", JSON.stringify(contatos));

    alert("Obrigado! " + firstName.value + ", formulário enviado com sucesso!");

    firstName.value = "";
    lastName.value = "";
    email.value = "";
    message.value = "";
  });
