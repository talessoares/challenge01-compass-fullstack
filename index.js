function showCustomAlert(message, type = "error") {
  const customAlert = document.getElementById("customAlert");
  customAlert.textContent = message;
  customAlert.className = `custom-alert ${type}`;
  customAlert.style.display = "block";

  setTimeout(function () {
    customAlert.style.display = "none";
  }, 5000);
}

document.getElementById("submitButton").addEventListener("click", function () {
  const email = document.getElementById("emailInput").value;

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (email === "") {
    showCustomAlert("Error! Email field is empty.", "error");
  } else if (emailRegex.test(email)) {
    let emailsCadastrados =
      JSON.parse(localStorage.getItem("emailsCadastrados")) || [];

    emailsCadastrados.push(email);

    localStorage.setItem(
      "emailsCadastrados",
      JSON.stringify(emailsCadastrados)
    );

    showCustomAlert(
      "Success! Email " + email + " has been registered to the newsletter.",
      "success"
    );
  } else {
    showCustomAlert("Error! Email " + email + " is invalid.", "error");
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
      showCustomAlert("First name is required.", "error");
      firstName.focus();
      return;
    }

    if (!lastName.value.trim()) {
      showCustomAlert("Last name is required.", "error");
      lastName.focus();
      return;
    }

    if (!email.value.trim()) {
      showCustomAlert("Email is required.", "error");
      email.focus();
      return;
    }

    if (!emailRegex.test(email.value)) {
      showCustomAlert("Email is invalid.", "error");
      email.focus();
      return;
    }

    if (!message.value.trim()) {
      showCustomAlert("Message is required.", "error");
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

    showCustomAlert("Success! Your message has been sent.", "success");

    firstName.value = "";
    lastName.value = "";
    email.value = "";
    message.value = "";
  });
