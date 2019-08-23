(window["webpackJsonprevenue-forecast"]=window["webpackJsonprevenue-forecast"]||[]).push([[0],{196:function(e,t,n){e.exports=n(311)},201:function(e,t,n){},311:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(34),l=n.n(o),c=(n(201),n(157)),i=n(158),u=n(159),m=n(188),s=n(160),h=n(191),f=n(117),d=n(344),p=n(325),y=n(346),E=n(349),b=n(348),g=n(336),w=n(347),v=n(331),O=n(343),j=n(334),k=n(342),S=n(326),C=n(332),x=n(333),P=n(338),U=n(341),N=n(350),A=n(335);function I(e,t){return e*(1-t)}function z(e,t,n){for(var r=new Array(t),a=0;a<t;a++)r[a]=new Array(t).fill(0);for(var o=0;o<t;o++)r[o][o]=e;for(var l=0;l<t;l++)for(var c=0;c<t;c++)0!==c&&(r[l][c]=0!==r[l][c-1]?I(r[l][c-1],n):r[l][c]);return r.reduce(function(e,t){return e.map(function(e,n){return t[n]+e})})}function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(n,!0).forEach(function(t){Object(c.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var M={global:{colors:{brand:"#228BE6"},font:{family:"Roboto",size:"14px",height:"20px"}}},G=function(e){return a.a.createElement(f.a,Object.assign({tag:"header",direction:"row",align:"center",justify:"between",background:"brand",pad:{left:"medium",right:"small",vertical:"small"},elevation:"medium",style:{zIndex:"1"}},e))},T=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={showSidebar:!1,cohorts:[{id:"1",name:"A",montlyUser:100,churn:.3},{id:"2",name:"B",montlyUser:50,churn:.1},{id:"3",name:"C",montlyUser:100,churn:.2}],months:24},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"parseInput",value:function(e){return Number.isNaN(parseInt(e))?0:parseInt(e)}},{key:"deleteCohort",value:function(e){console.log("deleteing "+e),this.setState(function(t){return D({},t,{cohorts:t.cohorts.filter(function(t){return t.id!==e})})})}},{key:"render",value:function(){var e,t,n=this,r=(e=this.state.cohorts,t=this.state.months,e.map(function(e){return{name:e.name,func:z(e.montlyUser,t,e.churn)}}).map(function(e,t){return e.func.map(function(t,n){return{x:n.toString(),y:e.func[n]}})})),o=this.state.showSidebar;return a.a.createElement(d.a,{theme:M,full:!0},a.a.createElement(p.a.Consumer,null,function(e){return a.a.createElement(f.a,{fill:!0},a.a.createElement(G,null,a.a.createElement(y.a,{level:"3",margin:"none"},"Revenue forecast"),a.a.createElement(E.a,{icon:a.a.createElement(S.a,null),onClick:function(){return n.setState({showSidebar:!n.state.showSidebar})}})),a.a.createElement(f.a,{direction:"row",flex:!0,overflow:{horizontal:"hidden"}},a.a.createElement(f.a,{flex:!0,align:"center"},a.a.createElement(b.a,null,a.a.createElement(P.a,{theme:U.a.material},a.a.createElement(N.a,{theme:U.a.material},r.map(function(e){return a.a.createElement(A.a,{interpolation:"natural",data:e})}))),a.a.createElement(g.a,{columns:[{property:"name",header:a.a.createElement(w.a,null,"Name"),primary:!0},{property:"montlyUser",header:a.a.createElement(w.a,null,"Monthly user growth"),primary:!0},{property:"churn",header:a.a.createElement(w.a,null,"Monthly churn"),primary:!0}],data:n.state.cohorts}))),a.a.createElement(f.a,null),o&&"small"===e?a.a.createElement(O.a,null,a.a.createElement(f.a,{background:"light-2",tag:"header",justify:"end",align:"center",direction:"row"},a.a.createElement(E.a,{icon:a.a.createElement(C.a,null),onClick:function(){return n.setState({showSidebar:!1})}})),a.a.createElement(f.a,{fill:!0,background:"light-2"},a.a.createElement(b.a,null,a.a.createElement(g.a,{columns:[{property:"name",header:a.a.createElement(w.a,null,"Name"),primary:!0},{property:"montlyUser",header:a.a.createElement(w.a,null,"Growth"),primary:!0},{property:"churn",header:a.a.createElement(w.a,null,"Churn"),primary:!0},{property:"id",primary:!0,render:function(e){return a.a.createElement(E.a,{icon:a.a.createElement(x.a,null),onClick:function(){return n.deleteCohort(e.id)}})}}],data:n.state.cohorts}),a.a.createElement(j.a,{onSubmit:function(e){console.log(e),n.setState(function(t){return D({},t,{cohorts:t.cohorts.concat([{name:e.value.name,id:e.value.name,churn:e.value.monthlyChurn,montlyUser:e.value.monthlyGrowth}])})})}},a.a.createElement(y.a,{level:"3",margin:"none"},"Add cohort"),a.a.createElement(k.a,{name:"name",label:"Name"}),a.a.createElement(k.a,{name:"monthlyGrowth",label:"Monthly user growth"}),a.a.createElement(k.a,{name:"monthlyChurn",label:"Monthly churn"}),a.a.createElement(E.a,{type:"submit",primary:!0,label:"Submit"}))))):a.a.createElement(v.a,{direction:"horizontal",open:o},a.a.createElement(f.a,{flex:!0,width:"large",background:"light-3",elevation:"small",align:"center",justify:"center"},a.a.createElement("div",null,"Test"),a.a.createElement("div",null,"Test"),a.a.createElement("div",null,"Test"),">"))))}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[196,1,2]]]);
//# sourceMappingURL=main.210f1c0d.chunk.js.map