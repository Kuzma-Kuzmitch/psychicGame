$(document).ready(function() {

var wordsAndHints = {
  "Words": ["Dog", "Cat", "Algebra", "Amnesty", "Clockwork", "Sublime", "Novella", "Violin", "Psychosis", "Television", "Religion", "The Mind", "YouTube", "Spider-Man", "Thanos"],
  "Hints": ["A Modern Lupine", "A Littler Rat Catcher", "The Strassburg Tablet", "Trump Will Need This", "Very Punctual", "A Good Feeling, Or a Good Band?", "Not Quite An Epic", "A Small One For Small Sympathy", "Trump Gives Me This", "Marquee Moon", "An Opiate For The Masses", "My Stomping Ground", "Freetime Vacuum", "Friendly Neighborhood Hero", "A Total Dick"],
  "OtherWords": ["Monkey", "Virus", "Lolipop", "Internet", "Ipod", "Chicken", "Pillow", "Japan", "Tongue"],
};
var gameNumber = Math.floor(wordsAndHints.Words.length * Math.random())
var wordToGuess = wordsAndHints.Words[gameNumber]
var wordTwo = wordsAndHints.Words[gameNumber-1]
if (wordTwo == null) {
  wordTwo = wordsAndHints.OtherWords[Math.floor(wordsAndHints.OtherWords.length * Math.random())]
}
var wordThree = wordsAndHints.Words[gameNumber+1]
if (wordThree == null) {
  wordThree = wordsAndHints.OtherWords[Math.floor(wordsAndHints.OtherWords.length * Math.random())]
}
var wordArray = [wordToGuess, wordTwo, wordThree]

function generateButton () {
  var btn1 = wordArray[Math.floor(wordArray.length * Math.random())]
  $("#button1").text(btn1).addClass(btn1)
  if (btn1 === wordToGuess) {
    $("#button1").text(btn1).addClass("winner")
    }
  wordArray.splice(wordArray.indexOf(btn1), 1)
  var btn2 = wordArray[Math.floor(wordArray.length * Math.random())]
  $("#button2").text(btn2).addClass(btn2)
  if (btn2 === wordToGuess) {
    $("#button2").text(btn2).addClass("winner")
    }
  wordArray.splice(wordArray.indexOf(btn2), 1)
  var btn3 = wordArray[Math.floor(wordArray.length * Math.random())]
  $("#button3").text(btn3).addClass(btn3)
  if (btn3 === wordToGuess) {
    $("#button3").text(btn3).addClass("winner")
    }
};

function calculateWin () {
  if ($(this).hasClass("winner")) {
    $("#gameStatic").removeClass("d-block").addClass("d-none")
    $("#gameWin").removeClass("d-none").addClass("d-block")
    $(".card").addClass("d-none")
  }
  else {
    $("#gameStatic").removeClass("d-block").addClass("d-none")
    $("#gameLoss").removeClass("d-none").addClass("d-block")
    $(".card").addClass("d-none")
  }
}

function restartGame () {
  location.reload()
}

generateButton ()


console.log(gameNumber)
console.log(wordsAndHints.Hints[gameNumber])
console.log(wordToGuess)
console.log(wordTwo)
console.log(wordThree)
console.log(wordArray)



$("#wordHint").text(" " + wordsAndHints.Hints[gameNumber])
$("#button1").on("click", calculateWin)
$("#button2").on("click", calculateWin)
$("#button3").on("click", calculateWin)
$("#replayGame").on("click", restartGame)
$("#retryGame").on("click", restartGame)






});
