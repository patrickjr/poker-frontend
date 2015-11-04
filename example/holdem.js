
/* global Deck */

//var prefix = Deck.prefix
//var transform = prefix('transform')
//var translate = Deck.translate

var $dealerSpot = document.getElementById('dealer-spot')

// create Deck
var deck        = Deck()
var deckCounter = 51;


// add to DOM
deck.mount($dealerSpot)
deck.intro()
deck.cards.forEach(function (card, i){
    card.setSide('back')   
});

function dealCard(player, delayCard){
  var offset = 40;
  var card;
  if (player.cards.length > 0){
    offset = 0;
  }
  card = deal(player.x, player.y, offset, delayCard);
  deckCounter--;
  return card;
}

/*

function dealCard(distance, cardNumber, delayCard){
  var offset = 0;
  if(cardNumber === 2){
    offset = 30;
  }
  deal(distance.x, distance.y, offset, delayCard);
  deckCounter--;
}
*/
function deal(x, y, offset, delayCard){
    var card = deck.cards[deckCounter];
    card.animateTo({
      delay: 1000 * delayCard,
      duration: 1000,
      ease: 'quartOut',
      x: x+offset,
      y: y
    });
    card.setSide('back');
    return card;
}





















/*
deck.cards.forEach(function (card, i) {
    card.setSide('front')
	
    // explode
    card.animateTo({
        delay: 1000 + i * 2, // wait 1 second + i * 2 ms
        duration: 500,
		ease: 'quartOut',
        
        x: Math.random() * window.innerWidth - window.innerWidth / 2,
        y: Math.random() * window.innerHeight - window.innerHeight / 2
    })
})*/

/*
deck.cards.forEach(function (card, i) {
    card.setSide('back')
	  card.animateTo({
      delay: 1000 + i * 2,
      duration: 500,
      ease: 'quartOut',
      y: 
      
    })
    
})*/
     /*explode
    card.animateTo({
        delay: 1000 + i * 2, // wait 1 second + i * 2 ms
        duration: 500,
        ease: 'quartOut',
        
        x: $leftBound - $left,
        y: $top
    })*/
//})



/*deck.cards.forEach(function (card, i) {
    card.setSide('front')
	
    // explode
    card.animateTo({
        delay: 1000 + i * 2, // wait 1 second + i * 2 ms
        duration: 500,
		ease: 'quartOut',
        
        x: Math.random() * window.innerWidth - window.innerWidth / 2,
        y: Math.random() * window.innerHeight - window.innerHeight / 2
    })
})*/