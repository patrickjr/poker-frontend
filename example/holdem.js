
/* global Deck */

var prefix = Deck.prefix
var transform = prefix('transform')
var translate = Deck.translate

var $dealerSpot = document.getElementById('dealer-spot')
//var $pokerTable = document.getElementById('poker-table')
//var $topbar = document.getElementById('topbar')

//var $top = document.getElementById('player-1-spot').offsetTop
//var $left = document.getElementById('player-1-spot').offsetLeft
//var $leftBound = window.innerWidth


//var $deal = document.createElement('button')
//$deal.textContent = 'Deal'
//$topbar.appendChild($deal)

// create Deck
var deck = Deck()

// add to DOM
deck.mount($dealerSpot)
deck.intro()
deck.fan()
deck.bysuit()
deck.shuffle()
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