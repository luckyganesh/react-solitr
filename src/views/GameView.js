import React from "react";
import DeckView from "./DeckView";
import ReservedPileView from "./ReservedPileView";
import StackPileView from "./StackPileView";

export default class GameView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { game: props.game };
    this.drag = this.drag.bind(this);
    this.drop = this.drop.bind(this);
    this.allowDrop = this.allowDrop.bind(this);
  }

  updateDeck() {
    this.state.game.updateDeck();
    this.setState(state => state);
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    this.state.game.moveCard(data, ev.target.id);
    this.setState(state => state);
  }

  renderReservedPiles() {
    const reservedPiles = this.state.game.getReservedPiles();
    const reservedPilesJSX = [];
    for (
      let reservedPileNumber = 0;
      reservedPileNumber < reservedPiles.length;
      reservedPileNumber++
    ) {
      reservedPilesJSX.push(
        <ReservedPileView
          pile={reservedPiles[reservedPileNumber]}
          drag={this.drag}
          drop={this.drop}
          allowDrop={this.allowDrop}
          id={reservedPileNumber}
        />
      );
    }
    return <div class="reserved-piles">{reservedPilesJSX}</div>;
  }

  renderStackPiles() {
    const stackPiles = this.state.game.getStackPiles();
    const stackPilesJSX = stackPiles.map((stackPile, index) => {
      return (
        <StackPileView
          stackPile={stackPile}
          id={index}
          drag={this.drag}
          drop={this.drop}
          allowDrop={this.allowDrop}
        />
      );
    });
    return <div className="stack-piles">{stackPilesJSX}</div>;
  }

  render() {
    return (
      <div class="body">
        <div class="top-cards">
          <DeckView
            deck={this.state.game.getDeck()}
            updater={this.updateDeck.bind(this)}
            drag={this.drag}
          />
          {this.renderReservedPiles()}
        </div>
        {this.renderStackPiles()}
      </div>
    );
  }
}
