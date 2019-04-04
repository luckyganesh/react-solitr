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
        if(!this.checkCards(cards)){
            return false;
        }
        if(!this.hasCard()){
            if(!cards[0].checkNumber("13")){
                return false;
            }
            this.openCards = this.openCards.concat(cards);
            return true;
        }
        console.log(+cards[0].number + 1)
        console.log(+this.getLastCard().number)
        console.log((+this.getLastCard().number) === (+cards[0].number + 1))
        console.log((+this.getLastCard().color) !== (cards[0].color))
        if(!this.getLastCard().isNextForStack(cards[0])){
            return false;
        }
        this.openCards = this.openCards.concat(cards);
        return true;
    }

    getLastCard(){
        return this.openCards[this.openCards.length - 1];
    }

    checkCards(checkingCards){
        const cards = checkingCards.slice();
        let initialCard = cards.shift();
        if(cards.length === 0) return true;
        return cards.every(card => {
            const result =initialCard.isNextForStack(card);
            initialCard = card;
            return result;
        })
    }

    getCards(noOfCards){
        return this.openCards.slice(-noOfCards);
    }

    removeCards(noOfCards){
        this.openCards.splice(-noOfCards);
        if(this.openCards.length === 0 && this.closedCards.length !== 0){
            const newCard = this.closedCards.shift();
            this.openCards.push(newCard);
        }
    }
}

export default StackPile;