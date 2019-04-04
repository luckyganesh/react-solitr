class Game {
    constructor(deck,reservedPiles){
        this.deck = deck;
        this.reservedPiles = reservedPiles;
    }

    getDeck(){
        return this.deck;
    }

    updateDeck(){
        this.deck.update();
    }

    getReservedPiles(){
        return this.reservedPiles;
    }
}

export default Game;