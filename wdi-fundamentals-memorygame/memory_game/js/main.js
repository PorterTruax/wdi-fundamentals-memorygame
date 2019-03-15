

//Define 'cards' Array
var cards = [

{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},

{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},

{
	rank: "King",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "King",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];


//Define array that will be called on throughout the game.
//Clicked cards will get pushed to this array.
var cardsInPlay = [];


//This function uses the cardsInPlay array to check for a match 
checkForMatch = function () {

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert ("You found a match!")
	} else {
		alert ("Sorry, try again.")
	}
}
}

//function that is flipping the card to reveal its front
var flipCard = function () {

var cardId = this.getAttribute("data-id");

this.setAttribute('src', cards[cardId].cardImage);

console.log("User flipped " + cards[cardId].rank);

cardsInPlay.push(cards[cardId].rank);

console.log(cards[cardId].cardImage);

console.log(cards[cardId].suit);

checkForMatch();
}

//this function will flip the cards back to what they were

var refreshCards = function () {

	document.getElementById('game-board').innerHTML="";
	createBoard();
};


//createBoard function will start the gameboard and allow us to play
var createBoard = function () {
	for (var i = 0; i < cards.length; i++){
		//Creating element
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

//refresh button will refresh the gameboard
var refreshGame = function () {

		var refreshButton = document.getElementsByTagName("button")[0];
		refreshButton.addEventListener('click', refreshCards)

}


createBoard();

refreshGame();
