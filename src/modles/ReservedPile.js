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
}

export default ReservedPile;