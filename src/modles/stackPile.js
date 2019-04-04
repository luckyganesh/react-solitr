class StackPile {
    constructor(closedCards,openCards){
        this.closedCards = closedCards;
        this.openCards = openCards;
    }

    hasCard(){
        return this.openCards.length !== 0;
    }

    getNoOfClosedCards(){
        return this.closedCards.length;
    }

    getOpenCards(){
        return this.openCards;
    }

    addCards(cards){
        this.openCards = this.openCards.concat(cards);
    }

    getCards(noOfCards){
        const cards = this.openCards.splice(-noOfCards);
        if(this.openCards.length === 0 && this.closedCards.length !== 0){
            const newCard = this.closedCards.shift();
            this.openCards.push(newCard);
        }
        return cards;
    }
}

export default StackPile;