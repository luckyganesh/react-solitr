class Game {
    constructor(deck,reservedPiles,stackPiles){
        this.deck = deck;
        this.reservedPiles = reservedPiles;
        this.stackPiles = stackPiles;
    }

    getDeck(){
        return this.deck;
    }

    getStackPiles(){
        return this.stackPiles;
    }
    
    updateDeck(){
        this.deck.update();
    }


    getSource(sourceDetails){
        if(sourceDetails === "deck"){
            return this.deck;
        }
        const [source,id] = sourceDetails.split("_");
        return this[source][id];
    }

    getDestination(destinationDetails){
        const [destination,id] = destinationDetails.split("_");
        return this[destination][id];
    }

    moveCardToDestination(source,destination,noOfCards){
        const cards = source.getCards(+noOfCards);
        const hasAdded = destination.addCards(cards);
        if(hasAdded){
            source.removeCards(+noOfCards);
        }
        return hasAdded;
    }

    moveCard(sourceDetails,destinationDetails){
        const source = this.getSource(sourceDetails);
        const destination = this.getDestination(destinationDetails);
        const noOfCards = sourceDetails.split("_")[2];
        return this.moveCardToDestination(source,destination,noOfCards);
    }

    moveCardToReserved(sourceDetails){
        const source = this.getSource(sourceDetails);
        const noOfCards = +sourceDetails.split("_")[2];
        return this.reservedPiles.some((reservedPile) => {
            return this.moveCardToDestination(source,reservedPile,noOfCards);
        });    
    }

    getReservedPiles(){
        return this.reservedPiles;
    }
}

export default Game;