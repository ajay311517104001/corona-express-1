(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{11:function(e,t,a){},36:function(e,t,a){e.exports=a(65)},41:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var l=a(2),n=a(3),r=a(5),c=a(4),o=a(0),s=a.n(o),i=a(32),m=a.n(i),u=(a(41),a(15)),E=a(10),d=(a(11),function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){var e=Date().split(" ");return s.a.createElement("div",null,s.a.createElement("center",null,e[0],",",e[2]," ",e[1]))}}]),a}(s.a.Component)),h=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{class:"navbar"},s.a.createElement("ul",null,s.a.createElement("li",null," ",s.a.createElement(u.b,{to:"/",style:{color:"#C2D9DD"}},"WORLD")),s.a.createElement("li",null," ",s.a.createElement(u.b,{to:"/india",style:{color:"#C2D9DD"}},"INDIA")),s.a.createElement("li",null,"help"))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("center",null,s.a.createElement(d,null)),s.a.createElement("center",null,s.a.createElement("h1",{style:{color:"grey"}},"\u2584\ufe3b\u30c7=COVID-INDIA\u2550\u2501\u4e00")))}}]),a}(o.Component),b=a(13),p=a.n(b),v=a(16);var y=function(e){var t=e.changer;return s.a.createElement("div",{className:"searchdiv"},s.a.createElement("form",{className:"search-container"},s.a.createElement("div",null,s.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search....",onChange:t}),s.a.createElement("img",{className:"search-icon",src:"http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"}))))},f=a(17),g=a.n(f),O=function(e){var t=e.items;return s.a.createElement("div",null,t.map((function(e){return s.a.createElement("li",{class:"table-row"},s.a.createElement("div",{class:"col col-1",key:e.id}," ",s.a.createElement("b",null,e.state),s.a.createElement("br",null),s.a.createElement("small",null,"lastupdate:",e.lastupdatedtime," ")),s.a.createElement("div",{class:"col col-2 ",key:e.id,style:{color:"red"}}," ",s.a.createElement("large",null,s.a.createElement("b",null,e.confirmed)," "),s.a.createElement("small",null,s.a.createElement("b",null,"\u21e7",e.deltaconfirmed))),s.a.createElement("div",{class:"col col-3 ",key:e.id,style:{color:"blue"}},s.a.createElement("b",null,e.active)),s.a.createElement("div",{class:"col col-4",style:{color:"green"}}," ",s.a.createElement("large",null,s.a.createElement("b",null,e.recovered)," "),s.a.createElement("small",null,s.a.createElement("b",null,"\u21e7",e.deltarecovered))),s.a.createElement("div",{class:"col col-5",style:{color:"grey"}}," ",s.a.createElement("large",null,s.a.createElement("b",null,e.deaths)," "),s.a.createElement("small",null,s.a.createElement("b",null,"\u21e7",e.deltadeaths))))})))},j=a(18),C=a.n(j),D=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){if(!1===this.props.valuE)var e=s.a.createElement(C.a,{type:"spokes",color:"grey",height:100,width:100});return s.a.createElement("div",{className:"loading"},s.a.createElement("center",null,e))}}]),a}(s.a.Component),x=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{class:"container1"},s.a.createElement("div",{class:"mini",style:{display:"flex",position:"relative",left:"-3em"}},s.a.createElement("div",{class:"box"},s.a.createElement("h5",{style:{color:"red"}},s.a.createElement("br",null),"Confirmed"),s.a.createElement("h6",{className:"today",style:{color:"red",position:"relative",top:"15px"}},s.a.createElement("h5",{style:{color:"red"}},s.a.createElement("b",null,"[+",this.props.glob.deltaconfirmed,"]"))),s.a.createElement("br",null),s.a.createElement("h3",{style:{color:"red"}},s.a.createElement("b",null,this.props.glob.confirmed))),s.a.createElement("div",{class:"box"},s.a.createElement("h5",{style:{color:"blue"}},s.a.createElement("br",null),"Active"),s.a.createElement("h6",{className:"today",style:{color:"red",position:"relative",top:"15px"}},s.a.createElement("br",null)),s.a.createElement("br",null),s.a.createElement("h3",{style:{color:"blue"}},s.a.createElement("b",null,this.props.glob.active))),s.a.createElement("div",{class:"box"},s.a.createElement("h5",{style:{color:"green"}},s.a.createElement("br",null),"Recovered"),s.a.createElement("h6",{className:"today",style:{color:"green",position:"relative",top:"15px"}},s.a.createElement("h5",{style:{color:"green"}},s.a.createElement("b",null,"[+",this.props.glob.deltarecovered,"]"))),s.a.createElement("br",null),s.a.createElement("h3",{style:{color:"green"}},s.a.createElement("b",null,this.props.glob.recovered))),s.a.createElement("div",{class:"box"},s.a.createElement("h5",{style:{color:"grey"}},s.a.createElement("br",null),"Deaths"),s.a.createElement("h6",{className:"today",style:{color:"grey",position:"relative",top:"15px"}},s.a.createElement("h5",{style:{color:"grey"}},s.a.createElement("b",null,"[+",this.props.glob.deltadeaths,"]"))),s.a.createElement("br",null),s.a.createElement("h3",{style:{color:"grey"}},s.a.createElement("b",null,this.props.glob.deaths))))))}}]),a}(s.a.Component),k=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onSearchChange=function(e){n.setState({field:e.target.value})},n.state={items:[],gob:[],flag:!1,field:""},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(p.a.mark((function e(){var t=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("/world").then((function(e){console.log(e.data),t.setState({items:e.data.statewise.slice(1,e.data.statewise.length),gob:e.data.statewise[0],flag:!0})})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){for(var e=0,t=0;t<this.state.items.length;t++)"0"==this.state.items[t].confirmed&&(e+=1);console.log(Date().split(" "));var a=this.state,l=a.items,n=a.field,r=l.filter((function(e){return e.state.toLowerCase().includes(n.toLowerCase())}));return s.a.createElement("div",null,s.a.createElement(x,{glob:this.state.gob}),s.a.createElement(D,{valuE:this.state.flag}),s.a.createElement("div",{class:"container2",style:{position:"relative",top:"10em"}},s.a.createElement("ul",{class:"responsive-table"},s.a.createElement(y,{style:{position:"absolute"},changer:this.onSearchChange}),s.a.createElement("center",null,s.a.createElement("h2",null,"INDIA-STATEWISE"),s.a.createElement("h6",null,this.state.items.length-e,"  States/UTS Affected")),s.a.createElement("li",{class:"table-header"},s.a.createElement("div",{class:"col col-1"},s.a.createElement("b",null,"STATES")),s.a.createElement("div",{class:"col col-2"},s.a.createElement("b",null,"CONFIRMED")),s.a.createElement("div",{class:"col  col-3"},s.a.createElement("b",null,"ACTIVE")),s.a.createElement("div",{class:"col col-4"},s.a.createElement("b",null,"RECOVERED")),s.a.createElement("div",{class:"col col-5"},s.a.createElement("b",null,"DEATHS"))),s.a.createElement(O,{items:r}))))}}]),a}(s.a.Component),w=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{class:"container1"},s.a.createElement("div",{class:"mini"},s.a.createElement("div",{class:"box"},s.a.createElement("h5",{style:{color:"red"}},s.a.createElement("br",null),"Confirmed"),s.a.createElement("h6",{className:"today",style:{color:"red",position:"relative",top:"15px"}},"Today",s.a.createElement("h5",{style:{color:"red"}},s.a.createElement("b",null,"[",this.props.items.todayCases,"]"))),s.a.createElement("br",null),s.a.createElement("h3",{style:{color:"red"}},s.a.createElement("b",null,this.props.items.cases))),s.a.createElement("div",{class:"box"},s.a.createElement("h5",{style:{color:"green"}},s.a.createElement("br",null),"Recovered"),s.a.createElement("h6",{style:{color:"red",position:"relative",top:"15px"}},"Critical",s.a.createElement("h5",{style:{color:"red"}},s.a.createElement("b",null,"[",this.props.items.critical,"]"))),s.a.createElement("br",null),s.a.createElement("h3",{style:{color:"green"}},s.a.createElement("b",null,this.props.items.recovered))),s.a.createElement("div",{class:"box"},s.a.createElement("h5",{style:{color:"grey"}},s.a.createElement("br",null),"Deaths"),s.a.createElement("h6",{style:{color:"grey",position:"relative",top:"15px"}},"Today",s.a.createElement("h5",{style:{color:"grey"}},s.a.createElement("b",null,"[",this.props.items.todayDeaths,"]"))),s.a.createElement("br",null),s.a.createElement("h3",{style:{color:"grey"}},s.a.createElement("b",null,this.props.items.deaths)))))}}]),a}(o.Component);var S=function(e){var t=e.items;return console.log("helo",t),s.a.createElement("div",null,t.map((function(e){return s.a.createElement("li",{class:"table-row"},s.a.createElement("div",{class:"col col-1"},s.a.createElement("b",null,e.country)),s.a.createElement("div",{class:"col col-2",style:{color:"red"}},s.a.createElement("b",null,e.cases)),s.a.createElement("div",{class:"col col-3",style:{color:"red"}},s.a.createElement("b",null,"+",e.todayCases)),s.a.createElement("div",{class:"col col-4",style:{color:"grey"}},s.a.createElement("b",null,e.deaths)),s.a.createElement("div",{class:"col col-5",style:{color:"grey"}},s.a.createElement("b",null,"+",e.todayDeaths)),s.a.createElement("div",{class:"col col-6",style:{color:"green"}},s.a.createElement("b",null,e.recovered)),s.a.createElement("div",{class:"col col-7",style:{color:"red"}},s.a.createElement("b",null,e.active)),s.a.createElement("div",{class:"col col-8",style:{color:"red"}},s.a.createElement("b",null,e.critical)),s.a.createElement("div",{class:"col col-9",style:{color:"red"}},s.a.createElement("b",null,e.casesPerOneMillion)))})))},T=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onSearchChange=function(e){n.setState({field:e.target.value})},n.state={items:[],flag:!1,field:""},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(p.a.mark((function e(){var t=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://coronavirus-19-api.herokuapp.com/countries/").then((function(e){console.log(e.data),t.setState({items:e.data,flag:!0})})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.items.slice(1,this.state.items.length).filter((function(t){return t.country.toUpperCase().includes(e.state.field.toUpperCase())}));return s.a.createElement("div",null,this.state.flag?s.a.createElement("div",null,s.a.createElement(w,{items:this.state.items[0]}),s.a.createElement("div",{class:"container2"},s.a.createElement("center",null,s.a.createElement(y,{changer:this.onSearchChange})," "),s.a.createElement("center",null,s.a.createElement("h2",null,"COUNTRY-WISE")),s.a.createElement("ul",{class:"responsive-table"},s.a.createElement("li",{class:"table-header"},s.a.createElement("div",{class:"col col-1"},s.a.createElement("b",null,"Country, other")),s.a.createElement("div",{class:"col col-2"},s.a.createElement("b",null,"Total cases")),s.a.createElement("div",{class:"col col-3"},s.a.createElement("b",null,"Today cases")),s.a.createElement("div",{class:"col col-4"},s.a.createElement("b",null,"Total Deaths")),s.a.createElement("div",{class:"col col-5"},s.a.createElement("b",null,"Today Deaths")),s.a.createElement("div",{class:"col col-6"},s.a.createElement("b",null,"Total Recovered")),s.a.createElement("div",{class:"col col-7"},s.a.createElement("b",null,"Active cases")),s.a.createElement("div",{class:"col col-8"},s.a.createElement("b",null,"Critical Cases")),s.a.createElement("div",{class:"col col-9"},s.a.createElement("b",null,"Total cases/1M-p"))),s.a.createElement(S,{items:t})))):s.a.createElement("div",{style:{position:"relative",top:"40em",left:"39em"}},s.a.createElement(C.a,{type:"spokes",color:"grey",height:100,width:100})))}}]),a}(o.Component),N=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(T,null))}}]),a}(o.Component),I=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(u.a,null,s.a.createElement(h,null),s.a.createElement(E.c,null,s.a.createElement(E.a,{exact:!0,path:"/",component:N}),s.a.createElement(E.a,{exact:!0,path:"/india",component:k}))))}}]),a}(s.a.Component);m.a.render(s.a.createElement(I,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.3ffcc71b.chunk.js.map