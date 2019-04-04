import React from 'react';

import {EmptyCard,Default} from '../data/cards'

export default class DeckView extends React.Component {

    renderClosedCard(deck,updater){
        const className = "card clickable pile-separator"
        if(deck.hasNext()){
            return <div className={className} onClick={updater} >{Default}</div>
        }
        return <div className={className} onClick={updater}>{EmptyCard}</div>
    }

    renderOpenCard(deck,drag){
        const className = "card  pile-separator"
        if(deck.hasOpenCard()){
            const card = deck.getOpenCard();
            return <div style={{"color":card.color}} className={className} id="deck" draggable="true" onDragStart={drag}>{card.getUnicode()}</div>;
        }
        return <div className={className}>{EmptyCard}</div>;
    }

    render(){
        return (
            <div class="deck">
            {this.renderClosedCard(this.props.deck,this.props.updater)}
            {this.renderOpenCard(this.props.deck,this.props.drag)}
            </div>
        )
    }
}