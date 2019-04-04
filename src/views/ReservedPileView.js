import React from "react";

import { EmptyCard } from "../data/cards";

class ReservedPileView extends React.Component {
  render() {
    const pile = this.props.pile;

    if (pile.hasLastCard()) {
      const card = pile.getLastCard();
      return (
        <div
          id={"reservedPile_" + this.props.id}
          draggable="true"
          onDragStart={this.props.drag}
          className="card"
          onDrop={this.props.drop}
          onDragOver={this.props.allowDrop}
        >
          {card.getUnicode()}
        </div>
      );
    }

    return (
      <div
        id={"reservedPile_" + this.props.id}
        className="card"
        onDrop={this.props.drop}
        onDragOver={this.props.allowDrop}
      >
        {EmptyCard}
      </div>
    );
  }
}

export default ReservedPileView;
