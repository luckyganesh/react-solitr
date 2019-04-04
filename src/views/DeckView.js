import React from 'react';

const Default = "\u{1F0A0}";
const emptyCard = "\u{1F0DF}"

export default class DeckView extends React.Component {

    renderClosedCard(deck,updater){
        const className = "card clickable"
        if(deck.hasNext()){
            return <div className={className} onClick={updater} >{Default}</div>
        }
        return <div className={className} onClick={updater}>{emptyCard}</div>
    }

    renderOpenCard(deck){
        const className = "card"
        if(deck.hasOpenCard()){
            const card = deck.getOpenCard();
            return <div className={className}>{card.getUnicode()}</div>;
        }
        return <div className={className}>{emptyCard}</div>;
    }

    render(){
        return (
            <div class="deck">
            {this.renderClosedCard(this.props.deck,this.props.updater)}
            {this.renderOpenCard(this.props.deck)}
            </div>
        )
    }
}