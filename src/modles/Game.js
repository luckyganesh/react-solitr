class Game {
    constructor(deck){
        this.deck = deck;
    }

    getDeck(){
        return this.deck;
    }

    updateDeck(){
        this.deck.update();
    }
}

export default Game;