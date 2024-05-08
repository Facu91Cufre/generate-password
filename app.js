const passwordInput = document.getElementById("password");
const btn = document.getElementById("password-btn");
const copyBtn = document.getElementById("copy");

const length = 12;
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let symbol = "!#$%&/<>()=[]{}_-@*+";
let number = "0123456789";

const values = upperCase + lowerCase + symbol + number;

const createPassword = () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  password += number[Math.floor(Math.random() * number.length)];

  while (length > password.length) {
    password += values[Math.floor(Math.random() * values.length)];
  }
  passwordInput.value = password;
};

btn.addEventListener("click", () => {
  createPassword();
});

const copyPassword = () => {
  passwordInput.select();
  try {
    navigator.clipboard.writeText(passwordInput.value);
    console.log("Password copiado al portapapeles.");
  } catch (err) {
    console.log("Error al copiar el password: ", err);
  }
};
copyBtn.addEventListener("click", () => {
  copyPassword();
});
