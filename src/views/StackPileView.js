import React from "react";
import { EmptyCard, Default } from "../data/cards";

class StackPileView extends React.Component {
  renderClosedCards(stackPile, id) {
    return new Array(stackPile.getNoOfClosedCards()).fill(0).map(x => (
      <div className="card adjustable-card" id={"stackPiles_" + id}>
        {Default}
      </div>
    ));
  }

  renderOpenCards(stackPile, id, drag) {
    const openCards = stackPile.getOpenCards();
    const noOfOpenCards = openCards.length;
    if(noOfOpenCards == 0){
      return [];
    }
    return openCards.map((card, index) => {
      return (
        <div
          className="card adjustable-card"
          style={{ color: card.color }}
          id={"stackPiles_" + id + "_" + (noOfOpenCards - index)}
          onDragStart={drag}
          draggable="true"
        >
          {card.getUnicode()}
        </div>
      );
    });
  }

  render() {
    const { stackPile, id, drag, drop, allowDrop } = this.props;
    console.log(stackPile.hasCard(),id,stackPile.openCards.length);
    if (!stackPile.hasCard()) {
      console.log("it came");
      return (
        <div
          className="stack-pile"
          id={"stackPiles_" + id}
          onDrop={drop}
          onDragOver={allowDrop}
        >
          <div className="card adjustable-card" id={"stackPiles_" + id}>{EmptyCard}</div>
        </div>
      );
    }

    return (
      <div
        className="stack-pile"
        id={"stackPiles_" + id}
        onDrop={drop}
        onDragOver={allowDrop}
      >
        {this.renderClosedCards(stackPile, id)}
        {this.renderOpenCards(stackPile, id, drag)}
      </div>
    );
  }
}

export default StackPileView;
