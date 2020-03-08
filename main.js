const cards = [
{
	rank:'queen',
	suit:'hearts',
	cardImage:"images/queen-of-hearts.png"
},
{
	rank:'queen',
	suit:'diamonds',
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank:'king',
	suit:'hearts',
	cardImage: "images/king-of-hearts.png"
},
{
	rank:'king',
	suit:'diamonds',
	cardImage: "images/king-of-diamonds.png"
}
];
const cardsInPlay = [];



/* Function to flip cards */

var flipCard = function (){
    var cardId = this.getAttribute('data-id');
    console.log ("User flipped " + cards[cardId].rank);
    cardsInPlay.push (cards[cardId].rank);
    console.log (cards[cardId].cardImage);
    console.log (cards[cardId].suit);
    checkForMatch(this);
};

cards.setAttribute('src', cards[cardId].cardImage)
/*Check for match functions */

var checkForMatch = function() {
    if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again");
    }
};

const createGameBoard = function(){
	for (let i=0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement)
	}
};

flipCard(0)
flipCard(1)
checkForMatch()