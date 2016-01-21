var readlineSync = require('readline-sync');

var firstName = readlineSync.question('What is your first name? \n');

var lastName = readlineSync.question('What is your last name? \n');


console.log('\nHello ' + firstName.toUpperCase() + ' ' + lastName.toUpperCase() + '! Nice to meet you! \n');

var age = readlineSync.question('How old are you? \n');

console.log('\nGreat! So far I know that your name is ' + firstName + ' ' + lastName + ' and you are ' + age + ' ' + 'years old \n');


var background = readlineSync.question('\nGive me short background about you and I will repeat back what I remember: \n');

var strLength = background.length;

console.log('\nSo the info you gave me is ' + strLength + ' characters long. \n');

var lastHalf = background.slice(background.length / 2);

console.log('\nHere is the last half: \n' + lastHalf + "\n");

var startPosition = readlineSync.question('\nWould you like me to start from somewhere else in your info? Choose a number in the range ' + '[0' + "-" + background.length + ']: \n');

console.log("\nHere you go: " + background.slice(startPosition) + "\n");