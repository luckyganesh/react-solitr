import React from 'react';
import ReactDOM from 'react-dom';

//css
import './main.css';

//view models
import GameView from './views/GameView';

//game modles
import Game from './modles/Game';
import Deck from './modles/Deck';
import cards from './data/cards';
import lodash from 'lodash';
import Card from './modles/Card'

const shuffledCards = lodash.shuffle(cards);

const deckCards = [];
for(let cardNumber = 0; cardNumber < 24; cardNumber++){
    const card = shuffledCards.shift()
    deckCards.push(new Card(card));
}

const deck = new Deck(deckCards);
const game = new Game(deck);

ReactDOM.render(<GameView game={game}/>,document.getElementById('root'));