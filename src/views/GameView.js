import React from 'react';
import DeckView from './DeckView'

export default class GameView extends React.Component {

    constructor(props){
        super(props);
        this.state = { game : props.game};
    }

    updateDeck(){
        this.state.game.updateDeck();
        this.setState(state => state);
    }

    render(){
        return (
            <div>
            <DeckView deck={this.state.game.getDeck()} updater={this.updateDeck.bind(this)} ></DeckView>
            </div>
        );
    }
}