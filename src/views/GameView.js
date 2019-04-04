import React from "react";
import DeckView from "./DeckView";
import ReservedPileView from "./ReservedPileView";

export default class GameView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { game: props.game };
  }

  updateDeck() {
    this.state.game.updateDeck();
    this.setState(state => state);
  }

  renderReservedPiles() {
      const reservedPiles = this.state.game.getReservedPiles();
      const reservedPilesJSX = [];
      for(let reservedPileNumber = 0; reservedPileNumber < reservedPiles.length; reservedPileNumber++){
        reservedPilesJSX.push(<ReservedPileView pile={reservedPiles[reservedPileNumber]}></ReservedPileView>)
      }
      return (
          <div class="reserved-piles">
              {reservedPilesJSX}
          </div>
      )
  }

  render() {
    return (
      <div class="body">
        <div class="top-cards">
          <DeckView
            deck={this.state.game.getDeck()}
            updater={this.updateDeck.bind(this)}
          />
          {this.renderReservedPiles()}
        </div>
      </div>
    );
  }
}
