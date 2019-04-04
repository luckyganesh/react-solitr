import React from 'react';
import ReactDOM from 'react-dom';

//css
import './main.css';

//view models
import GameView from './views/GameView';

//game modles
import Game from './modles/Game';
import Deck from './modles/Deck';
import { Cards } from './data/cards';
import lodash from 'lodash';
import Card from './modles/Card';
import ReservedPile from './modles/ReservedPile';

const shuffledCards = lodash.shuffle(Cards).map(card => new Card(card));


const deckCards = [];
for (let cardNumber = 0; cardNumber < 24; cardNumber++) {
    const card = shuffledCards.shift()
    deckCards.push(card);
}

const reservedPiles = [];
for (let noOfReservedPiles = 0; noOfReservedPiles < 4; noOfReservedPiles++) {
    const reservedPile = new ReservedPile([]);
    reservedPiles.push(reservedPile);
}

const deck = new Deck(deckCards);
const game = new Game(deck, reservedPiles);

ReactDOM.render(<GameView game={game} />, document.getElementById('root'));