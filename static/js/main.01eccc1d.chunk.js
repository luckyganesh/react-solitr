(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,r,t){e.exports=t(18)},16:function(e,r,t){},18:function(e,r,t){"use strict";t.r(r);for(var n=t(0),o=t.n(n),a=t(9),c=t.n(a),d=(t(16),t(1)),u=t(2),i=t(5),l=t(4),s=t(6),p=t(3),b=function(e){function r(){return Object(d.a)(this,r),Object(i.a)(this,Object(l.a)(r).apply(this,arguments))}return Object(s.a)(r,e),Object(u.a)(r,[{key:"renderClosedCard",value:function(e,r){return e.hasNext()?o.a.createElement("div",{className:"card clickable",onClick:r},"\ud83c\udca0"):o.a.createElement("div",{className:"card clickable",onClick:r},"\ud83c\udcdf")}},{key:"renderOpenCard",value:function(e,r){if(e.hasOpenCard()){var t=e.getOpenCard();return o.a.createElement("div",{style:{color:t.color},className:"card",id:"deck",draggable:"true",onDragStart:r},t.getUnicode())}return o.a.createElement("div",{className:"card"},"\ud83c\udcdf")}},{key:"render",value:function(){return o.a.createElement("div",{class:"deck"},this.renderClosedCard(this.props.deck,this.props.updater),this.renderOpenCard(this.props.deck,this.props.drag))}}]),r}(o.a.Component),h=function(e){function r(){return Object(d.a)(this,r),Object(i.a)(this,Object(l.a)(r).apply(this,arguments))}return Object(s.a)(r,e),Object(u.a)(r,[{key:"render",value:function(){var e=this.props.pile;if(e.hasLastCard()){var r=e.getLastCard();return o.a.createElement("div",{id:"reservedPile_"+this.props.id,draggable:"true",onDragStart:this.props.drag,className:"card",onDrop:this.props.drop,onDragOver:this.props.allowDrop,style:{color:r.color}},r.getUnicode())}return o.a.createElement("div",{id:"reservedPile_"+this.props.id,className:"card",onDrop:this.props.drop,onDragOver:this.props.allowDrop},"\ud83c\udcdf")}}]),r}(o.a.Component),m=function(e){function r(e){var t;return Object(d.a)(this,r),(t=Object(i.a)(this,Object(l.a)(r).call(this,e))).state={game:e.game},t.drag=t.drag.bind(Object(p.a)(Object(p.a)(t))),t.drop=t.drop.bind(Object(p.a)(Object(p.a)(t))),t.allowDrop=t.allowDrop.bind(Object(p.a)(Object(p.a)(t))),t}return Object(s.a)(r,e),Object(u.a)(r,[{key:"updateDeck",value:function(){this.state.game.updateDeck(),this.setState(function(e){return e})}},{key:"allowDrop",value:function(e){e.preventDefault()}},{key:"drag",value:function(e){e.dataTransfer.setData("text",e.target.id)}},{key:"drop",value:function(e){e.preventDefault();var r=e.dataTransfer.getData("text");this.state.game.moveCard(r,e.target.id),this.setState(function(e){return e})}},{key:"renderReservedPiles",value:function(){for(var e=this.state.game.getReservedPiles(),r=[],t=0;t<e.length;t++)r.push(o.a.createElement(h,{pile:e[t],drag:this.drag,drop:this.drop,allowDrop:this.allowDrop,id:t}));return o.a.createElement("div",{class:"reserved-piles"},r)}},{key:"render",value:function(){return o.a.createElement("div",{class:"body"},o.a.createElement("div",{class:"top-cards"},o.a.createElement(b,{deck:this.state.game.getDeck(),updater:this.updateDeck.bind(this),drag:this.drag}),this.renderReservedPiles()))}}]),r}(o.a.Component),y=function(){function e(r,t){Object(d.a)(this,e),this.deck=r,this.reservedPiles=t}return Object(u.a)(e,[{key:"getDeck",value:function(){return this.deck}},{key:"updateDeck",value:function(){this.deck.update()}},{key:"getSource",value:function(e){if("deck"===e)return this.deck;var r=e.split("_");return this.reservedPiles[r[1]]}},{key:"getDestination",value:function(e){var r=e.split("_");return this.reservedPiles[+r[1]]}},{key:"moveCard",value:function(e,r){var t=this.getSource(e);console.log(e),console.log(t);var n=this.getDestination(r);console.log(n);var o=t.getCard(e);n.addCard(o)}},{key:"getReservedPiles",value:function(){return this.reservedPiles}}]),e}(),k=function(){function e(r){Object(d.a)(this,e),this.closedCards=r,this.openCards=[]}return Object(u.a)(e,[{key:"hasNext",value:function(){return 0!==this.closedCards.length}},{key:"hasOpenCard",value:function(){return 0!==this.openCards.length}},{key:"getOpenCard",value:function(){return this.openCards[this.openCards.length-1]}},{key:"getCard",value:function(){return this.openCards.pop()}},{key:"update",value:function(){if(0===this.closedCards.length)return this.closedCards=this.openCards.reverse(),void(this.openCards=[]);var e=this.closedCards.pop();this.openCards.push(e)}}]),e}(),v=t(10),f=t.n(v),g=function(){function e(r){Object(d.a)(this,e),this.type=r.type,this.number=r.number,this.color=r.color,this.unicode=r.unicode}return Object(u.a)(e,[{key:"getUnicode",value:function(){return this.unicode}}]),e}(),C=function(){function e(r){Object(d.a)(this,e),this.cards=r}return Object(u.a)(e,[{key:"hasLastCard",value:function(){return 0!==this.cards.length}},{key:"getLastCard",value:function(){return this.cards[this.cards.length-1]}},{key:"addCard",value:function(e){return this.cards.push(e)}},{key:"getCard",value:function(){return this.cards.pop()}}]),e}(),O=f.a.shuffle([{type:"spade",number:"1",color:"black",unicode:"\ud83c\udca1"},{type:"spade",number:"2",color:"black",unicode:"\ud83c\udca2"},{type:"spade",number:"3",color:"black",unicode:"\ud83c\udca3"},{type:"spade",number:"4",color:"black",unicode:"\ud83c\udca4"},{type:"spade",number:"5",color:"black",unicode:"\ud83c\udca5"},{type:"spade",number:"6",color:"black",unicode:"\ud83c\udca6"},{type:"spade",number:"7",color:"black",unicode:"\ud83c\udca7"},{type:"spade",number:"8",color:"black",unicode:"\ud83c\udca8"},{type:"spade",number:"9",color:"black",unicode:"\ud83c\udca9"},{type:"spade",number:"10",color:"black",unicode:"\ud83c\udcaa"},{type:"spade",number:"11",color:"black",unicode:"\ud83c\udcab"},{type:"spade",number:"12",color:"black",unicode:"\ud83c\udcad"},{type:"spade",number:"13",color:"black",unicode:"\ud83c\udcae"},{type:"club",number:"1",color:"black",unicode:"\ud83c\udcd1"},{type:"club",number:"2",color:"black",unicode:"\ud83c\udcd2"},{type:"club",number:"3",color:"black",unicode:"\ud83c\udcd3"},{type:"club",number:"4",color:"black",unicode:"\ud83c\udcd4"},{type:"club",number:"5",color:"black",unicode:"\ud83c\udcd5"},{type:"club",number:"6",color:"black",unicode:"\ud83c\udcd6"},{type:"club",number:"7",color:"black",unicode:"\ud83c\udcd7"},{type:"club",number:"8",color:"black",unicode:"\ud83c\udcd8"},{type:"club",number:"9",color:"black",unicode:"\ud83c\udcd9"},{type:"club",number:"10",color:"black",unicode:"\ud83c\udcda"},{type:"club",number:"11",color:"black",unicode:"\ud83c\udcdb"},{type:"club",number:"12",color:"black",unicode:"\ud83c\udcdd"},{type:"club",number:"13",color:"black",unicode:"\ud83c\udcde"},{type:"diamond",number:"1",color:"red",unicode:"\ud83c\udcc1"},{type:"diamond",number:"2",color:"red",unicode:"\ud83c\udcc2"},{type:"diamond",number:"3",color:"red",unicode:"\ud83c\udcc3"},{type:"diamond",number:"4",color:"red",unicode:"\ud83c\udcc4"},{type:"diamond",number:"5",color:"red",unicode:"\ud83c\udcc5"},{type:"diamond",number:"6",color:"red",unicode:"\ud83c\udcc6"},{type:"diamond",number:"7",color:"red",unicode:"\ud83c\udcc7"},{type:"diamond",number:"8",color:"red",unicode:"\ud83c\udcc8"},{type:"diamond",number:"9",color:"red",unicode:"\ud83c\udcc9"},{type:"diamond",number:"10",color:"red",unicode:"\ud83c\udcca"},{type:"diamond",number:"11",color:"red",unicode:"\ud83c\udccb"},{type:"diamond",number:"12",color:"red",unicode:"\ud83c\udccd"},{type:"diamond",number:"13",color:"red",unicode:"\ud83c\udcce"},{type:"heart",number:"1",color:"red",unicode:"\ud83c\udcb1"},{type:"heart",number:"2",color:"red",unicode:"\ud83c\udcb2"},{type:"heart",number:"3",color:"red",unicode:"\ud83c\udcb3"},{type:"heart",number:"4",color:"red",unicode:"\ud83c\udcb4"},{type:"heart",number:"5",color:"red",unicode:"\ud83c\udcb5"},{type:"heart",number:"6",color:"red",unicode:"\ud83c\udcb6"},{type:"heart",number:"7",color:"red",unicode:"\ud83c\udcb7"},{type:"heart",number:"8",color:"red",unicode:"\ud83c\udcb8"},{type:"heart",number:"9",color:"red",unicode:"\ud83c\udcb9"},{type:"heart",number:"10",color:"red",unicode:"\ud83c\udcba"},{type:"heart",number:"11",color:"red",unicode:"\ud83c\udcbb"},{type:"heart",number:"12",color:"red",unicode:"\ud83c\udcbd"},{type:"heart",number:"13",color:"red",unicode:"\ud83c\udcbe"}]).map(function(e){return new g(e)}),j=[],D=0;D<24;D++){var w=O.shift();j.push(w)}for(var E=[],P=0;P<4;P++){var N=new C([]);E.push(N)}var S=new y(new k(j),E);c.a.render(o.a.createElement(m,{game:S}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.01eccc1d.chunk.js.map