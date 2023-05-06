const passwordEl = document.getElementById('password');
const length = 15;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWX",
    lowerCase = "abcdefghijklmnopqrstuvwx",
    numbers = "0123456789",
    symbols = "@#$%^&*()_+~|}{[]></-=";

const allCharacters = upperCase + lowerCase + numbers + symbols;

function generatePassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }

    passwordEl.value = password;
}