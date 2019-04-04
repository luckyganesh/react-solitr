(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,r,t){e.exports=t(19)},18:function(e,r,t){},19:function(e,r,t){"use strict";t.r(r);for(var a=t(0),n=t.n(a),o=t(10),c=t.n(o),s=t(11),i=t.n(s),d=(t(18),t(1)),u=t(2),l=t(5),p=t(4),h=t(6),b=t(3),m=function(e){function r(){return Object(d.a)(this,r),Object(l.a)(this,Object(p.a)(r).apply(this,arguments))}return Object(h.a)(r,e),Object(u.a)(r,[{key:"renderClosedCard",value:function(e,r){var t="card clickable pile-separator";return e.hasNext()?n.a.createElement("div",{className:t,onClick:r},"\ud83c\udca0"):n.a.createElement("div",{className:t,onClick:r},"\ud83c\udcdf")}},{key:"renderOpenCard",value:function(e,r){if(e.hasOpenCard()){var t=e.getOpenCard();return n.a.createElement("div",{style:{color:t.color},className:"card  pile-separator",id:"deck",draggable:"true",onDragStart:r},t.getUnicode())}return n.a.createElement("div",{className:"card  pile-separator"},"\ud83c\udcdf")}},{key:"render",value:function(){return n.a.createElement("div",{class:"deck"},this.renderClosedCard(this.props.deck,this.props.updater),this.renderOpenCard(this.props.deck,this.props.drag))}}]),r}(n.a.Component),k=function(e){function r(){return Object(d.a)(this,r),Object(l.a)(this,Object(p.a)(r).apply(this,arguments))}return Object(h.a)(r,e),Object(u.a)(r,[{key:"render",value:function(){var e=this.props.pile;if(e.hasLastCard()){var r=e.getLastCard();return n.a.createElement("div",{id:"reservedPiles_"+this.props.id,draggable:"true",onDragStart:this.props.drag,className:"card pile-separator",onDrop:this.props.drop,onDragOver:this.props.allowDrop,style:{color:r.color}},r.getUnicode())}return n.a.createElement("div",{id:"reservedPiles_"+this.props.id,className:"card pile-separator",onDrop:this.props.drop,onDragOver:this.props.allowDrop},"\ud83c\udcdf")}}]),r}(n.a.Component),v=function(e){function r(){return Object(d.a)(this,r),Object(l.a)(this,Object(p.a)(r).apply(this,arguments))}return Object(h.a)(r,e),Object(u.a)(r,[{key:"renderClosedCards",value:function(e,r){return new Array(e.getNoOfClosedCards()).fill(0).map(function(e){return n.a.createElement("div",{className:"card adjustable-card",id:"stackPiles_"+r},"\ud83c\udca0")})}},{key:"renderOpenCards",value:function(e,r,t){var a=e.getOpenCards(),o=a.length;return 0===o?[]:a.map(function(e,a){return n.a.createElement("div",{className:"card adjustable-card",style:{color:e.color},id:"stackPiles_"+r+"_"+(o-a),onDragStart:t,draggable:"true"},e.getUnicode())})}},{key:"render",value:function(){var e=this.props,r=e.stackPile,t=e.id,a=e.drag,o=e.drop,c=e.allowDrop;return r.hasCard()?n.a.createElement("div",{className:"stack-pile stack-pile-separator",id:"stackPiles_"+t,onDrop:o,onDragOver:c},this.renderClosedCards(r,t),this.renderOpenCards(r,t,a)):n.a.createElement("div",{className:"stack-pile stack-pile-separator",id:"stackPiles_"+t,onDrop:o,onDragOver:c},n.a.createElement("div",{className:"card adjustable-card",id:"stackPiles_"+t},"\ud83c\udcdf"))}}]),r}(n.a.Component),y=function(e){function r(e){var t;return Object(d.a)(this,r),(t=Object(l.a)(this,Object(p.a)(r).call(this,e))).state={game:e.game},t.drag=t.drag.bind(Object(b.a)(Object(b.a)(t))),t.drop=t.drop.bind(Object(b.a)(Object(b.a)(t))),t.allowDrop=t.allowDrop.bind(Object(b.a)(Object(b.a)(t))),t}return Object(h.a)(r,e),Object(u.a)(r,[{key:"updateDeck",value:function(){this.state.game.updateDeck(),this.setState(function(e){return e})}},{key:"allowDrop",value:function(e){e.preventDefault()}},{key:"drag",value:function(e){e.dataTransfer.setData("text",e.target.id)}},{key:"drop",value:function(e){e.preventDefault();var r=e.dataTransfer.getData("text");this.state.game.moveCard(r,e.target.id),this.setState(function(e){return e})}},{key:"renderReservedPiles",value:function(){for(var e=this.state.game.getReservedPiles(),r=[],t=0;t<e.length;t++)r.push(n.a.createElement(k,{pile:e[t],drag:this.drag,drop:this.drop,allowDrop:this.allowDrop,id:t}));return n.a.createElement("div",{class:"reserved-piles"},r)}},{key:"renderStackPiles",value:function(){var e=this,r=this.state.game.getStackPiles().map(function(r,t){return n.a.createElement(v,{stackPile:r,id:t,drag:e.drag,drop:e.drop,allowDrop:e.allowDrop})});return n.a.createElement("div",{className:"stack-piles"},r)}},{key:"render",value:function(){return n.a.createElement("div",{class:"body"},n.a.createElement("div",{class:"top-cards"},n.a.createElement(m,{deck:this.state.game.getDeck(),updater:this.updateDeck.bind(this),drag:this.drag}),this.renderReservedPiles()),this.renderStackPiles())}}]),r}(n.a.Component),f=t(7),g=function(){function e(r,t,a){Object(d.a)(this,e),this.deck=r,this.reservedPiles=t,this.stackPiles=a}return Object(u.a)(e,[{key:"getDeck",value:function(){return this.deck}},{key:"getStackPiles",value:function(){return this.stackPiles}},{key:"updateDeck",value:function(){this.deck.update()}},{key:"getSource",value:function(e){if("deck"===e)return this.deck;var r=e.split("_"),t=Object(f.a)(r,2),a=t[0],n=t[1];return this[a][n]}},{key:"getDestination",value:function(e){var r=e.split("_"),t=Object(f.a)(r,2),a=t[0],n=t[1];return this[a][n]}},{key:"moveCard",value:function(e,r){var t=this.getSource(e),a=this.getDestination(r),n=e.split("_")[2],o=t.getCards(+n);a.addCards(o)&&t.removeCards(+n)}},{key:"getReservedPiles",value:function(){return this.reservedPiles}}]),e}(),C=function(){function e(r){Object(d.a)(this,e),this.closedCards=r,this.openCards=[]}return Object(u.a)(e,[{key:"hasNext",value:function(){return 0!==this.closedCards.length}},{key:"hasOpenCard",value:function(){return 0!==this.openCards.length}},{key:"getOpenCard",value:function(){return this.openCards[this.openCards.length-1]}},{key:"getCards",value:function(){return this.openCards.slice(-1)}},{key:"removeCards",value:function(){this.openCards.splice(-1)}},{key:"update",value:function(){if(0===this.closedCards.length)return this.closedCards=this.openCards.reverse(),void(this.openCards=[]);var e=this.closedCards.pop();this.openCards.push(e)}}]),e}(),O=function(){function e(r){Object(d.a)(this,e),this.type=r.type,this.number=r.number,this.color=r.color,this.unicode=r.unicode}return Object(u.a)(e,[{key:"getUnicode",value:function(){return this.unicode}},{key:"isNextForReserved",value:function(e){return+this.number===e.number-1&&this.type===e.type}},{key:"checkNumber",value:function(e){return this.number===e}},{key:"isNextForStack",value:function(e){return+this.number===+e.number+1&&this.color!==e.color}}]),e}(),j=function(){function e(r){Object(d.a)(this,e),this.cards=r}return Object(u.a)(e,[{key:"hasLastCard",value:function(){return 0!==this.cards.length}},{key:"getLastCard",value:function(){return this.cards[this.cards.length-1]}},{key:"checkCards",value:function(e){var r=e.slice(),t=r.shift();return 0===r.length||r.every(function(e){var r=t.isNextForReserved(e);return t=e,r})}},{key:"addCards",value:function(e){return!!this.checkCards(e)&&(0===this.cards.length?!!e[0].checkNumber("1")&&(this.cards=this.cards.concat(e),!0):(console.log(+e[0].number+1),console.log(+this.getLastCard().number),console.log(+this.getLastCard().number===e[0].number-1),!!this.getLastCard().isNextForReserved(e[0])&&(this.cards=this.cards.concat(e),!0)))}},{key:"getCards",value:function(){return this.cards.slice(-1)}},{key:"removeCards",value:function(){this.cards.splice(-1)}}]),e}(),D=function(){function e(r,t){Object(d.a)(this,e),this.closedCards=r,this.openCards=t}return Object(u.a)(e,[{key:"hasCard",value:function(){return 0!==this.openCards.length}},{key:"getNoOfClosedCards",value:function(){return this.closedCards.length}},{key:"getOpenCards",value:function(){return this.openCards}},{key:"addCards",value:function(e){return!!this.checkCards(e)&&(this.hasCard()?(console.log(+e[0].number+1),console.log(+this.getLastCard().number),console.log(+this.getLastCard().number===+e[0].number+1),console.log(+this.getLastCard().color!==e[0].color),!!this.getLastCard().isNextForStack(e[0])&&(this.openCards=this.openCards.concat(e),!0)):!!e[0].checkNumber("13")&&(this.openCards=this.openCards.concat(e),!0))}},{key:"getLastCard",value:function(){return this.openCards[this.openCards.length-1]}},{key:"checkCards",value:function(e){var r=e.slice(),t=r.shift();return 0===r.length||r.every(function(e){var r=t.isNextForStack(e);return t=e,r})}},{key:"getCards",value:function(e){return this.openCards.slice(-e)}},{key:"removeCards",value:function(e){if(this.openCards.splice(-e),0===this.openCards.length&&0!==this.closedCards.length){var r=this.closedCards.shift();this.openCards.push(r)}}}]),e}(),N=i.a.shuffle([{type:"spade",number:"1",color:"black",unicode:"\ud83c\udca1"},{type:"spade",number:"2",color:"black",unicode:"\ud83c\udca2"},{type:"spade",number:"3",color:"black",unicode:"\ud83c\udca3"},{type:"spade",number:"4",color:"black",unicode:"\ud83c\udca4"},{type:"spade",number:"5",color:"black",unicode:"\ud83c\udca5"},{type:"spade",number:"6",color:"black",unicode:"\ud83c\udca6"},{type:"spade",number:"7",color:"black",unicode:"\ud83c\udca7"},{type:"spade",number:"8",color:"black",unicode:"\ud83c\udca8"},{type:"spade",number:"9",color:"black",unicode:"\ud83c\udca9"},{type:"spade",number:"10",color:"black",unicode:"\ud83c\udcaa"},{type:"spade",number:"11",color:"black",unicode:"\ud83c\udcab"},{type:"spade",number:"12",color:"black",unicode:"\ud83c\udcad"},{type:"spade",number:"13",color:"black",unicode:"\ud83c\udcae"},{type:"club",number:"1",color:"black",unicode:"\ud83c\udcd1"},{type:"club",number:"2",color:"black",unicode:"\ud83c\udcd2"},{type:"club",number:"3",color:"black",unicode:"\ud83c\udcd3"},{type:"club",number:"4",color:"black",unicode:"\ud83c\udcd4"},{type:"club",number:"5",color:"black",unicode:"\ud83c\udcd5"},{type:"club",number:"6",color:"black",unicode:"\ud83c\udcd6"},{type:"club",number:"7",color:"black",unicode:"\ud83c\udcd7"},{type:"club",number:"8",color:"black",unicode:"\ud83c\udcd8"},{type:"club",number:"9",color:"black",unicode:"\ud83c\udcd9"},{type:"club",number:"10",color:"black",unicode:"\ud83c\udcda"},{type:"club",number:"11",color:"black",unicode:"\ud83c\udcdb"},{type:"club",number:"12",color:"black",unicode:"\ud83c\udcdd"},{type:"club",number:"13",color:"black",unicode:"\ud83c\udcde"},{type:"diamond",number:"1",color:"red",unicode:"\ud83c\udcc1"},{type:"diamond",number:"2",color:"red",unicode:"\ud83c\udcc2"},{type:"diamond",number:"3",color:"red",unicode:"\ud83c\udcc3"},{type:"diamond",number:"4",color:"red",unicode:"\ud83c\udcc4"},{type:"diamond",number:"5",color:"red",unicode:"\ud83c\udcc5"},{type:"diamond",number:"6",color:"red",unicode:"\ud83c\udcc6"},{type:"diamond",number:"7",color:"red",unicode:"\ud83c\udcc7"},{type:"diamond",number:"8",color:"red",unicode:"\ud83c\udcc8"},{type:"diamond",number:"9",color:"red",unicode:"\ud83c\udcc9"},{type:"diamond",number:"10",color:"red",unicode:"\ud83c\udcca"},{type:"diamond",number:"11",color:"red",unicode:"\ud83c\udccb"},{type:"diamond",number:"12",color:"red",unicode:"\ud83c\udccd"},{type:"diamond",number:"13",color:"red",unicode:"\ud83c\udcce"},{type:"heart",number:"1",color:"red",unicode:"\ud83c\udcb1"},{type:"heart",number:"2",color:"red",unicode:"\ud83c\udcb2"},{type:"heart",number:"3",color:"red",unicode:"\ud83c\udcb3"},{type:"heart",number:"4",color:"red",unicode:"\ud83c\udcb4"},{type:"heart",number:"5",color:"red",unicode:"\ud83c\udcb5"},{type:"heart",number:"6",color:"red",unicode:"\ud83c\udcb6"},{type:"heart",number:"7",color:"red",unicode:"\ud83c\udcb7"},{type:"heart",number:"8",color:"red",unicode:"\ud83c\udcb8"},{type:"heart",number:"9",color:"red",unicode:"\ud83c\udcb9"},{type:"heart",number:"10",color:"red",unicode:"\ud83c\udcba"},{type:"heart",number:"11",color:"red",unicode:"\ud83c\udcbb"},{type:"heart",number:"12",color:"red",unicode:"\ud83c\udcbd"},{type:"heart",number:"13",color:"red",unicode:"\ud83c\udcbe"}]).map(function(e){return new O(e)}),w=[],E=0;E<24;E++){var P=N.shift();w.push(P)}for(var S=[],L=0;L<4;L++){var x=new j([]);S.push(x)}for(var _=[],R=0;R<7;R++){for(var F=[],U=0;U<=R-1;U++){var J=N.shift();F.push(J)}var T=[];T.push(N.shift());var A=new D(F,T);_.push(A)}var B=new g(new C(w),S,_);c.a.render(n.a.createElement(y,{game:B}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.10c62a33.chunk.js.map