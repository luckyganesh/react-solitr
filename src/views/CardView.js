import React from "react";

class CardView extends React.Component {
  render() {
    const {
      card,
      onClick,
      className,
      id,
      draggable,
      onDragStart,
      onDrop,
      onDragOver,
      doubleClick
    } = this.props;
    
    return (
      <div
        style={{ color: card.color }}
        className={"card " + className}
        id={id}
        draggable={draggable}
        onDragStart={onDragStart}
        onClick={onClick}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDoubleClick={doubleClick}
      >
        {card.unicode}
      </div>
    );
  }
}

export default CardView;
