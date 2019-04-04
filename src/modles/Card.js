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
}

export default Card;