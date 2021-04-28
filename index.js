//----------------------Requires

const {
  buildArray,
} = require('./batteries.js');

const prompt = require('prompt-sync')();

// -------------------------------------------

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// console.log(getRandomIntInclusive(1, 10));

const characters = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*(){}?/.,<>:"][]'
const charactersLength = characters.length
// console.log(characters.length);

const randomCharacter = () => {
  const index = getRandomIntInclusive(0, charactersLength - 1)
  return characters[index]
}
// console.log(randomCharacter());


const password = x => {
  return buildArray(x).map(randomCharacter).join('')
}
// console.log(password(10));


//
// get input from the user.
//
const n = prompt('How many characters do you want your password to be? ');
//prompt.history.save()

// console.log(typeof input);
const passConvertToNumber = Number(n)

console.log('Your new generated password is:', password(passConvertToNumber));

const b = prompt('Are you happy with this password? Type yes or no ');

// const newPassword = (x) => {
//   if (b === 'no') {
//     return ('Ok, here is another password:', password(passConvertToNumber))
//   } else {
//     return 'Ok, great'
//   }
// }
// console.log(newPassword());
/// below same as above
if (b === 'no') {
  console.log('Ok, here is another password:', password(passConvertToNumber))
} else {
  console.log('Ok, great');
}




