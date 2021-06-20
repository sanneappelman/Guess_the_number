/*var person = prompt ("Welkom! Wat is je naam?");
alert ("Hey " + [person]);
var beginGame = prompt ("Voer een nummer in van 0 tot 25 om te beginnen met raden...")

 const getRandom = function (){

 } */

let numberToBeGuessed = null;
let name;
let guess;
let numberOfGuesses = 5;
const min = 0;
let max = 25;

while (name === undefined || name === null || name.length === 0) {
  name = prompt("Welkom! Wat is je naam?");
}
alert("Hey " + name + ". Welkom bij Guess the number");

max = parseInt(prompt("Tot welk nummer mag er geraden worden?"));

alert("Je hebt nu 5 pogingen om het getal te raden. Het getal ligt tussen 0 en " + max + ". Succes!")

numberToBeGuessed = Math.floor(Math.random() * (max - min)) + min;
console.log("Pssst het nummer is: " + numberToBeGuessed);

while (guess !== numberToBeGuessed) {
  if (numberOfGuesses < 1) {
    alert("Helaas, je poging moet opnieuw. Je hebt verloren. We beginnen weer opnieuw");
    numberOfGuesses = 5;
    numberToBeGuessed = Math.floor(Math.random() * (max - min)) + min;
  }
  guess = parseInt(prompt("Voer een nummer in.."));

  while (isNaN(guess)) {
    guess = parseInt(prompt("Je invoer was geen nummer. Voer alleen nummers in! Probeer het nogmaals"));
  }

  alert("Je gok is: " + guess);

  if (guess > numberToBeGuessed) {
    numberOfGuesses--;
    if (numberOfGuesses < 1) {
      alert("Dit was je laaste poging.");
    } else {
      alert("Helaas, je gok was te hoog. Je hebt nog: " + numberOfGuesses + " keuze(s) over. Probeer opnieuw.");
    }
  } else if (guess < numberToBeGuessed) {
    numberOfGuesses--;
    if (numberOfGuesses < 1) {
      alert("Dit was je laatste poging.");
    } else {
      alert("Helaas, je gok was te laag. Je hebt nog: " + numberOfGuesses + " keuze(s) over. Probeer opnieuw.");
    }
  } else {
    alert("Goed geraden, het nummer was inderdaad: " + guess);
    alert("We sluiten de game af. Bedankt voor het spelen, tot volgende keer!");
  }
}
