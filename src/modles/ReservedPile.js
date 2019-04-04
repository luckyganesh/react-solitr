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

    checkCards(checkingCards){
        const cards = checkingCards.slice();
        let initialCard = cards.shift();
        if(cards.length === 0) return true;
        return cards.every(card => {
            const result =initialCard.isNextForReserved(card);
            initialCard = card;
            return result;
        })
    }

    addCards(cards){
        if(!this.checkCards(cards)){
            return false;
        }
        if(this.cards.length === 0){
            if(!cards[0].checkNumber("1")){
                return false;
            }
            this.cards = this.cards.concat(cards);
            return true;
        }
        console.log(+cards[0].number + 1)
        console.log(+this.getLastCard().number)
        console.log((+this.getLastCard().number) === (cards[0].number - 1))
        if(!this.getLastCard().isNextForReserved(cards[0])){
            return false;
        }
        this.cards = this.cards.concat(cards);
        return true;
    }

    getCards(){
        return this.cards.slice(-1);
    }

    removeCards(){
        this.cards.splice(-1);
    }
}

export default ReservedPile;