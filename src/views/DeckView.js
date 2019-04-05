import React from "react";

import { EmptyCard, Default } from "../data/cards";
import CardView from "./CardView";

export default class DeckView extends React.Component {
  renderClosedCard(deck, updater) {
    const className = "clickable pile-separator";
    if (deck.hasNext()) {
      return (
        <CardView className={className} onClick={updater} card={Default} />
      );
    }
    return (
      <CardView className={className} card={EmptyCard} onClick={updater} />
    );
  }

  renderOpenCard(deck, drag, doubleClick) {
    const className = "pile-separator";
    if (deck.hasOpenCard()) {
      const card = deck.getOpenCard();
      return (
        <CardView
          className={className}
          id="deck"
          draggable="true"
          onDragStart={drag}
          card={card}
          doubleClick={doubleClick}
        />
      );
    }
    return <CardView className={className} card={EmptyCard} />;
  }

  render() {
    return (
      <div class="deck">
        {this.renderClosedCard(this.props.deck, this.props.updater)}
        {this.renderOpenCard(this.props.deck, this.props.drag,this.props.doubleClick)}
      </div>
    );
  }
}
