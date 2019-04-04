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


    getSource(sourceDetails){
        if(sourceDetails === "deck"){
            return this.deck;
        }
        const source = sourceDetails.split("_");
        return this.reservedPiles[source[1]];
    }

    getDestination(destinationDetails){
        const source = destinationDetails.split("_");
        return this.reservedPiles[+source[1]];
    }

    moveCard(sourceDetails,destinationDetails){
        const source = this.getSource(sourceDetails);
        console.log(sourceDetails);
        console.log(source);
        const destination = this.getDestination(destinationDetails);
        console.log(destination);

        const card = source.getCard(sourceDetails);
        destination.addCard(card);
    }

    getReservedPiles(){
        return this.reservedPiles;
    }
}

export default Game;