import React from 'react';

import { EmptyCard } from '../data/cards';

class ReservedPileView extends React.Component {



    render(){
        const pile = this.props.pile;

        if(pile.hasLastCard()){
            const card = pile.getLastCard();
            console.log(card);
            return <div className="card">{card.getUnicode()}</div>;
        }

        return (<div className="card">{EmptyCard}</div>)
    }
}

export default ReservedPileView;