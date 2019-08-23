(window["webpackJsonprevenue-forecast"]=window["webpackJsonprevenue-forecast"]||[]).push([[0],{196:function(e,t,a){e.exports=a(311)},201:function(e,t,a){},311:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(34),l=a.n(o),c=(a(201),a(157)),i=a(158),m=a(159),u=a(188),h=a(160),s=a(191),p=a(117),y=a(342),d=a(325),f=a(345),E=a(346),b=a(347),g=a(336),w=a(348),v=a(331),O=a(333),j=a(343),S=a(344),k=a(326),C=a(332),U=a(334),x=a(338),N=a(341),P=a(350),I=a(335);function A(e,t){return e*(1-t)}function G(e,t,a){for(var n=new Array(t),r=0;r<t;r++)n[r]=new Array(t).fill(0);for(var o=0;o<t;o++)n[o][o]=e;for(var l=0;l<t;l++)for(var c=0;c<t;c++)0!==c&&(n[l][c]=0!==n[l][c-1]?A(n[l][c-1],a):n[l][c]);return n.reduce(function(e,t){return e.map(function(e,a){return t[a]+e})})}function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(a,!0).forEach(function(t){Object(c.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var B={global:{colors:{brand:"#228BE6"},font:{family:"Roboto",size:"14px",height:"20px"}}},D=function(e){return r.a.createElement(p.a,Object.assign({tag:"header",direction:"row",align:"center",justify:"between",background:"brand",pad:{left:"medium",right:"small",vertical:"small"},elevation:"medium",style:{zIndex:"1"}},e))},J=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={showSidebar:!1,cohorts:[{id:"1",name:"A",montlyUser:100,churn:.3},{id:"2",name:"B",montlyUser:50,churn:.1},{id:"3",name:"C",montlyUser:100,churn:.2}],months:24},a}return Object(s.a)(t,e),Object(m.a)(t,[{key:"parseInput",value:function(e){return Number.isNaN(parseInt(e))?0:parseInt(e)}},{key:"deleteCohort",value:function(e){console.log("deleteing "+e),this.setState(function(t){return z({},t,{cohorts:t.cohorts.filter(function(t){return t.id!==e})})})}},{key:"render",value:function(){var e=this;console.log(this.state.cohorts);var t,a,n=(t=this.state.cohorts,a=this.state.months,t.map(function(e){return{name:e.name,func:G(e.montlyUser,a,e.churn)}}).map(function(e,t){return e.func.map(function(t,a){return{x:a.toString(),y:e.func[a]}})}));console.log(n);var o=this.state.showSidebar;return r.a.createElement(y.a,{theme:B,full:!0},r.a.createElement(d.a.Consumer,null,function(t){return r.a.createElement(p.a,{fill:!0},r.a.createElement(D,null,r.a.createElement(f.a,{level:"3",margin:"none"},"Revenue forecast"),r.a.createElement(E.a,{icon:r.a.createElement(k.a,null),onClick:function(){return e.setState({showSidebar:!e.state.showSidebar})}})),r.a.createElement(p.a,{direction:"row",flex:!0,overflow:{horizontal:"hidden"}},r.a.createElement(p.a,{flex:!0,align:"center"},r.a.createElement(b.a,null,r.a.createElement(x.a,{theme:N.a.material},r.a.createElement(P.a,{theme:N.a.material},n.map(function(e){return r.a.createElement(I.a,{interpolation:"natural",data:e})}))),r.a.createElement(g.a,{columns:[{property:"name",header:r.a.createElement(w.a,null,"Name"),primary:!0},{property:"montlyUser",header:r.a.createElement(w.a,null,"Monthly user growth"),primary:!0},{property:"churn",header:r.a.createElement(w.a,null,"Monthly churn"),primary:!0}],data:e.state.cohorts}))),r.a.createElement(p.a,null),o&&"small"===t?r.a.createElement(S.a,null,r.a.createElement(p.a,{background:"light-2",tag:"header",justify:"end",align:"center",direction:"row"},r.a.createElement(E.a,{icon:r.a.createElement(U.a,null),onClick:function(){return e.setState({showSidebar:!1})}})),r.a.createElement(p.a,{fill:!0,background:"light-2"},r.a.createElement(b.a,null,r.a.createElement(g.a,{columns:[{property:"name",header:r.a.createElement(w.a,null,"Name"),primary:!0},{property:"montlyUser",header:r.a.createElement(w.a,null,"Growth"),primary:!0},{property:"churn",header:r.a.createElement(w.a,null,"Churn"),primary:!0},{property:"id",primary:!0,render:function(t){return r.a.createElement(E.a,{icon:r.a.createElement(C.a,null),onClick:function(){return e.deleteCohort(t.id)}})}}],data:e.state.cohorts}),r.a.createElement(O.a,{onSubmit:function(t){e.setState(function(a){return z({},a,{cohorts:a.cohorts.concat([{name:t.value.name,id:t.value.name,churn:e.parseInput(t.value.monthlyChurn),montlyUser:e.parseInput(t.value.monthlyGrowth)}])})})}},r.a.createElement(f.a,{level:"3",margin:"none"},"Add cohort"),r.a.createElement(j.a,{name:"name",label:"Name"}),r.a.createElement(j.a,{name:"monthlyGrowth",label:"Monthly user growth"}),r.a.createElement(j.a,{name:"monthlyChurn",label:"Monthly churn"}),r.a.createElement(E.a,{type:"submit",primary:!0,label:"Submit"}))))):r.a.createElement(v.a,{direction:"horizontal",open:e.state.showSidebar},r.a.createElement(p.a,{flex:!0,width:"large",background:"light-3",elevation:"small",align:"center",justify:"center"},r.a.createElement(b.a,null,r.a.createElement(g.a,{columns:[{property:"name",header:r.a.createElement(w.a,null,"Name"),primary:!0},{property:"montlyUser",header:r.a.createElement(w.a,null,"Growth"),primary:!0},{property:"churn",header:r.a.createElement(w.a,null,"Churn"),primary:!0},{property:"id",primary:!0,render:function(t){return r.a.createElement(E.a,{icon:r.a.createElement(C.a,null),onClick:function(){return e.deleteCohort(t.id)}})}}],data:e.state.cohorts}),r.a.createElement(O.a,{onSubmit:function(t){console.log(t),e.setState(function(e){return z({},e,{cohorts:e.cohorts.concat([{name:t.value.name,id:t.value.name,churn:t.value.monthlyChurn,montlyUser:t.value.monthlyGrowth}])})})}},r.a.createElement(f.a,{level:"3",margin:"none"},"Add cohort"),r.a.createElement(j.a,{name:"name",label:"Name"}),r.a.createElement(j.a,{name:"monthlyGrowth",label:"Monthly user growth"}),r.a.createElement(j.a,{name:"monthlyChurn",label:"Monthly churn"}),r.a.createElement(E.a,{type:"submit",primary:!0,label:"Submit"})))))))}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[196,1,2]]]);
//# sourceMappingURL=main.205a956d.chunk.js.map