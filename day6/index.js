const amountNumberItem = document.querySelector('#amountNumber');
const form = document.querySelector('#passwordGenerator');
const includeUppercaseItem = document.querySelector('#includeUppercase');
const includeNumberItem = document.querySelector('#includeNumber');
const includeSymbolsItem = document.querySelector('#includeSymbols');
const passwordDisplay = document.querySelector('.password__display');

const uppercase_char_codes = arrayFromAscii(65, 90);
const lowercase_char_code = arrayFromAscii(97, 122);
const number_char_code = arrayFromAscii(48, 57);
const symbols_char_code = arrayFromAscii(33, 47).concat(arrayFromAscii(58, 64)).concat(arrayFromAscii(91, 96)).concat(arrayFromAscii(123, 126));

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const amountNumber = amountNumberItem.value
  const includeUppercase = includeUppercaseItem.checked;
  const includeNumber = includeNumberItem.checked;
  const includeSymbols = includeSymbolsItem.checked;
  const password = generatePassword(amountNumber, includeUppercase, includeNumber, includeSymbols);
  passwordDisplay.innerText= password;
});

function generatePassword(amountNumber, includeUppercase, includeNumber, includeSymbols) {
  let charCodes = lowercase_char_code;
  if (includeUppercase) {
    charCodes = charCodes.concat(uppercase_char_codes);
  }
  if (includeNumber) {
    charCodes = charCodes.concat(number_char_code);
  }
  if (includeSymbols) {
    charCodes = charCodes.concat(symbols_char_code);
  }

  const passwordCharacters = [];
  for (let i=0; i<amountNumber; i++) {
    const code = charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(code));
  }
  return passwordCharacters.join('');
}

function arrayFromAscii(a, b) {
  const array = [];
  for (let i=a; i<=b; i++) {
    array.push(i);
  }
  return array;
}



