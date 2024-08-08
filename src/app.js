/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let formulario = document.getElementById("form");
  formulario.addEventListener("submit", EnviarFormulario);
};

let AlertaDiv = document.getElementById("AlertaDiv");
AlertaDiv.style.display = "none";

function EnviarFormulario(event) {
  event.preventDefault();

  let validacion = 0;

  const cardNumber = document.getElementById("CardNumber");
  const cvc_Number = document.getElementById("cvc_number");
  const amount = document.getElementById("Amount");
  const nombre = document.getElementById("Nombre");
  const apellido = document.getElementById("Apellido");
  const ciudad = document.getElementById("Ciudad");
  const codigoPostal = document.getElementById("codigoPostal");
  const select = document.getElementById("select");
  const textArea = document.getElementById("textArea");

  console.log(cardNumber.value);

  //Validar numero de tarjeta.

  let error = document.getElementById("error");

  if (cardNumber.value === "") {
    cardNumber.style.backgroundColor = "#ffb5b5";
    error.style.display = "inline";
    validacion++;
  } else {
    cardNumber.style.backgroundColor = "white";
    error.style.display = "none";
  }

  //Validar cvc

  let errorCvc = document.getElementById("errorCVC");
  if (cvc_Number.value === "") {
    cvc_Number.style.backgroundColor = "#ffb5b5";
    errorCvc.style.display = "inline";
    validacion++;
  } else {
    cvc_Number.style.backgroundColor = "white";
    errorCvc.style.display = "none";
  }

  // Validar Amount

  let errorAmaunt = document.getElementById("errorAmount");
  if (amount.value === "") {
    amount.style.backgroundColor = "#ffb5b5";
    errorAmaunt.style.display = "inline";
    validacion++;
  } else {
    amount.style.backgroundColor = "white";
    errorAmaunt.style.display = "none";
  }

  // Validar Nombre

  let errorNombre = document.getElementById("errorNombre");
  if (nombre.value === "") {
    nombre.style.backgroundColor = "#ffb5b5";
    errorNombre.style.display = "inline";
    validacion++;
  } else {
    nombre.style.backgroundColor = "white";
    errorNombre.style.display = "none";
  }

  // Validar Apellido

  let errorApellido = document.getElementById("errorApellido");
  if (apellido.value === "") {
    apellido.style.backgroundColor = "#ffb5b5";
    errorApellido.style.display = "inline";
    validacion++;
  } else {
    apellido.style.backgroundColor = "white";
    errorApellido.style.display = "none";
  }

  // Validar ciudad

  let errorCiudad = document.getElementById("errorCiudad");
  if (ciudad.value === "") {
    ciudad.style.backgroundColor = "#ffb5b5";
    errorCiudad.style.display = "inline";
    validacion++;
  } else {
    ciudad.style.backgroundColor = "white";
    errorCiudad.style.display = "none";
  }

  // Validar codigo Postal

  let errorPostal = document.getElementById("errorPostal");
  if (codigoPostal.value === "") {
    codigoPostal.style.backgroundColor = "#ffb5b5";
    errorPostal.style.display = "inline";
    validacion++;
  } else {
    codigoPostal.style.backgroundColor = "white";
    errorPostal.style.display = "none";
  }

  // Validar select

  let errorSelect = document.getElementById("errorState");
  if (select.value === "") {
    select.style.backgroundColor = "#ffb5b5";
    errorSelect.style.display = "inline";
    validacion++;
  } else {
    select.style.backgroundColor = "white";
    errorSelect.style.display = "none";
  }

  // Validar textArea

  let errorText = document.getElementById("errorText");
  if (textArea.value == "") {
    textArea.style.backgroundColor = "#ffb5b5";
    errorText.style.display = "inline";
    validacion++;
  } else {
    textArea.style.backgroundColor = "white";
    errorText.style.display = "none";
  }

  console.log(validacion);

  if (validacion > 0) {
    AlertaDiv.style.display = "block";
  } else {
    AlertaDiv.style.display = "none";
    document.getElementById("form").submit();
  }
}
