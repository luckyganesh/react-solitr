class Card {
    constructor(cardDetails){
      this.type = cardDetails.type;
      this.number = cardDetails.number;
      this.color = cardDetails.color;
      this.unicode = cardDetails.unicode;
    }

    getUnicode(){
        return this.unicode;
    }

    isNextForReserved(card){
      return (+this.number === card.number - 1) && (this.type === card.type);
    }

    checkNumber(number){
      return this.number === number;
    }

    isNextForStack(card){
      return (+this.number === +card.number + 1) && (this.color !== card.color);
    }
}

export default Card;