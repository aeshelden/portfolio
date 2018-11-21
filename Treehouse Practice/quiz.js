//quiz begins, no answer correct
var correct = 0;

//ask questions
var guess1 = prompt("What does 2+2 equal?");
 if (parseInt(guess1) === 4 ) {
  correctGuess += 1;

var guess2 = prompt("Is the sky blue?");
  if (guess2.toUpperCase() === 'YES' ) {
    correct += 1;

var guess3 = prompt("Do ducks quack?");
  if (guess3.toUpperCase() === 'YES' ) {
    correct += +1;
      }
var guess4 = prompt("Do dogs meow?");
  if (guess4.toUpperCase() === 'NO') {
    correct += 1;
  }
var guess5 = prompt("Does a square have 4 points?")
  if (guess5.toUpperCase() === 'YES') {
    correct += 1;
  }

document.write("<p>You got " + correct + " out of 5 questions correct!</p>");
  }

if ( correct === 5) {
  document.write("<p><strong>You earned a gold crown!</strong></p>");
} else if (correct >= 3) {
  document.write("<p><strong>You earned a silver crown!</strong></p>");
} else if (correct >= 2) {
  document.write("<p><strong>You earned a bronze crown.</strong></p>");
} else {
  document.write("<p><strong>No crown for you. You need to study more.</strong><p>");
}
