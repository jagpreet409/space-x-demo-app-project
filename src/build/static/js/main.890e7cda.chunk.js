(this["webpackJsonpspace-x-demo-app"]=this["webpackJsonpspace-x-demo-app"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t(12)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(3),r=t.n(l),s=(t(9),t(1)),u=function(){return c.a.createElement("nav",{className:"navbar navbar-light bg-light"},c.a.createElement("span",{className:"navbar-brand mb-0 h1"},c.a.createElement("b",null,"SpaceX Launch Programs")),c.a.createElement("span",null,c.a.createElement("h5",null,"Developer : Jagpreet")))};var i=function(e){return c.a.createElement("button",{className:"btn btn-outline-success mr-2 btn-sm",value:e.data,style:{margin:"5px"},onClick:e.handleClick}," ",e.data)};t(10);var m=function(e){var a=e.datas,t=Object(n.useState)(""),l=Object(s.a)(t,2),r=l[0],u=l[1],i={missionName:a&&a?a.mission_name:null,missionId:a&&a?a.mission_id:null,url:a&&a&&a.links?a.links.mission_patch_small:null,launchYear:a&&a?a.launch_year:null,launchSuccess:a&&a?a.launch_success:null};return Object(n.useEffect)((function(){u(a&&a&&a.rocket?a.rocket.first_stage.cores[0].land_success:null)}),[a&&a&&a.rocket?a.rocket.first_stage.cores[0].land_success:null]),c.a.createElement("div",{className:"Card"},c.a.createElement("div",{className:"Card__img"},c.a.createElement("img",{src:i.url,alt:""})),c.a.createElement("div",{className:"Card__name"},i.missionName),c.a.createElement("div",{className:"Card__types"},c.a.createElement("p",{className:"title"},c.a.createElement("b",null,"Mission Id : ")),c.a.createElement("p",null,i.missionId)),c.a.createElement("div",{className:"Card__info"},c.a.createElement("div",{className:"Card__datas Card__datas--weight"},c.a.createElement("p",{className:"title"},"Launch Year :",i.launchYear)),c.a.createElement("div",{className:"Card__datas Card__datas--weight"},c.a.createElement("p",{className:"title"},"Launch Success : ",i.launchSuccess.toString())),c.a.createElement("div",{className:"Card__datas Card__datas--ability"},c.a.createElement("p",{className:"title"},"Land Success : ",r?r.toString():"false"))))};var o=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"btn btn-outline-success mr-4 btn-sm",value:e.data,style:{margin:"5px"},onClick:e.handleClick},e.data))};var d=function(e){return c.a.createElement("div",null,c.a.createElement("button",{className:"btn btn-outline-success mr-4 btn-sm",style:{margin:"5px"},value:e.data,onClick:e.handleClick},e.data))};t(11);var h=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(!1),h=Object(s.a)(r,2),E=h[0],f=h[1],b=Object(n.useState)(!1),p=Object(s.a)(b,2),v=p[0],_=p[1],g=Object(n.useState)([]),j=Object(s.a)(g,2),N=j[0],O=j[1],k=Object(n.useState)(!1),S=Object(s.a)(k,2),C=S[0],y=S[1],w=Object(n.useState)([]),L=Object(s.a)(w,2),x=L[0],F=L[1],D=Object(n.useState)(!1),I=Object(s.a)(D,2),X=I[0],Y=I[1],J=Object(n.useState)([]),U=Object(s.a)(J,2),B=U[0],M=U[1],W=Object(n.useState)(!1),A=Object(s.a)(W,2),P=A[0],$=A[1],q=Object(n.useState)(!1),z=Object(s.a)(q,2),G=z[0],H=z[1];Object(n.useEffect)((function(){fetch("https://api.spaceXdata.com/v3/launches?limit=8").then((function(e){return e.json()})).then((function(e){return l(e)}),f(!1))}),[]);var K=function(){_(!0)},Q=function(e){var a=e.target.value;f(!0),fetch("https://api.spacexdata.com/v3/launches?limit=8&launch_success=true&land_success=true&launch_year="+a).then((function(e){return e.json()})).then((function(e){e.length>0?(O(e),y(!0),Y(!1),$(!1),f(!1)):(H(!0),Y(!1),$(!1),f(!1)),K()}),(function(e){alert("Unable to fetch Data...")}))},R=function(e){f(!0);var a=e.target.value;fetch("https://api.spaceXdata.com/v3/launches?limit=8&launch_success="+a).then((function(e){return e.json()})).then((function(e){e.length>0?(f(!1),F(e),Y(!0),y(!1),$(!1)):(H(!0),y(!1),$(!1),f(!1)),K()}),(function(e){alert("Unable to fetch Data...")}))},T=function(e){f(!0);var a=e.target.value;fetch("https://api.spaceXdata.com/v3/launches?limit=8&launch_success=true&land_success="+a).then((function(e){return e.json()})).then((function(e){e.length>0?(M(e),$(!0),f(!1),y(!1),Y(!1)):(H(!0),y(!1),Y(!1),f(!1)),K()}),(function(e){alert("Unable to fetch Data...")}))};return c.a.createElement(c.a.Fragment,null,c.a.createElement(u,{id:"navbar"}),E?c.a.createElement("h1",{style:{textAlign:"center"}},"Loading..."):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-md-2"},c.a.createElement("div",{className:"card mb-2 shadow-sm"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",null,"Filters"),c.a.createElement("hr",null),c.a.createElement("span",{className:"p-6"},"Launch Year"),c.a.createElement("hr",null),["2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"].map((function(e){return c.a.createElement(i,{id:"FilterData",data:e,hide:K,handleClick:Q})})),c.a.createElement("hr",null),c.a.createElement("span",{className:"p-6"},"Successful Launch"),c.a.createElement("hr",null),["true","false"].map((function(e){return c.a.createElement(o,{id:"LaunchFilter",data:e,hide:K,handleClick:R})})),c.a.createElement("hr",null),c.a.createElement("span",{className:"p-6"},"Successful Landing"),c.a.createElement("hr",null),["true","false"].map((function(e){return c.a.createElement(d,{id:"LandFilter",data:e,hide:K,handleClick:T})})),c.a.createElement("hr",null)))),c.a.createElement("div",{className:"grid-container"},v?null:t.map((function(e,a){return c.a.createElement(m,{key:a,datas:e})})),C?N.map((function(e,a){return c.a.createElement(m,{key:a,datas:e})})):G?c.a.createElement("h1",null,c.a.createElement("center",null,"No data found.....")):null,X?x.map((function(e,a){return c.a.createElement(m,{key:a,datas:e})})):null,P?B.map((function(e,a){return c.a.createElement(m,{key:a,datas:e})})):null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.hydrate(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.890e7cda.chunk.js.map