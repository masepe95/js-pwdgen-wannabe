console.log('JS OK') 

const passwordPlaceholder = document.getElementById('password-generated');
console.log(passwordPlaceholder);

const userName = prompt('Come ti chiami?', 'Marco');
const userLastname = prompt('Il tuo cognome?', 'Sepe');
const userColor = prompt('Il tuo colore preferito?', 'Azzurro');
const userNumber = 21;

const userPassword = userName + userLastname + userColor + userNumber;
console.log(userPassword);

passwordPlaceholder.innerText = userPassword;

