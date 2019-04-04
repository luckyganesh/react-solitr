class ReservedPile {
    constructor(cards){
        this.cards = cards;
    }

    hasLastCard(){
        return this.cards.length !== 0;
    }

    getLastCard(){
        return this.cards[this.cards.length-1];
    }

    addCards(cards){
        this.cards = this.cards.concat(cards);
    }

    getCards(){
        return this.cards.splice(-1);
    }
}

export default ReservedPile;