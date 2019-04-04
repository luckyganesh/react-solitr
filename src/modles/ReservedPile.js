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

    addCard(card){
        return this.cards.push(card);
    }

    getCard(){
        return this.cards.pop();
    }
}

export default ReservedPile;